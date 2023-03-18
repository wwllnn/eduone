import React from 'react'
import { test1 } from '../data.js' 

const useGrade = () => {

  const gradeTest = (currentAnswers) => {
    let sum = 0
    let wrongNumbers = []


    Object.entries(currentAnswers).map(([key, value]) => {


      if(value == test1[key-1]){
        sum+=1
      } else{
        wrongNumbers.push(key)
      }
    })

    return wrongNumbers
  }

  return {gradeTest}
}

export default useGrade