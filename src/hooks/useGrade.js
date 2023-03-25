import React from 'react'

import { useState } from 'react'
import { test1, SAT2023PT3RWM1, SAT2023PT3RWM2a, SAT2023PT3MM1, SAT2023PT3RWM1BD, SAT2023PT3RWM2ABD} from '../data.js' 

const useGrade = () => {

  const [wrongCategories, setWrongCategories] = useState([])

  //check current answers and creates object with incorrect question numbers and answers
  const gradeSAT2023PT3 = (currentAnswers) => {
    const categories = []
    
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

    //see which category each wrong answer matches to
    Object.keys(SAT2023PT3RWM1BD).map((q) => {
      if(wrongNumbers.hasOwnProperty(q)){
        categories.push(SAT2023PT3RWM1BD[q].skill)
      }
    })


    console.log(categories)
    const skills = generateSAT2023PT3Skills(categories)
    return {rightNumbers, wrongNumbers, skills}
  }

  const generateSAT2023PT3Skills = (categories) => {
    let wordsincontext = 0
    let textstructureandpurpose = 0
    let centralideasanddetails = 0
    let centralideasandpurpose = 0
    let commandoftext = 0
    let inferences = 0
    let boundaries = 0
    let formstructure = 0
    let transitions = 0
    let rhetorical = 0
    let commandofquant = 0
    let crosstext = 0
    
    categories.map((category) => {
      switch(category){
        case 'Words in Context':
          wordsincontext+=1
          break;
        case 'Text Structure and Purpose':
          textstructureandpurpose+=1
          break;
        case 'Central Ideas and Details':
          centralideasanddetails+=1
          break;
        case 'Central Ideas and Purpose':
          centralideasandpurpose+=1
        break;
        case 'Cross-Text Connections':
          crosstext+=1
          break;
        case 'Command of Textual Evidence':
          commandoftext+=1
          break;
        case 'Inferences':
          inferences+=1
          break;
        case 'Boundaries':
          boundaries+=1
          break;
        case 'Form Structure and Sense':
          formstructure+=1
          break;
        case 'Transitions':
          transitions+=1
          break;
        case 'Rhetorical Synthesis':
          rhetorical+=1
          break;
        case 'Command of Quantiative Evidence':
          commandofquant+=1
          break;
      }

    })

  let skillImprovement = {}
  
  skillImprovement['words in context'] = wordsincontext
  skillImprovement['textstructureandpurpose'] = textstructureandpurpose
  skillImprovement['centralideasanddetails'] = centralideasanddetails
  skillImprovement['centralideasandpurpose'] = centralideasandpurpose
  skillImprovement['commandoftext'] = commandoftext
  skillImprovement['inferences'] = inferences
  skillImprovement['boundaries'] = boundaries
  skillImprovement['formstructure'] = formstructure
  skillImprovement['transitions'] = transitions
  skillImprovement['rhetorical'] = rhetorical
  skillImprovement['commandofquant'] = commandofquant
  skillImprovement['crosstext'] = crosstext

  console.log(skillImprovement)
  return skillImprovement
  }

  return {gradeSAT2023PT3, generateSAT2023PT3Skills}
}

export default useGrade