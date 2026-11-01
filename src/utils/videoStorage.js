const DB_NAME = 'BeyondCodePortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'mediaStore';
const VIDEO_KEY = 'activity9_video';

function openDB() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this browser environment.'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(new Error(`Failed to open IndexedDB: ${event.target.error?.message || 'Unknown error'}`));
    };
  });
}

/**
 * Saves a demo video File or Blob to IndexedDB.
 * @param {Blob|File} file
 * @param {string} [fileName]
 * @returns {Promise<{ id: string, name: string, type: string, size: number }>}
 */
export async function saveVideoToDB(file, fileName) {
  if (!file) {
    throw new Error('No video file provided.');
  }

  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const record = {
        id: VIDEO_KEY,
        blob: file,
        name: fileName || file.name || 'demo_video.mp4',
        type: file.type || 'video/mp4',
        size: file.size || 0,
        updatedAt: Date.now()
      };

      const putRequest = store.put(record);

      putRequest.onsuccess = () => {
        resolve({
          id: VIDEO_KEY,
          name: record.name,
          type: record.type,
          size: record.size
        });
      };

      putRequest.onerror = (event) => {
        reject(new Error(`Could not store video in IndexedDB: ${event.target.error?.message || 'Write error'}`));
      };

      transaction.onerror = (event) => {
        reject(new Error(`Transaction failed while storing video: ${event.target.error?.message || 'Transaction error'}`));
      };
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Retrieves the stored video record from IndexedDB.
 * @returns {Promise<{ blob: Blob, name: string, type: string, size: number } | null>}
 */
export async function getVideoFromDB() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(VIDEO_KEY);

      getRequest.onsuccess = (event) => {
        const record = event.target.result;
        if (!record || !record.blob) {
          resolve(null);
        } else {
          resolve({
            blob: record.blob,
            name: record.name,
            type: record.type,
            size: record.size
          });
        }
      };

      getRequest.onerror = (event) => {
        reject(new Error(`Failed to retrieve video from IndexedDB: ${event.target.error?.message || 'Read error'}`));
      };
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Deletes the stored demo video from IndexedDB.
 * @returns {Promise<boolean>}
 */
export async function deleteVideoFromDB() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const deleteRequest = store.delete(VIDEO_KEY);

      deleteRequest.onsuccess = () => resolve(true);
      deleteRequest.onerror = (event) => {
        reject(new Error(`Failed to delete video: ${event.target.error?.message || 'Delete error'}`));
      };
    });
  } catch (err) {
    console.warn('Could not delete video from IndexedDB:', err);
    return false;
  }
}

