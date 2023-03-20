import React from 'react'
import { test1, SAT2023PT3RWM1, SAT2023PT3RWM2a, SAT2023PT3MM1 } from '../data.js' 

const useGrade = () => {

  const gradeSAT2023PT3 = (currentAnswers) => {
    let wrongNumbers = {}
    let rightNumbers = {}

    //looping through current answers
    Object.entries(currentAnswers).map(([key, value]) => {

      //add object pair into rightNumbers if correct, wrongNumbers if incorrect
      if(value == SAT2023PT3RWM1[key]){
        rightNumbers[key] = value
      } else {
        wrongNumbers[key] = value
      }
    })

    return {rightNumbers, wrongNumbers}
  }

  return {gradeSAT2023PT3}
}

export default useGrade