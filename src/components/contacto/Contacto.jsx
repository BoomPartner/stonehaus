"use client"
import React, { useContext, useState } from 'react'
import globalContext from '@/app/context/globalContext';

const Contacto = () => {

    const { windowWidth, language } = useContext(globalContext)
    const [spiner, setSpiner] = useState(false)
    const [mensaje, setMensaje] = useState(false)

    const [formData, setFormData] = useState({
        nombre: null,
        correo: null,
        telefono: null,
        empresa: null,
        pais: null,
        emisor: "StoneHaus"
    });

    const [status, setStatus] = useState(false);

    const handleData = async () => {
        const allFieldsFilled = Object.values(formData).every(item => item !== null && item !== "");

        if (allFieldsFilled) {
            setStatus(false)
            setSpiner(true)
            // console.log('Todos los campos están completos');
            // console.log(formData);

            try {
                console.log(formData);
                console.log(typeof formData);
                const response = await fetch("https://expres-jwgr.onrender.com/mailPruebas", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                if (response) {
                    console.log("mensaje enviado");
                    const data = await response.json()
                    // console.log(data);
                    setMensaje(true)
                    setSpiner(false)
                    setTimeout(() => {
                        setMensaje(false); // Cambiar mensaje a false o null después de 3 segundos
                    }, 3000); // 3000 milisegundos = 3 segundos


                } else {
                    console.log("No se envio el mensaje");
                    // console.log(response.status, response.statusText);
                    setMensaje(false)
                }
            } catch (error) {
                // console.log(error);
                // console.error('Error al enviar el formulario:', error);
                setMensaje(false)
            }
        } else {
            setStatus(true)
            setMensaje(false)
            setSpiner(false)
            // console.log('Algunos campos están vacíos');
            // Manejar campos vacíos o nulos aquí
        }
    }

    const handleChange = () => {

    }
    return (
        <div>
            <div className="w-full">
                <div className="w-full border-red-900">
                    <div className="mt-40">
                        <div className={`w-full mx-auto ${windowWidth < 1330 ? "" : "container flex items-center"}`}>
                            <div className={`${windowWidth < 1330 ? "w-full flex justify-center" : "w-[50%]"} p-10`}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8370029417524!2d-99.22775328805075!3d19.462593181747565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2024fb7f96621%3A0x1b9baf62e24611da!2sS.%20Jos%C3%A9%20de%20Los%20Leones%2025%2C%20Naucalpan%2C%2053489%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1714517292011!5m2!1ses!2smx"
                                    width={windowWidth < 1330 ? "1000" : "600"} height="450" style={{ border: "0px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <div className="w-full mx-auto p-10">
                                <h1 className="text-2xl font-semibold text-left uppercase">
                                    {language ? "Contact" : "Contacto"}
                                </h1>
                                <h5 className='mt-5 text-lg uppercase'>San José de Los Leones #25,
                                    Naucalpan,Estado de México,
                                </h5>

                                <h5 className='w-full mt-2 text-lg'>ventas@stonehaus.com.mx</h5>

                                <h5 className='mt-2'>55-11-69-24-60</h5>

                                <h5 as={'h5'} variant='h5' className='text-lg'>
                                    {
                                        language ? "Do you want a quote?" : "¿Quieres una cotización?"
                                    }
                                </h5>

                                <div className={`w-full mt-5 grid ${windowWidth < 500 ? "grid-cols-1" : "grid-cols-2"} gap-5`}>

                                    <input type="text" className='w-full border-b p-2 focus:border-b focus:outline-none' 
                                    required onChange={handleChange} placeholder={language ? "Name": "Nombre"} name='nombre' />
                                    <input type="text" className='w-full border-b p-2 focus:border-b focus:outline-none' 
                                    required onChange={handleChange} placeholder={language ? "Phone" : "Teléfono"} name='telefono' />
                                    <input type="text" className='w-full border-b p-2 focus:border-b focus:outline-none' 
                                    required onChange={handleChange} placeholder={language ? "Mail" : "Correo"} name='correo' />
                                    <input type="text" className='w-full border-b p-2 focus:border-b focus:outline-none' 
                                    required onChange={handleChange} placeholder={language ? "Company" : "Empresa"} name='empresa' />
                                    <input type="text" className='w-full border-b p-2 focus:border-b focus:outline-none' 
                                    required onChange={handleChange} placeholder={language ? "Country" : "País"} name='pais' />

                                </div>
                                {/* <div className="mt-5">
                                    <textarea name='mensaje' label='Mensaje' size='lg' rows={4} maxLength={150} onChange={handleChange}></textarea>
                                </div> */}

                                <div className="mt-5">
                                    <button className='bg-black bg-opacity-50 p-2 px-10 text-white' onClick={handleData}>
                                        {spiner ? "loading... " : "Enviar"}</button>
                                </div>

                                <div className={`text-center text-md p-2 text-green-500 ${mensaje == true ? "" : "hidden"} transition-all duration-500`} id="exito">{"Muchas gracias, tu mensaje ha sido enviado."}</div>
                                <div className={`text-center text-md p-2 text-red-500  ${status == true ? "" : "hidden"} transition-all duration-500`} id='warning'>{"Todos los campos son requeridos"}</div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto
