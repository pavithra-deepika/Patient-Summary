import React from 'react'

function PatientDetails({patientData}) {
  return (
    <div>
        <h1> Patient Details</h1>
        <div>
        <h3>patientId : {patientData.patientId}</h3>
        <h3>diagnosis : {patientData.diagnosis}</h3>
        <h3>pastMedicalHistory : {patientData.pastMedicalHistory}</h3>
        </div>
    </div>
  )
}
export default PatientDetails