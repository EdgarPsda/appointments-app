import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

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
        ></PatientList>

      </div>
    </div>
  )
}

export default App
