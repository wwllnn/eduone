import { useState } from 'react'
import './WrongsInput.css'

import { useFirestore } from '../hooks/useFirestore'
import { useParams } from 'react-router-dom'

import useCategorize from '../hooks/useCategorize'

const TestAttempt = ({ setTestObject }) => {

  const student = useParams('id')
  const { addDocument } = useFirestore(`locations/RyRc9TabpSMfQHINLsHg/students/${student.id}/testreports`)

  const { generatereportSAT2023PT3 } = useCategorize()


  const [readingScore, setReadingScore] = useState(0)
  const [mathScore, setMathScore] = useState(0)
  const [activeSection, setActiveSection] = useState('rw')
  const [readingQuestions, setReadingQuestions] = useState([...Array(54).fill(0)])
  const [mathQuestions, setMathQuestions] = useState([...Array(44).fill(0)])

  

  const handleInput = (tab, index) => {
    if(tab == 'rw'){
      const clone = [...readingQuestions]
      clone[index] = 'clicked'
      setReadingQuestions(clone)
    }

    if(tab == 'm'){
      const clone = [...mathQuestions]
      clone[index] = 'clicked'
      setMathQuestions(clone)
    }
  }

  const handleUninput = (tab, index) => {
    if(tab == 'rw'){
      const clone = [...readingQuestions]
      clone[index] = 0
      setReadingQuestions(clone)
    }

    if(tab == 'm'){
      const clone = [...mathQuestions]
      clone[index] = 0
      setMathQuestions(clone)
    }
  }

  const handleGenerate = () => {
      const answers = generatereportSAT2023PT3(readingQuestions, mathQuestions)

      //create object for database
      const TestName = 'SAT2023PT3'
      const currentDate = new Date()
      const formattedDate = currentDate.toDateString()
  
      const composite = Number(readingScore) + Number(mathScore)
  
      const testReport = {
        name: TestName,
        date: formattedDate,
        readingScore,
        mathScore,
        compositeScore: composite,
        categories: answers.skillsObject
      }
  
      console.log(testReport)
      addDocument(testReport)
  }

  return (
    <div className='wrongsinput'>

      <div>SAT 2023 PT3</div>
      <div className='flex'>
        <div>Reading and Writing Score</div>
        <input className='wrongsinput_scoreinput' onChange={(e) => setReadingScore(e.target.value)}></input>
      </div>
      <div className='flex'>
        <div>Math Score</div>
        <input className='wrongsinput_scoreinput' onChange={(e) => setMathScore(e.target.value)}></input>
      </div>

      <div className='test_tabs'>
        <div className={activeSection == 'rw' ? 'attempt_tab_rw attempt_tab_rw_active' : 'attempt_tab_rw'}
          onClick={() => setActiveSection('rw')}>Reading and Writing</div>
        <div className={activeSection == 'm' ? 'attempt_tab_math attempt_tab_math_active' : 'attempt_tab_math'}
          onClick={() => setActiveSection('m')}>Math</div>
      </div>

      <div className='wrongsinput_buttonscontainer'>
        {activeSection == 'rw' && readingQuestions.map((x, i) => (
          <div className='wrongsinput_row'>
            <span>{i+1}</span>
            {x == 0 && <button onClick={() => handleInput('rw', i)}></button>}
            {x != 0 && <button className='clicked' onClick={() => handleUninput('rw', i)}></button>}
          </div>
        ))
        }
        {activeSection == 'm' && mathQuestions.map((x, i) => (
          <div className='wrongsinput_row'>
            <span>{i+54}</span>
            {x == 0 && <button onClick={() => handleInput('m', i)}></button>}
            {x != 0 && <button className='clicked' onClick={() => handleUninput('m', i)}></button>}
          </div>
        ))
        }
      </div>
      
      <div className='attempt_footer'>
        <div className='attempt_output'>
          
        </div>
        <div className='wrongsinput_generate' onClick={handleGenerate}>
          Generate Diagnostic
        </div>
      </div>
    </div>
  )
}

export default TestAttempt