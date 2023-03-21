import { addDoc, collection, deleteDoc, doc, Timestamp, updateDoc } from 'firebase/firestore'
import { useReducer, useEffect, useState } from 'react'
import { db } from '../firebase/config'

let initialState = {
  document: null,
  isPending: false,
  error: null, 
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type){
    case 'IS_PENDING':
      return { isPending: true, document: false, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    default: 
      return state
  }
}

export const useFirestore = (col) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING'})

    try{
      const createdAt = Timestamp.fromDate(new Date())
      const addedDocument = await addDoc(collection(db, col), { ...doc, createdAt })

      if(!isCancelled){
        dispatch({ type: 'ADDED_DOCUMENT', payload: addedDocument })
      }
    }
    catch (error) {
      if(!isCancelled){
        dispatch({ type: 'ERROR', payload: error.message})
      }
      console.log(error)
    }
  }

  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' })

    try{
      await deleteDoc(doc(db, col, id))
      if(!isCancelled){
        dispatch({ type: 'DELETED_DOCUMENT'})
      }
    }
    catch(err){
      if(!isCancelled){
        dispatch({ type: 'ERROR', payload: 'could not delete' })
      }
    }
  } 

  const updateDocument = async (id, updates) => {
    dispatch({type: 'IS_PENDING'})

    try{
      const updatedDoc = await updateDoc(doc(db, col, id), updates)
      if(!isCancelled){
        dispatch({ type: 'UPDATED_DOCUMENT', payload: updatedDoc})
      }
      return updatedDoc
    }
    catch(err){
      if(!isCancelled){
        dispatch({ type: 'ERROR', payload: err.message })
      }
      return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, state }
}