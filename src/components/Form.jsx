import { useState, useEffect } from "react";

function Form(){

    const [petName, setPetName] = useState('');


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Add Patient and {""}
                <span className="text-indigo-600 font-bold">Admin</span>
            </p>


            <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Owner email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="medrelease">Medical Release</label>
                    <input 
                        id="medrelease"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Symptoms</label>
                    <textarea 
                        name="" 
                        id="symptoms" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400"
                        placeholder="Describe the symptoms"
                        
                    />
                </div>

                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Add Patient"
                />
            </form>
        </div>
    )
}

export default Form;