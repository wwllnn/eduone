import './StudentPage.css'

import { useState } from 'react'

import TestAttempt from './TestAttempt'
import Select from 'react-select'
import { useDocument } from "../hooks/useDocument"


import { useParams } from 'react-router-dom'
import StudentInformation from './StudentInformation'
import TestReports from './TestReports'

const StudentPage = ({ currentStudent }) => {

  let { id } = useParams()

  const [tab, setTab] = useState('gradecenter')
  const [testObject, setTestObject] = useState({})


  const testtypes = [{value:'sat2023', label:'SAT2023'},{value:'act2023', label:'ACT2023'}]

  const [answers, setAnswers] = useState('')



  return (
    <div className='studentpage'>
      <div className='studentpage_categories'>
        <div onClick={() => setTab('gradecenter')} className='studentpage_category category_gradecenter'>
          Grade Center
        </div>
        <div onClick={() => setTab('testreports')} className='studentpage_category category_testreports'>  
          Test Reports
        </div>
        <div onClick={() => setTab('studentinfo')} className='studentpage_category category_studentinformation'>
          Student Information
        </div>
      </div>
      <div className='studentpage_name'>
        {currentStudent}
      </div>
      <div className='student_type'>Current Student</div>
      {tab == 'gradecenter' && <TestAttempt setTestObject={setTestObject}/>}
      {tab == 'testreports' && <TestReports testObject={testObject} />}
      {tab == 'studentinfo' && <StudentInformation />}
    </div>
  )
}

export default StudentPage