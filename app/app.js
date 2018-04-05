// import 'babel-polyfill'
import '@babel/polyfill'

import 'indexeddbshim'
window.shimIndexedDB.__useShim()
import Dexie from 'dexie'

(function() {
  const shimIndexedDB = window.shimIndexedDB
  const shimIDBKeyRange = window.IDBKeyRange

  const db = new Dexie('testDBshim', {
    autoOpen: false,
    indexedDB: shimIndexedDB,
    IDBKeyRange: shimIDBKeyRange,
  })
  db.version(1).stores({
    logs: '++id',
  })
  console.log('Will open DB')
  // alert('Will open DB')
  db.open().then(() => {
    console.log('Did open DB')
    // alert('Did open DB')

    const testLog = {
      message: 'first log'
    }
    return db['logs'].add(testLog)
  }).then(() => {
    alert('Did add first log')
  }).catch((err) => {
    alert('Caught an error:' + err)
  })
})();
