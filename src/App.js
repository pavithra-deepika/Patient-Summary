import logo from './logo.svg';
import './App.css';
import PatientDetails from "../src/components/PatientDetails";
import PatientSummary from "../src/components/PatientSummary";
import patientJSONData from "./patientJSONData.json"
import Box from '@mui/material/Box';

function App() {

  
  return (
    
    <div>
         <h2> PatientDetails </h2>
      <Box      
       sx={{
        width: 1000,
        height: 150,
        backgroundColor: 'white'
        }}>
        
      <PatientDetails patientJSONData={patientJSONData}/>
      </Box>
      <div>
      <Box      
       sx={{
        width: 1000,
        height: 'max-content',
        backgroundColor: 'white'
        }}>
       <PatientSummary patientJSONData={patientJSONData} />
       </Box>
      </div>

    </div>
  );
}

export default App;
