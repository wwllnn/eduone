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
  {value: 'RyRc9TabpSMfQHINLsHg', label: 'Sugar Land, TX'},
  {value: 'w5y05cHtvewfkkneohRP', label: 'Frisco, TX'},
]


const DashBoard = () => {

  const [city, setCity] = useState('RyRc9TabpSMfQHINLsHg')
  const [currentStudent, setCurrentStudent] = useState('')

  const handleLocation = (location) => {
    setCity(location.value)
  }

  
  const students = useCollection(`locations/${city}/students`)

  useEffect(()=> {
    if(students.documents){
      const firstCap = students.documents[0].firstname.charAt(0).toUpperCase()+ students.documents[0].firstname.slice(1)
      const lastCap = students.documents[0].lastname.charAt(0).toUpperCase()+ students.documents[0].lastname.slice(1)
      setCurrentStudent(lastCap, firstCap)
      console.log(students.documents[0].id)
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