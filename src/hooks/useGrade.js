import React from 'react'

import { useState } from 'react'
import { 
  SAT2023PT3RWM1, 
  SAT2023PT3RWM2a,
  SAT2023PT3RWM2b,
  SAT2023PT3RWM1BD, 
  SAT2023PT3RWM2ABD,
  SAT2023PT3MM1,
  SAT2023PT3MM2A,
  SAT2023PT3MM2B,
  SAT2023PT3MM1BD,
  SAT2023PT3MM2ABD,
  SAT2023PT3MM2BBD,


} from '../data.js' 

const useGrade = () => {

  //check current answers and creates object with incorrect question numbers and answers
  const gradeSAT2023PT3 = (currentAnswers) => {
    const categories = []
    const difficulties = []

    const categoriesRWM1 = []
    const categoriesRWM2A = []
    const categoriesRWM2B = []

    const categoriesMM1 = []
    const categoriesMM2A = []
    const categoriesMM2B = []
    
    let wrongNumbers = {}
    let wrongNumbersRWM1 = {}
    let wrongNumbersRWM2 = {}

    let wrongNumbersMM1 = {}
    let wrongNumbersMM2 = {}

    let rightNumbers = {}

    //grade the first module of reading
    Object.entries(currentAnswers).map(([key, value]) => {
      //add object pair into rightNumbers if correct, wrongNumbers if incorrect
      if(value == SAT2023PT3RWM1[key]){
        rightNumbers[key] = value
      } else {
        wrongNumbers[key] = value
        wrongNumbersRWM1[key] = value
      }
    })

    //grade the next module of reading easy
    if(Object.keys(wrongNumbersRWM1).length() >= 10){
      Object.entries(currentAnswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3RWM2a[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbers[key] = value
        }
      }) //or hard
    } else if(Object.keys(wrongNumbersRWM1).length() <= 10) {
      Object.entries(currentAnswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3RWM2b[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbers[key] = value
        }
      })
    }

    //see which category each wrong answer matches to for module 1 rw
    Object.keys(SAT2023PT3RWM1BD).map((q) => {
      if(wrongNumbersRWM1.hasOwnProperty(q)){
        categories.push(SAT2023PT3RWM1BD[q].skill)
        categoriesRWM1.push(SAT2023PT3RWM1BD[q].skill)
      }

      if(wrongNumbers.hasOwnProperty(q)){
        difficulties.push(SAT2023PT3RWM1BD[q].difficulty)
      }
    })

    //categorize module 2a for reading
    if(Object.keys(wrongNumbersRWM1).length() >= 10){
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3RWM2ABD[q].skill)
          categoriesRWM2A.push(SAT2023PT3RWM1BD[q].skill)
        }

        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3RWM2ABD[q].difficulty)
        }
      })
    }

    //categorize module 2b for reading
    if(Object.keys(wrongNumbersRWM1).length() <= 10){
      //loop through answer key
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3RWM2ABD[q].skill)
          categoriesRWM2B.push(SAT2023PT3RWM1BD[q].skill)
        }

        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3RWM2ABD[q].difficulty)
        }
      })
    }

    //grade the first module of math
    Object.entries(currentAnswers).map(([key, value]) => {
      if(value == SAT2023PT3MM1[key]){
        rightNumbers[key] = value
      } else {
        wrongNumbers[key] = value
        wrongNumbersMM1[key] = value
      }
    })

    //grade the next module of math easy
    if(Object.keys(wrongNumbersMM1).length() >= 10){
      //loop through currentanswers
      Object.entries(currentAnswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3MM2A[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbersMM2[key] = value
        }
      }) //or hard
    } else if(Object.keys(wrongNumbersMM1).length() <= 10) {
      Object.entries(currentAnswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3MM2B[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbersMM2[key] = value
        }
      })
    }

    //see which category each wrong answer matches to for module 1 math
    Object.keys(SAT2023PT3MM1BD).map((q) => {
      if(wrongNumbersMM1.hasOwnProperty(q)){
        categories.push(SAT2023PT3MM1BD[q].skill)
        categoriesMM1.push(SAT2023PT3MM1BD[q].skill)
      }

      if(wrongNumbersMM1.hasOwnProperty(q)){
        difficulties.push(SAT2023PT3MM1BD[q].difficulty)
      }
    })

    //categorize module 2a for math
    if(Object.keys(wrongNumbersMM1).length() >= 10){
      Object.keys(SAT2023PT3MM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3MM2ABD[q].skill)
          categoriesRWM2A.push(SAT2023PT3MM2ABD[q].skill)
        }
        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3MM2ABD[q].difficulty)
        }
      })
    }

    //categorize module 2b for math
    if(Object.keys(wrongNumbersRWM1).length() >= 10){
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3RWM2ABD[q].skill)
          categoriesRWM2A.push(SAT2023PT3RWM1BD[q].skill)
        }

        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3RWM2ABD[q].difficulty)
        }
      })
    }

    const skills = generateSAT2023PT3Skills(
      categories, 
      difficulties
    )

    const skillsRWM1 = generateSAT2023PT3Skills(
      categories, 
      difficulties
    )

    const skillsRWM2A = generateSAT2023PT3Skills(
      categories,
      difficulties
    )

    const skillsRWM2B = generateSAT2023PT3Skills(
      categories,
      difficulties
    )
    

    return {
      rightNumbers, 
      wrongNumbers, 
      skills,
      skillsRWM1,
      skillsRWM2A,
      skillsRWM2B
    }
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

    return skillImprovement
  }

  return {gradeSAT2023PT3, generateSAT2023PT3Skills}
}

export default useGrade