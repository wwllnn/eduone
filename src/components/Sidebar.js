import './Sidebar.css'

import { Link } from 'react-router-dom'
import { useCollection } from "../hooks/useCollection"
import { useEffect, useState } from 'react'


const Sidebar = () => {

  const [ studentNames, setStudentNames ] = useState([])

  const locations = useCollection('locations/RyRc9TabpSMfQHINLsHg/students')
  useEffect(() => {
    if(locations.documents){
      const arrayOfStudentNames = []
      const ls = locations.documents.map(l => {
        return l.firstname
      })
      setStudentNames(ls)
      console.log(studentNames)
    }
  }, [locations.documents])
  return (
    <div className='sidebar'>
      <div className='innersidebar'>
        <div className='addstudent'>
          <img src='plus.png' className='sidebar_icon'></img>
          <Link className='link' to='newstudent'><div className='sidebar_text'>Add Student</div></Link>
        </div>
        <div className='student_list'>
          <Link className='link' to='/student'><div className='student_list_name'>Min-ho, Lee</div></Link>
          <div className='student_list_name'>Min-ho, Lee</div>
          <div className='student_list_name'>Min-ho, Lee</div>
          <div className='student_list_name'>Min-ho, Lee</div>
          <div className='student_list_name'>Min-ho, Lee</div>


          <div className='student_list_name'>Evans, Chris</div>
          <div className='student_list_name'>Evans, Chris</div>
          <div className='student_list_name'>Evans, Chris</div>
          <div className='student_list_name'>Evans, Chris</div>

          <div className='student_list_name'>Jung-kook, Jeon</div>
          <div className='student_list_name'>Jung-kook, Jeon</div>
          <div className='student_list_name'>Jung-kook, Jeon</div>
          <div className='student_list_name'>Jung-kook, Jeon</div>

          <div className='student_list_name'>Gomez, Selena</div>
          <div className='student_list_name'>Gomez, Selena</div>
          <div className='student_list_name'>Gomez, Selena</div>
          <div className='student_list_name'>Gomez, Selena</div>


          <div className='student_list_name'>Yeoh, Michelle</div>
          <div className='student_list_name'>Yeoh, Michelle</div>
          <div className='student_list_name'>Yeoh, Michelle</div>
          <div className='student_list_name'>YeohYeohYeoh, MichelleMichelleMichelle</div>
          <div className='student_list_name'>Yeoh, Michelle</div>

          

        </div>  

      </div>
    </div>
  )
}

export default Sidebar