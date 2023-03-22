import './DashBoard.css'

import { useState } from 'react'

import Select from 'react-select'

import Sidebar from './Sidebar'
import StudentForm from './StudentForm'
import StudentPage from './StudentPage'
import Home from './Home'

import { Routes, Route } from 'react-router-dom'

const locations = [
  {value: 'houston', label: 'Houston, TX'},
  {value: 'newyork', label: 'New York City, NY'},
  {value: 'sanfrancisco', label: 'San Francisco, CA'}
]



const DashBoard = () => {

  const [city, setCity] = useState('Sugar Land, TX')

  return (
    <div className='dashboard'>
      <div className='dashboard_head'>
        <div className='dashboard_logo'>
          <img src='/logo.svg'/>
        </div>
        <Select defaultValue={locations[0]} options={locations} className='dashboard_location' />
      </div>
      <div className='dashboard_body'>
      <Sidebar city={city}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newstudent' element={<StudentForm />} />
        <Route path='/student/:id' element={<StudentPage />} />
      </Routes>
      </div>
    </div>
  )
}

export default DashBoard