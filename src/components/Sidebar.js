import './Sidebar.css'

import { Link } from 'react-router-dom'
import { useCollection } from "../hooks/useCollection"
import { useEffect, useState } from 'react'


const Sidebar = ({city, setCurrentStudent}) => {

  const [ studentNames, setStudentNames ] = useState([])
 
  const locations = useCollection(`locations/${city}/students`)
  useEffect(() => {
    if(locations.documents){
      const ls = locations.documents.map(l => {
        const firstCap = l.firstname.charAt(0).toUpperCase()+ l.firstname.slice(1)
        const lastCap = l.lastname.charAt(0).toUpperCase()+ l.lastname.slice(1)
        return (
          {name: lastCap + ', ' + firstCap,
          id: l.id
          })
      })

      setStudentNames(ls)
    }
  }, [locations.documents])

  return (
    <div className='sidebar'>
      <div className='innersidebar'>
        <div className='addstudent'>
          <img src='/plus.png' className='sidebar_icon'></img>
          <Link className='link' to='newstudent'><div className='sidebar_text'>Add Student</div></Link>
        </div>
        <div className='student_list'>
          <div className='student_list_name'>Min-ho, Lee</div>
          {
            studentNames && studentNames.map((n, i) => {
              return <Link key={i} className='link' to={'/student/' + n.id}>
                <div onClick={() => setCurrentStudent(n.name)} className='student_list_name'>{n.name}</div></Link>
            })
          }
        </div>  
      </div>
    </div>
  )
}

export default Sidebar