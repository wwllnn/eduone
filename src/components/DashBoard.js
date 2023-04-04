import './DashBoard.css'
import logo from './logo.svg'

import { useEffect, useState } from 'react'

import Select from 'react-select'

import Sidebar from './Sidebar'
import StudentForm from './StudentForm'
import StudentPage from './StudentPage'
import Home from './Home'
import { useCollection } from '../hooks/useCollection'
import { Routes, Route } from 'react-router-dom'

const locations = [
  {value: 'RyRc9TabpSMfQHINLsHg', label: 'Sugar Land'},
  {value: 'w5y05cHtvewfkkneohRP', label: 'Frisco'},
  {value: 'sgsAqoT4pjLvuNSm4EAD', label: 'Memorial'},
  {value: 'Mf92shgIW8L9Kq7SImFC', label: 'Rockville'},
  {value: 'SOpNzc5r5Z0hwNXaqNtc', label: 'Herndon'}
]

const DashBoard = () => {

  const [currentCity, setCurrentCity] = useState('RyRc9TabpSMfQHINLsHg')
  const [currentStudent, setCurrentStudent] = useState('')

  const handleLocation = (location) => {
    setCurrentCity(location)
    console.log(currentCity)
  }

  const students = useCollection(`locations/${currentCity.value}/students`)

  //just get first student
  useEffect(()=> {
    if(students.documents){
      const firstCap = students.documents[0].firstname.charAt(0).toUpperCase() + students.documents[0].firstname.slice(1)
      const lastCap = students.documents[0].lastname.charAt(0).toUpperCase() + students.documents[0].lastname.slice(1)
      setCurrentStudent(lastCap, firstCap)
    }
  },[])
 
  return (
    <div className='dashboard'>
      <div className='dashboard_head'>
        <div className='dashboard_logo'>
          <img src={logo} />
        </div>
        <Select 
          defaultValue={locations[0]} 
          options={locations} 
          className='dashboard_location' 
          onChange={handleLocation}
        />
      </div>
      <div className='dashboard_body'>
      <Sidebar currentCity={currentCity} setCurrentStudent={setCurrentStudent}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newstudent' element={<StudentForm currentCity={currentCity} />} />
        <Route path='/student/:id'
          element={currentStudent && <StudentPage currentStudent={currentStudent} currentCity={currentCity}/>} 
        />
      </Routes>
      </div>
    </div>
  )
}

export default DashBoard