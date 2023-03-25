import './DashBoard.css'

import { useEffect, useState } from 'react'

import Select from 'react-select'

import Sidebar from './Sidebar'
import StudentForm from './StudentForm'
import StudentPage from './StudentPage'
import Home from './Home'

import { Routes, Route } from 'react-router-dom'

const locations = [
  {value: 'RyRc9TabpSMfQHINLsHg', label: 'Sugar Land, TX'},
  {value: 'w5y05cHtvewfkkneohRP', label: 'Frisco, TX'},
]


const DashBoard = () => {

  const [city, setCity] = useState('RyRc9TabpSMfQHINLsHg')
  const [currentStudent, setCurrentStudent] = useState('')

  const handleLocation = (location) => {
    setCity(location.value)
  }

 
  return (
    <div className='dashboard'>
      <div className='dashboard_head'>
        <div className='dashboard_logo'>
          <img src='/logo.svg'/>
        </div>
        <Select 
          defaultValue={locations[0]} 
          options={locations} 
          className='dashboard_location' 
          onChange={handleLocation}
        />
      </div>
      <div className='dashboard_body'>
      <Sidebar city={city} setCurrentStudent={setCurrentStudent}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newstudent' element={<StudentForm />} />
        <Route path='/student/:id' 
          element={currentStudent && <StudentPage currentStudent={currentStudent}/>} 
        />
      </Routes>
      </div>
    </div>
  )
}

export default DashBoard