//imports
import { onSnapshot, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

//useDocument will take in a collection and the id of the document that is to be received
//export hook
export const useDocument = (collection, id) => {
  //state to hold document and error
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)


  //runs when the collection or id changes
  useEffect(() => {

    //onSnapshot returns an unsub function
    //gets doc data at current time
    const unsub = onSnapshot(doc(db, collection, id), (doc) => {

      if(doc.data()) {
        setDocument({ ...doc.data(), id: doc.id})
        setError(null)
      } else {
        setError('doc does not exist')
      } 
    }, (err) => {
      console.log(err.message)
      setError('failed to get doc')
    })

    return () => unsub()
  }, [collection, id])

  return {document, error}
}