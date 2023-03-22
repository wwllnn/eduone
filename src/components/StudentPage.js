import './StudentPage.css'

import { useState } from 'react'

import TestAttempt from './TestAttempt'
import Select from 'react-select'
import { useDocument } from "../hooks/useDocument"


import { useParams } from 'react-router-dom'

const StudentPage = ({ currentStudent }) => {


  let { id } = useParams()

  const [tab, setTab] = useState('gradecenter')

  const testtypes = [{value:'sat2023', label:'SAT2023'},{value:'act2023', label:'ACT2023'}]

  const [answers, setAnswers] = useState('')



  return (
    <div className='studentpage'>
      <div className='studentpage_categories'>
        <div onClick={() => setTab('gradecenter')} className='studentpage_category gradecenter'>
          Grade Center
        </div>
        <div onClick={() => setTab('testreports')} className='studentpage_category testreports'>  
          Test Reports
        </div>
        <div onClick={() => setTab('studentinfo')} className='studentpage_category studentinformation'>
          Student Information
        </div>
      </div>
      <div className='studentpage_name'>
        {currentStudent}
      </div>
      <div className='student_type'>Current Student</div>
      <Select className='selecttest' placeholder={'Select Test'} options={testtypes}/>
      <TestAttempt />
    </div>
  )
}

export default StudentPage