import React from 'react'
import { test1, SAT2023PT3RWM1, SAT2023PT3RWM2a, SAT2023PT3MM1, SAT2023PT3RWM1ABD} from '../data.js' 

const useGrade = () => {

  const [wrongQuestions = setWrongQuestions] = useState([])

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

  const generateWrongQuestionsFromNumbers = (wrongNumbers) => {
    let questions = []
    wrongNumbers.map((n) => {
      questions.push(SAT2023PT3RWM1ABD[n])
    })

    setWrongQuestions(questions)
  }

  const generateSAT2023PT3Skills = (wrongQuestions) => {
    let wordsincontext = 0
    let textstructureandpurpose = 0
    let centralideas = 0
    let commandoftext = 0
    let inferences = 0
    let boundaries = 0
    let formstructure = 0
    let transitions = 0
    let rhetorical = 0
    let commandofquant = 0
    let crosstext = 0

    wrongQuestions.map((q) => {
      switch(q.skill){
        case 'Words in Context':
          wordsincontext+=1
        case 'Text Structure and Purpose':
          textstructureandpurpose+=1
        case 'Central Ideas and Details':
          centralideas+=1
        case 'Cross-Text Connections':
          crosstext+=1
        case 'Command of Textual Evidence':
          commandoftext+=1
        case 'Inferences':
          inferences+=1
        case 'Boundaries':
          boundaries+=1
        case 'Form Structure and Sense':
          formstructure+=1
        case 'Transitions':
          transitions+=1
        case 'Rhetorical Synthesis':
          rhetorical+=1
        case 'Command of Quantiative Evidence':
          commandofquant+=1
      }

    })
  }

  return {gradeSAT2023PT3, generateSAT2023PT3Skills}
}

export default useGrade