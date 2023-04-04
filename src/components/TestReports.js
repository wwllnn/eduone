import { useCollection} from "../hooks/useCollection"
import { useDocument } from "../hooks/useDocument"
//import { useParams } from "react-router-dom"
//import { Link } from "react-router-dom"
import './TestReports.css'
import TestPrint from "./TestPrint"

import { useParams } from "react-router-dom"
import { PDFDownloadLink } from "@react-pdf/renderer"

const TestReports = ({ currentStudent, currentCity }) => {

  let studentId = useParams('id')

  const tests = useCollection(`locations/${currentCity.value}/students/${studentId.id}/testreports`)

  const splitname = currentStudent.split(', ')
  console.log(splitname)

  const filename = splitname[0].toUpperCase() + '_' + splitname[1].toUpperCase() + '_' + 'SAT2023P3'

  return (
    <div className="testreports">
      {
        tests && tests.documents && tests.documents.length === 0 && 
        <div>No tests yet</div>
      }
      {
        tests && tests.documents && tests.documents.map((t, i) => {
           return <div key={i}>      
           <PDFDownloadLink className='link' document={<TestPrint info={t} currentStudent={currentStudent} currentCity={currentCity}/>} fileName={filename}>
           {({loading}) => (loading ? <button>Loading</button> : <button className="testreport_button">{t.name}</button>)}
           </PDFDownloadLink></div>
        })
      }
    </div>
  )
}

export default TestReports