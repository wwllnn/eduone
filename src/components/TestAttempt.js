import { useState } from 'react'
import './TestAttempt.css'

import useGrade from '../hooks/useGrade'
import Report from './Report'

const TestAttempt = () => {

  const { gradeSAT2023PT3 } = useGrade()

  const [activeSection, setActiveSection] = useState('rw')
  const [currentAnswers, setCurrentAnswers] = useState({})
  const [wrongAnswers, setWrongAnswers] = useState({})
  const [rightAnswers, setRightAnswers] = useState({})
  const [showGrade, setShowgrade] = useState(false)
  const [showReport, setShowReport] = useState(false)

  const handleClick = (index, choice) => {

    setCurrentAnswers(prevState => ({
        ...prevState,
        [index]: choice
      })
      )
    }

    const handleSAT2023PT3 = (currentAnswers) => {
     const answers = gradeSAT2023PT3(currentAnswers)

    
     setRightAnswers(answers.rightNumbers)
     setWrongAnswers(answers.wrongNumbers)
     setShowgrade(true)
    }

  const generateReport = () => {
    setShowReport(true)
    console.log(wrongAnswers)
    const attempt = {
      testname: 'SAT2023PT3',
      rightAnswers,
      wrongAnswers,
    }
    console.log(attempt)
  }

  return (
    <div className='testattempt'>
      <div className='attempt_tabs'>
        <div className={activeSection == 'rw' ? 'attempt_tab_rw attempt_tab_rw_active' : 'attempt_tab_rw'}
        onClick={() => setActiveSection('rw')}>Reading and Writing</div>
        <div className={activeSection == 'm' ? 'attempt_tab_math attempt_tab_math_active' : 'attempt_tab_math'}
          onClick={() => setActiveSection('m')}>Math</div>
      </div>
      <div className='attempt_input'>
      {activeSection == 'rw' && [...Array(54)].map((_, i) => (
        <div key={i} className='attempt_row'>
          <div className='attempt_row_number'>{i+1}</div>
          {
            currentAnswers[i+1] !== 'a' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] === 'a' && wrongAnswers[i+1] != 'a' && rightAnswers !='a' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] == 'a' && rightAnswers[i+1] == 'a' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] == 'a' && wrongAnswers[i+1] == 'a' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] !== 'b' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] === 'b' && wrongAnswers[i+1] != 'b' && rightAnswers[i+1] !='b' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] == 'b' && rightAnswers[i+1] == 'b' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] == 'b' && wrongAnswers[i+1] == 'b' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] !== 'c' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'c')}>C</div>
          }
          {
            currentAnswers[i+1] === 'c' && wrongAnswers[i+1] != 'c' && rightAnswers[i+1] !='c' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'c')}>C</div>
          }
          {
            currentAnswers[i+1] === 'c' && rightAnswers[i+1] == 'c' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'c')}>C</div>
          }
          {
            currentAnswers[i+1] == 'c' && wrongAnswers[i+1] == 'c' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'c')}>B</div>
          }
          {
            currentAnswers[i+1] !== 'd' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
          {
            currentAnswers[i+1] === 'd' && wrongAnswers[i+1] != 'd' && rightAnswers[i+1] !='d' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
          {
            currentAnswers[i+1] == 'd' && rightAnswers[i+1] == 'd' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
          {
            currentAnswers[i+1] == 'd' && wrongAnswers[i+1] == 'd' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
        </div>))}
        {activeSection == 'm' && [...Array(44)].map((_, i) => (
        <div key={i} className='attempt_row'>
          <div className='attempt_row_number'>{i+1}</div>
          {
            currentAnswers[i+1] !== 'a' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] === 'a' && wrongAnswers[i+1] != 'a' && rightAnswers !='a' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] == 'a' && rightAnswers[i+1] == 'a' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] == 'a' && wrongAnswers[i+1] == 'a' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'a')}>A</div>
          }
          {
            currentAnswers[i+1] !== 'b' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] === 'b' && wrongAnswers[i+1] != 'b' && rightAnswers[i+1] !='b' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] == 'b' && rightAnswers[i+1] == 'b' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] == 'b' && wrongAnswers[i+1] == 'b' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'b')}>B</div>
          }
          {
            currentAnswers[i+1] !== 'c' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'c')}>C</div>
          }
          {
            currentAnswers[i+1] === 'c' && wrongAnswers[i+1] != 'c' && rightAnswers[i+1] !='c' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'c')}>C</div>
          }
          {
            currentAnswers[i+1] === 'c' && rightAnswers[i+1] == 'c' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'c')}>C</div>
          }
          {
            currentAnswers[i+1] == 'c' && wrongAnswers[i+1] == 'c' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'c')}>B</div>
          }
          {
            currentAnswers[i+1] !== 'd' && 
            <div className='attempt_row_button' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
          {
            currentAnswers[i+1] === 'd' && wrongAnswers[i+1] != 'd' && rightAnswers[i+1] !='d' &&
            <div className='attempt_row_button attempt_clicked' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
          {
            currentAnswers[i+1] == 'd' && rightAnswers[i+1] == 'd' &&
            <div className='attempt_row_button attempt_right' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
          {
            currentAnswers[i+1] == 'd' && wrongAnswers[i+1] == 'd' &&
            <div className='attempt_row_button attempt_wrong' onClick={() => handleClick(i+1, 'd')}>D</div>
          }
        </div>))}
      </div>
      <div className='attempt_footer'>
      <div className='attempt_output'>{
        Object.entries(currentAnswers).map(([key, value]) => {
          if(wrongAnswers.hasOwnProperty(key)){
            return <div key={key} className='attempt_output_item wronganswer'>{key} - {value}</div>
          }
          return <div key={key} className='attempt_output_item'>{key} - {value}</div>
        })
        }</div>
        <div className='attempt_footer_right'>
          <div className='gradetestbutton' onClick={() => handleSAT2023PT3(currentAnswers)}>Grade Test</div>
          <div className='generatebutton' onClick={() => generateReport(currentAnswers)}>Generate Report</div>
          {showGrade && <div className='score'>Score : {Object.keys(currentAnswers).length-Object.keys(wrongAnswers).length} / 98</div>}
            {showReport &&  
              <div className='modal'>
                <Report wrongAnswers={wrongAnswers} />
              </div>
            }
        </div>
      </div>
    </div>
  )
}

export default TestAttempt