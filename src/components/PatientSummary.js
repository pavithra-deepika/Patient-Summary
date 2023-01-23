import React from 'react'
import Box from '@mui/material/Box';


function PatientSummary({patientJSONData}) {
  return (
    <div>
        {patientJSONData?.result?.map(data =>
    <Box      
       sx={{
        width: 600,
        height: 300,
        backgroundColor: 'gray'
        }}>
        <h5>{data.date}</h5>
        <h5>{data.doctor}</h5>
        {data.summary.map(summaryData =>
        <p>{summaryData.title}</p>)}
    </Box>
      )}
    </div>

  )
}

export default PatientSummary