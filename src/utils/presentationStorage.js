const DB_NAME = 'BeyondCodePortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'mediaStore';
const PRESENTATION_KEY = 'activity8_presentation';

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
 * Saves a presentation File or Blob to IndexedDB.
 * @param {Blob|File} file
 * @param {string} [fileName]
 * @returns {Promise<{ id: string, name: string, type: string, size: number }>}
 */
export async function savePresentationToDB(file, fileName) {
  if (!file) {
    throw new Error('No presentation file provided.');
  }

  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const record = {
        id: PRESENTATION_KEY,
        blob: file,
        name: fileName || file.name || 'presentation.pdf',
        type: file.type || 'application/pdf',
        size: file.size || 0,
        updatedAt: Date.now()
      };

      const putRequest = store.put(record);

      putRequest.onsuccess = () => {
        resolve({
          id: PRESENTATION_KEY,
          name: record.name,
          type: record.type,
          size: record.size
        });
      };

      putRequest.onerror = (event) => {
        reject(new Error(`Could not store presentation in IndexedDB: ${event.target.error?.message || 'Write error'}`));
      };

      transaction.onerror = (event) => {
        reject(new Error(`Transaction failed while storing presentation: ${event.target.error?.message || 'Transaction error'}`));
      };
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Retrieves the stored presentation record from IndexedDB.
 * @returns {Promise<{ blob: Blob, name: string, type: string, size: number } | null>}
 */
export async function getPresentationFromDB() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(PRESENTATION_KEY);

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
        reject(new Error(`Failed to retrieve presentation from IndexedDB: ${event.target.error?.message || 'Read error'}`));
      };
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Deletes the stored presentation from IndexedDB.
 * @returns {Promise<boolean>}
 */
export async function deletePresentationFromDB() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const deleteRequest = store.delete(PRESENTATION_KEY);

      deleteRequest.onsuccess = () => resolve(true);
      deleteRequest.onerror = (event) => {
        reject(new Error(`Failed to delete presentation: ${event.target.error?.message || 'Delete error'}`));
      };
    });
  } catch (err) {
    console.warn('Could not delete presentation from IndexedDB:', err);
    return false;
  }
}

