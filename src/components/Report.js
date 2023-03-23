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
        <div>Craft and Structure</div>
      </div>

      <div>
        <div>Information and Ideas</div>
      </div>

      <div>
        <div>Standard English Conventions</div>
      </div>

      <div>
        <div>Expression of Ideas</div>
      </div>

      <div>
        <div>Words in Context</div>
      </div>

      <div>
        <div>Text Structure and Purpose</div>
      </div>

      <div>
        <div>Central Ideas and Details</div>
      </div>

      <div>
        <div>Command of Textual Evidence</div>
      </div>

      <div>
        <div>Inferences</div>
      </div>

      <div>
        <div>Boundaries</div>
      </div>

      <div>
        <div>Form Structure and Sense</div>
      </div>

      <div>
        <div>Transitions</div>
      </div>

      <div>
        <div>Rhetorical Synthesis</div>
      </div>

      <div>
        <div>Command of Quantitative Evidence</div>
      </div>

      <div>
        <div>Cross-Text Connections</div>
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