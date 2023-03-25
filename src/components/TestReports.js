import { useCollection } from "../hooks/useCollection"

import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"

import './TestReports.css'
import TestPrint from "./TestPrint"

const TestReports = ({ testObject }) => {

  const tests = useCollection('locations/RyRc9TabpSMfQHINLsHg/students/FzuvUVlLc1yt5UNkmDn8/testreports')

  console.log(tests.documents)

  return (
    <div>
      {
        tests.documents && tests.documents.map((t, i) => {
           return <div className='testreport_button' key={i}>{t.name}</div>
        })
      }
      <TestPrint />
    </div>
  )
}

export default TestReports