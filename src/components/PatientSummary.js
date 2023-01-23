import React from 'react'

function PatientSummary({summaryData}) {
  return (
    <div>
        
        <h3> PatientSummary</h3>
        
    <div>
        visitId: {summaryData.visitId}
        visitTime: {summaryData.visitTime}
        visitDate:{summaryData.visitDate}
    </div>
    </div>
  )
}

export default PatientSummary