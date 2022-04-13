import React from 'react'
import BasicCard from './Components/BasicCard'

function About() {
  return (
    <div>
      <BasicCard heading="TESTING1" body="BODY TEST" buttonBody="BUTTON TEXT">
        THIS IS A CHILD
      </BasicCard>
      <BasicCard heading="TESTING2" body="BODY TEST" buttonBody="BUTTON TEXT">
        THIS IS ALSO A CHILD
      </BasicCard>
    </div>
  )
}

export default About
