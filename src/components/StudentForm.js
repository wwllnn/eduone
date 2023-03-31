import './StudentForm.css'
import Select from 'react-select'
import { useFirestore } from '../hooks/useFirestore'

import { useState } from 'react'

import { useParams } from 'react-router-dom'

const StudentForm = () => {


  //form info states
  const [firstname, setFirstname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const[parent1firstname, setParent1firstname] = useState('')
  const[parent1middlename, setParent1middlename] = useState('')
  const[parent1lastname, setParent1lastname] = useState('')

  const[parent2firstname, setParent2firstname] = useState('')
  const[parent2middlename, setParent2middlename] = useState('')
  const[parent2lastname, setParent2lastname] = useState('')

  const handleState = (e) => {
    setState(e.label)
  }

  const USAstates = [
    {value: 'al', label: 'AL'},
    {value: 'ak', label: 'AK'},
    {value: 'az', label: 'AZ'},
    {value: 'ar', label: 'AR'},
    {value: 'ca', label: 'CA'},
    {value: 'co', label: 'CO'},
    {value: 'ct', label: 'CT'},
    {value: 'de', label: 'DE'},
    {value: 'fl', label: 'FL'},
    {value: 'ga', label: 'GA'},
    {value: 'hi', label: 'HI'},
    {value: 'id', label: 'ID'},
    {value: 'il', label: 'IL'},
    {value: 'in', label: 'IN'},
    {value: 'ia', lbael: 'IA'},
    {value: 'ks', label: 'KS'},
    {value: 'ky', label: 'KY'},
    {value: 'la', label: 'LA'},
    {value: 'me', label: 'ME'},
    {value: 'md', label: 'MD'},
    {value: 'ma', label: 'MA'},
    {value: 'mi', label: 'MI'},
    {value: 'mn', label: 'MN'},
    {value: 'ms', label: 'MS'},
    {value: 'mo', label: 'MO'},
    {value: 'mt', label: 'MT'},
    {value: 'ne', label: 'NE'},
    {value: 'nv', label: 'NV'},
    {value: 'nh', label: 'NH'},
    {value: 'nj', label: 'NJ'},
    {value: 'nm', label: 'NM'},
    {value: 'ny', label: 'NY'},
    {value: 'nc', label: 'NC'},
    {value: 'nd', label: 'ND'},
    {value: 'oh', label: 'OH'},
    {value: 'ok', label: 'OK'},
    {value: 'or', label: 'OK'},
    {value: 'pa', label: 'PA'},
    {value: 'ri', label: 'RI'},
    {value: 'sc', label: 'SC'},
    {value: 'sd', label: 'SD'},
    {value: 'tn', label: 'TN'},
    {value: 'tx', label: 'TX'},
    {value: 'ut', label: 'UT'},
    {value: 'vt', label: 'VT'},
    {value: 'va', label: 'VA'},
    {value: 'wa', label: 'WA'},
    {value: 'wv', label: 'WV'},
    {value: 'wi', label: 'WI'},
    {value: 'wy', label: 'WY'}
  ]

  const [formError, setFormError] = useState('')

  const currentlocation = 'RyRc9TabpSMfQHINLsHg'

  const { addDocument } = useFirestore('locations/RyRc9TabpSMfQHINLsHg/students')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if(!firstname || !lastname){
      setFormError('Please enter a full name')
      return
    }

    let currentDate = new Date
    let formattedDate = currentDate.toDateString()

    const studentObject = {
      firstname,
      middlename,
      lastname,
      email,
      phone,
      address,
      address2,
      zipcode,
      city,
      state,
      parent1firstname,
      parent1middlename,
      parent1lastname,
      parent2firstname,
      parent2middlename,
      parent2lastname,
      dateAdded: formattedDate,
      testScores: []
    }

    console.log(studentObject)

    await addDocument(studentObject)
    
  }



  return (
    <div className='student_form'>
      <div className='student_form_left'>
      <h1 className='form_header'>Add New Student</h1>
      <div className='form_type'>Student</div>
      <div className='form_row1'>
        <div className='form_firstname'>
            <div>First name</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_firstname'
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            />
        </div>
        <div className='form_middlename'>
            <div>MI</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_middlename'
            onChange={(e) => setMiddlename(e.target.value)}
            value={middlename}
            />
          </div>
          <div className='form_lastname'>
            <div>Last name</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_lastname'
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            />
          </div>
      </div>
      <div className='form_row2'>
      <div className='form_type'>Contact</div>
        <div className='form_email'>
            <div>Email</div>
            <input 
            placeholder=''
            required
            type='email'
            className='input_email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          </div>
      </div>
      <div className='form_row3'>
        <div className='form_phone'>
            <div>Phone</div>
            <input 
            placeholder=''
            required
            type='phone'
            className='input_phone'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            />
          </div>
      </div>
      <div className='form_row4'>
        <div className='form_address'>Address</div>
          <input 
          placeholder=''
          required
          type='text'
          className='input_address'
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          />
      </div>
      <div className='form_row5'>
        <div className='form_address'>Address 2</div>
          <input 
          placeholder=''
          required
          type='text'
          className='input_address2'
          onChange={(e) => setAddress2(e.target.value)}
          value={address2}
          />
      </div>
      <div className='form_row6'>
        <div className='form_zipcode'>
          <div>Zipcode</div>
          <input 
            placeholder=''
            required
            type='text'
            className='input_zipcode'
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
          />
        </div>

        <div className='form_city'>
          <div>City</div>
          <input 
            placeholder=''
            required
            type='text'
            className='input_city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>

        <div className='form_state'>
          <div>State</div>
          <Select className='input_state' options={USAstates} onChange={(e) => handleState(e)}/>
        </div>
        
      
      </div>
      </div>

      <div className='student_form_right'>
        <div className='bold'>Parent(s)</div>
        <div className='form_row1'>
        <div className='form_firstname'>
            <div>First name</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_firstname'
            onChange={(e) => setParent1firstname(e.target.value)}
            value={parent1firstname}
            />
        </div>
        <div className='form_middlename'>
            <div>MI</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_middlename'
            onChange={(e) => setParent1middlename(e.target.value)}
            value={parent1middlename}
            />
          </div>
          <div className='form_lastname'>
            <div>Last name</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_lastname'
            onChange={(e) => setParent1lastname(e.target.value)}
            value={parent1lastname}
            />
          </div>
        </div>

        <div className='form_row1'>
        <div className='form_firstname'>
            <div>First name</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_firstname'
            onChange={(e) => setParent2firstname(e.target.value)}
            value={parent2firstname}
            />
        </div>
        <div className='form_middlename'>
            <div>MI</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_middlename'
            onChange={(e) => setParent2middlename(e.target.value)}
            value={parent2middlename}
            />
          </div>
          <div className='form_lastname'>
            <div>Last name</div>
            <input 
            placeholder=''
            required
            type='text'
            className='input_lastname'
            onChange={(e) => setParent2lastname(e.target.value)}
            value={parent2lastname}
            />
          </div>
        </div>

        <div className='form_add' onClick={handleSubmit}>Add Student</div>
      </div>
    </div>
  )
}

export default StudentForm