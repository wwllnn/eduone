//imports
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot} from 'firebase/firestore'

//export hook
//useCollection will get and return multiple documents saved in an array
export function useCollection(c) {
  //holding state of received documents/error
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //runs whens collection parameter changes 
  useEffect(() => {
    //reference in the db with collection name
    let ref = collection(db, c)

    //onSnapshot returns an unsub function
    //onSnapshot gets current data
    const unsub = onSnapshot(ref, snapshot => {
      //push documents received into an array
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      console.log('could not fetch')
    })

    return () => unsub()
  }, [c])

  //return received documents array or error
  return { documents, error }
}