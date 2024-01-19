import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">

        <Form></Form>
        <PatientList></PatientList>

      </div>
    </div>
  )
}

export default App
