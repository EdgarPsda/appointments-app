import { useState, useEffect } from "react";
import Error from "./Error";

function Form({patients, setPatients, patient, setPatient }){

    const [petName, setPetName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [medRelease, setMedRelease] = useState('');
    const [symptoms, setSymtoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(patient).length > 0){
            setPetName(patient.petName);
            setOwner(patient.owner);
            setEmail(patient.email);
            setMedRelease(patient.medRelease);
            setSymtoms(patient.symptoms);
        }
    }, [patient])

    const gen_id = () =>{
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);

        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([petName, owner, email, medRelease, symptoms].includes('')){
            console.log("Hay al menos un campo vacio");
            setError(true);
        }else{
            console.log("Todos llenos");
            setError(false);

            // Patient object
            const patientObj = {
                petName,
                owner,
                email,
                medRelease,
                symptoms
            }

            if(patient.id){
                // Editing patient
                patientObj.id = patient.id;
                const updatedPatients = patients.map(patientState => patientState.id === patient.id ? patientObj : patientState)
                setPatients(updatedPatients)
                setPatient({})

            }else{
                // Adding new patient
                patientObj.id = gen_id();
                setPatients([...patients, patientObj]);
            }


            // Reset form
            setPetName('');
            setOwner('');
            setEmail('');
            setMedRelease('');
            setSymtoms('');
        }

    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Add Patient and {""}
                <span className="text-indigo-600 font-bold">Admin</span>
            </p>


            <form 
                action="" 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}     
            >
                {error && (
                    <Error><p>All fields are required.</p></Error>
                )}
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="petname">Pet Name</label>
                    <input 
                        id="petname"
                        type="text" 
                        placeholder="Pet"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="ownername">Owner Name</label>
                    <input 
                        id="ownername"
                        type="text" 
                        placeholder="Owner"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Owner email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="medrelease">Medical Release</label>
                    <input 
                        id="medrelease"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={medRelease}
                        onChange={(e) => setMedRelease(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Symptoms</label>
                    <textarea 
                        name="" 
                        id="symptoms" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                        placeholder="Describe the symptoms"
                        value={symptoms}
                        onChange={(e) => setSymtoms(e.target.value)}
                        
                    />
                </div>

                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={patient.id ? 'Edit Patient' : 'Add Patient'}
                />
            </form>
        </div>
    )
}

export default Form;