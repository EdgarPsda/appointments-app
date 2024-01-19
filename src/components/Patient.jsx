const Patient = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {""}
                <span className="font-normal normal-case">Nala</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner Name: {""}
                <span className="font-normal normal-case">Edgar</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">edgar@email.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Medical Release: {""}
                <span className="font-normal normal-case">December 10 2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {""}
                <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque quisquam autem quia modi iste temporibus cumque deleniti, debitis qui velit voluptatem eos. Quidem, omnis ipsam optio nisi iste temporibus?</span>
            </p>
        </div>
    )
}

export default Patient