import './StudentForm.css'
import Select from 'react-select'

import { useState } from 'react'

const StudentForm = () => {
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



  const USAstates = [
    {value: 'tx', label: 'TX'},
    {value: 'ca', label: 'CA'},
    {value: 'ny', label: 'NY'}
  ]




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
          <Select className='input_state' options={USAstates} />
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
      </div>
    </div>
  )
}

export default StudentForm