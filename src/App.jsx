import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const get_local_storage = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS)
    }

    get_local_storage();
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
    console.log("Componente listo o cambio en pacientes");
  }, [patients])

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">

        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        ></Form>
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        ></PatientList>

      </div>
    </div>
  )
}

export default App
