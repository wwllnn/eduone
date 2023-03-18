import './StudentPage.css'

import { useState } from 'react'

import TestAttempt from './TestAttempt'
import Select from 'react-select'

const StudentPage = () => {

  const testtypes = [{value:'sat2023', label:'SAT2023'},{value:'act2023', label:'ACT2023'}]

  const [answers, setAnswers] = useState('')



  return (
    <div className='studentpage'>
      <div className='studentpage_categories'>
        <div className='studentpage_category gradecenter'>
          Grade Center
        </div>
        <div className='studentpage_category testreports'>  
          Test Reports
        </div>
        <div className='studentpage_category studentinformation'>
          Student Information
        </div>
      </div>
      <div className='studentpage_name'>
        Lee Min-ho
      </div>
      <div className='student_type'>Current Student</div>
      <Select className='selecttest' placeholder={'Select Test'} options={testtypes}/>
      <TestAttempt />
    </div>
  )
}

export default StudentPage