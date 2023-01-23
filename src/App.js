import logo from './logo.svg';
import './App.css';
import PatientDetails from "../src/components/PatientDetails";
import PatientSummary from "../src/components/PatientSummary";
import patientJSONData from "./patientJSONData.json"
import Box from '@mui/material/Box';

function App() {

  const patientData = {
    patientId : 101,
    diagnosis : "DM.Hypothyroid",
    pastMedicalHistory : "no", 
    summary : [ {
      visitId : 85632,
      visitTime : 10.25,
      visitDate: 12/5/2023
    },
    {
      visitId : 85589,
      visitTime : 10.25,
      visitDate: 12/3/2023
    },
    {
      visitId : 85879,
      visitTime : 10.25,
      visitDate: 12/2/2023
    }

    ]
  }
  
  return (
    
    <div>
         <h2> {patientJSONData.code}</h2>
      
      <Box      
       sx={{
        width: 600,
        height: 300,
        backgroundColor: 'white'
        }}>
        
      <PatientDetails patientJSONData={patientJSONData}/>
      </Box>
      <div>

       <PatientSummary patientJSONData={patientJSONData} />
       
      </div>

    </div>
  );
}

export default App;
