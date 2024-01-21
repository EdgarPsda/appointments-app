import Patient from "./Patient"

const PatientList = ({ patients, setPatient, deletePatient}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {patients && patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patient List</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Admin {""}
                        <span className="text-indigo-600 font-bold">Patients and Appointments</span>
                    </p>

                    {patients.map((patient) => (
                        <Patient
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        ></Patient>

                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No Patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Add {""}
                        <span className="text-indigo-600 font-bold">Patients will list here</span>
                    </p>

                </>
            )}


        </div>
    )
}

export default PatientList