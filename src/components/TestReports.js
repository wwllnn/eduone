import { useCollection } from "../hooks/useCollection"
//import { useParams } from "react-router-dom"
//import { Link } from "react-router-dom"
import './TestReports.css'
import TestPrint from "./TestPrint"

import { useParams } from "react-router-dom"
import { PDFDownloadLink } from "@react-pdf/renderer"

const TestReports = ({ currentStudent }) => {

  let studentId = useParams('id')

  const tests = useCollection(`locations/RyRc9TabpSMfQHINLsHg/students/${studentId.id}/testreports`)

  return (
    <div className="testreports">
      {
        tests && tests.documents && tests.documents.length == 0 && 
        <div>No tests yet</div>
      }
      {
        tests && tests.documents && tests.documents.map((t, i) => {
           return <div key={i}>      
           <PDFDownloadLink className='link' document={<TestPrint info={t} currentStudent={currentStudent} />} fileName="FORM">
           {({loading}) => (loading ? <button>Loading</button> : <button className="testreport_button">{t.name}</button>)}
           </PDFDownloadLink></div>
        })
      }
    </div>
  )
}

export default TestReports