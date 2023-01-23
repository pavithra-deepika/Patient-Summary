import React from 'react'

function PatientDetails({patientJSONData}) {
  return (
    <div>
        <h3> Patient Details</h3>
        <div>
          {patientJSONData?.patient_detail.map(patientData => 

          <p>{patientData.content}</p>
          )}
      
        </div>
    </div>
  )
}
export default PatientDetails