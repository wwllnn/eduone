import React from 'react'
import {SAT2023PT3RWM1BD} from '../data.js'

import './Report.css'

const Report = ({wrongAnswers}) => {




  return (
    <div>
      <div className='report_section'>Reading & Writing</div>
      <div className='report_mastery'>
        <div className='report_mastery_header'>
          <div>Difficulty Levels</div>
          <div>Mastery %</div>
          <div></div>
        </div>
        <div className='report_mastery_levels'>
          <div className='report_level'>
            <div>
              Bronze
            </div>
            <div>
              100%
            </div>
            <div>
            </div>
          </div>
          <div className='report_level'>
            <div>
              Silver
            </div>
            <div>
              100%
            </div>
            <div>
            </div>
          </div>
          <div className='report_level'>
            <div>
              Gold
            </div>
            <div>
              100%
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {Object.keys(wrongAnswers).map((n) => {
        console.log(SAT2023PT3RWM1BD[n])
      })}
      </div>
    </div>
  )
}

export default Report