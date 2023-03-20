import { useState } from 'react'
import './TestAttempt.css'

import useGrade from '../hooks/useGrade'

const TestAttempt = () => {

  const { gradeTest } = useGrade()

  const [currentAnswers, setCurrentAnswers] = useState({})

  const [wrongAnswers, setWrongAnswers] = useState([])

  const [showGrade, setShowgrade] = useState(false)

  const handleClick = (index, choice) => {

    setCurrentAnswers(prevState => ({
      ...prevState,
      [index]: choice
    })
    )

  }

  for (let [key, value] of Object.entries(currentAnswers)) {
    console.log(key, value);
  }

  const output = () =>{
    for(let key in currentAnswers){
        return(
          <div>{key}</div>
            )
    }
  }

  const handleGrade = (currentAnswers) => {
    const grade = gradeTest(currentAnswers)
    setWrongAnswers(grade)
    setShowgrade(true)
  }


  return (
    <div className='testattempt'>
      <div className='attempt_input'>
      {[...Array(98)].map((r, i) => (
        <div className='attempt_row'>
          <div className='attempt_row_number'>{i+1}</div>
          <div className='attempt_row_button' onClick={() => handleClick(i+1, 'a')}>A</div>
          <div className='attempt_row_button' onClick={() => handleClick(i+1, 'b')}>B</div>
          <div className='attempt_row_button' onClick={() => handleClick(i+1, 'c')}>C</div>
          <div className='attempt_row_button' onClick={() => handleClick(i+1, 'd')}>D</div>
        </div>
      ))
      }
      </div>
      <div className='attempt_output'>{
        Object.entries(currentAnswers).map(([key, value]) => {
          if(wrongAnswers.includes(key)){
            return <div className='attempt_output_item wronganswer'>{key} - {value}</div>
          }
          return <div className='attempt_output_item'>{key} - {value}</div>
        })
        }</div>
      <div className='gradetestbutton' onClick={() => handleGrade(currentAnswers)}>Grade Test</div>
      {showGrade && <div className='score'>Score : {Object.keys(currentAnswers).length-wrongAnswers.length} / 20</div>}
    </div>
  )
}

export default TestAttempt