import { useDocument } from "../hooks/useDocument"

import { useParams } from "react-router-dom"

import './StudentInformation.css'


const StudentInformation = () => {

  const student = useParams('id')

  const info = useDocument('locations/RyRc9TabpSMfQHINLsHg/students', student.id)

  return (
    <div className="studentinformationpage">
      <div className="sinfo_row">
        <div className="sinfo_row_label">Phone Number</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('phone') && info.document.phone}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">Email</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('email') && info.document.email}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">Address</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('address') && info.document.address}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">Address2</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('address2') && info.document.address2}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">Zipcode</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('zipcode') && info.document.zipcode}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">City</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('city') && info.document.city}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">State</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('state') && info.document.state}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">parent1firstname</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('parent1firstname') && info.document.parent1firstname}</div>
      </div>

      <div className="sinfo_row">
        <div className="sinfo_row_label">parent2firstname</div>
        <div className="sinfo_row_data">{info.document && info.document.hasOwnProperty('parent2firstname') && info.document.parent2firstname}</div>
      </div>
    </div>
  )
}

export default StudentInformation