const DB_NAME = 'BeyondCodePortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'mediaStore';
const AUDIO_KEY = 'activity7_audio';

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
 * Saves an audio File or Blob to IndexedDB.
 * @param {Blob|File} file
 * @param {string} [fileName]
 * @returns {Promise<{ id: string, name: string, type: string }>}
 */
export async function saveAudioToDB(file, fileName) {
  if (!file) {
    throw new Error('No audio file provided.');
  }

  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const record = {
        id: AUDIO_KEY,
        blob: file,
        name: fileName || file.name || 'presentation_audio.mp3',
        type: file.type || 'audio/mpeg',
        updatedAt: Date.now()
      };

      const putRequest = store.put(record);

      putRequest.onsuccess = () => {
        resolve({ id: AUDIO_KEY, name: record.name, type: record.type });
      };

      putRequest.onerror = (event) => {
        reject(new Error(`Could not store audio in IndexedDB: ${event.target.error?.message || 'Write error'}`));
      };

      transaction.onerror = (event) => {
        reject(new Error(`Transaction failed while storing audio: ${event.target.error?.message || 'Transaction error'}`));
      };
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Retrieves the stored audio record from IndexedDB.
 * @returns {Promise<{ blob: Blob, name: string, type: string } | null>}
 */
export async function getAudioFromDB() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const getRequest = store.get(AUDIO_KEY);

      getRequest.onsuccess = (event) => {
        const record = event.target.result;
        if (!record || !record.blob) {
          resolve(null);
        } else {
          resolve({
            blob: record.blob,
            name: record.name,
            type: record.type
          });
        }
      };

      getRequest.onerror = (event) => {
        reject(new Error(`Failed to retrieve audio from IndexedDB: ${event.target.error?.message || 'Read error'}`));
      };
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Deletes the stored audio from IndexedDB.
 * @returns {Promise<boolean>}
 */
export async function deleteAudioFromDB() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const deleteRequest = store.delete(AUDIO_KEY);

      deleteRequest.onsuccess = () => resolve(true);
      deleteRequest.onerror = (event) => {
        reject(new Error(`Failed to delete audio: ${event.target.error?.message || 'Delete error'}`));
      };
    });
  } catch (err) {
    console.warn('Could not delete audio from IndexedDB:', err);
    return false;
  }
}

