import logo from './logo.svg';
import './App.css';
import PatientDetails from "../src/components/PatientDetails";

function App() {

  const patientData = {
    patientId : 101,
    diagnosis : "DM.Hypothyroid",
    pastMedicalHistory : "no" 
  }
  return (
    <div>
     
      <PatientDetails patientData={patientData}/>

    </div>
  );
}

export default App;
