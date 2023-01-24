import React from 'react'
import Box from '@mui/material/Box';


function PatientSummary({patientJSONData}) {
  return (
    <div>
        {patientJSONData?.result?.map(data =>
    <Box      
       sx={{
        width: 600,
        margin: "35px",
        height: 'max-content',
        backgroundColor: 'gray',
        }}>
        <h5>{data.date}</h5>
        <h5>{data.doctor}</h5>
        {data.summary.map(summaryData =>
         <span><p><strong>{summaryData.content.split(':')[0]}</strong>:{summaryData.content.split(':')[1]}</p></span>
                )}
    </Box>
      )}
    </div>

  )
}

export default PatientSummary