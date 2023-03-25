import React from 'react'

import { useState } from 'react'
import { test1, SAT2023PT3RWM1, SAT2023PT3RWM2a, SAT2023PT3MM1, SAT2023PT3RWM1BD, SAT2023PT3RWM2ABD} from '../data.js' 

const useGrade = () => {

  const [wrongCategories, setWrongCategories] = useState([])

  //check current answers and creates object with incorrect question numbers and answers
  const gradeSAT2023PT3 = (currentAnswers) => {
    const categories = []
    const difficulties = []
    
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

    //see which category each wrong answer matches to for module 1
    Object.keys(SAT2023PT3RWM1BD).map((q) => {
      if(wrongNumbers.hasOwnProperty(q)){
        categories.push(SAT2023PT3RWM1BD[q].skill)
      }

      if(wrongNumbers.hasOwnProperty(q)){
        difficulties.push(SAT2023PT3RWM1BD[q].difficulty)
      }
    })

    Object.keys(SAT2023PT3RWM2ABD).map((q) => {
      if(wrongNumbers.hasOwnProperty(q)){
        categories.push(SAT2023PT3RWM2ABD[q].skill)
      }

      if(wrongNumbers.hasOwnProperty(q)){
        difficulties.push(SAT2023PT3RWM2ABD[q].difficulty)
      }
    })



    console.log(difficulties)
    const skills = generateSAT2023PT3Skills(categories, difficulties)
    return {rightNumbers, wrongNumbers, skills}
  }

  const generateSAT2023PT3Skills = (categories, difficulties) => {
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

    let bronze = 0
    let silver = 0
    let gold = 0
    
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

    difficulties.map((difficulty) => {
      switch(difficulty){
        case 'Bronze':
          bronze+=1
          break;
        case 'Silver':
          silver+=1
          break;
        case 'Gold':
          gold+=1
          break;
      }
    })

    let skillImprovement = {
      skills:{},
      levels:{}
    }
  
    skillImprovement.skills['Words in Context'] = wordsincontext
    skillImprovement.skills['Text Structure and Purpose'] = textstructureandpurpose
    skillImprovement.skills['Central Ideas and Details'] = centralideasanddetails
    skillImprovement.skills['Central Ideas and Purpose'] = centralideasandpurpose
    skillImprovement.skills['Command of Text'] = commandoftext
    skillImprovement.skills['Inferences'] = inferences
    skillImprovement.skills['Boundaries'] = boundaries
    skillImprovement.skills['Form Structure'] = formstructure
    skillImprovement.skills['Transitions'] = transitions
    skillImprovement.skills['Rhetorical'] = rhetorical
    skillImprovement.skills['Command of Quant'] = commandofquant
    skillImprovement.skills['Cross Text'] = crosstext
    skillImprovement.levels['Bronze'] = bronze
    skillImprovement.levels['Silver'] = silver
    skillImprovement.levels['Gold'] = gold

  console.log(skillImprovement)
   return skillImprovement
  }

  return {gradeSAT2023PT3, generateSAT2023PT3Skills}
}

export default useGrade