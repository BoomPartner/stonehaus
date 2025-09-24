'use client';
import React, { useContext, useState } from 'react';
import globalContext from '@/app/context/globalContext';

const Contacto = () => {
  const { windowWidth, language } = useContext(globalContext);
  const [spiner, setSpiner] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const [status, setStatus] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    empresa: '',
    pais: '',
    emisor: 'StoneHaus',
  });

  // 🔹 Actualiza formData en cada input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Validación básica de email
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleData = async () => {
    const allFieldsFilled = Object.values(formData).every(
      (item) => item !== null && item !== ''
    );

    if (allFieldsFilled && isValidEmail(formData.correo)) {
      setStatus(false);
      setSpiner(true);

      try {
        const response = await fetch(
          'https://expres-jwgr.onrender.com/mailPruebas',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          console.log('mensaje enviado');
          setMensaje(true);
          setSpiner(false);
          setTimeout(() => setMensaje(false), 3000);
        } else {
          console.log('No se envió el mensaje');
          setMensaje(false);
          setSpiner(false);
        }
      } catch (error) {
        console.error('Error al enviar:', error);
        setMensaje(false);
        setSpiner(false);
      }
    } else {
      setStatus(true);
      setMensaje(false);
      setSpiner(false);
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-full border-red-900">
          <div className="mt-40">
            <div
              className={`w-full mx-auto ${
                windowWidth < 1330 ? '' : 'container flex items-center'
              }`}
            >
              {/* Mapa */}
              <div
                className={`${
                  windowWidth < 1330 ? 'w-full flex justify-center' : 'w-[50%]'
                } p-10`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8370029417524!2d-99.22775328805075!3d19.462593181747565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2024fb7f96621%3A0x1b9baf62e24611da!2sS.%20Jos%C3%A9%20de%20Los%20Leones%2025%2C%20Naucalpan%2C%2053489%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1714517292011!5m2!1ses!2smx"
                  width={windowWidth < 1330 ? '1000' : '600'}
                  height="450"
                  style={{ border: '0px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Formulario */}
              <div className="w-full mx-auto p-10">
                <h1 className="text-2xl font-semibold text-left uppercase">
                  {language ? 'Contact' : 'Contacto'}
                </h1>
                <h5 className="mt-5 text-lg uppercase">
                  San José de Los Leones #25, Naucalpan, Estado de México
                </h5>
                <h5 className="w-full mt-2 text-lg">ventas@stonehaus.com.mx</h5>
                <h5 className="mt-2">55-11-69-24-60</h5>
                <h5 className="text-lg mt-2">
                  {language
                    ? 'Do you want a quote?'
                    : '¿Quieres una cotización?'}
                </h5>

                {/* Inputs */}
                <div
                  className={`w-full mt-5 grid ${
                    windowWidth < 500 ? 'grid-cols-1' : 'grid-cols-2'
                  } gap-5`}
                >
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder={language ? 'Name' : 'Nombre'}
                    className="w-full border-b p-2 focus:border-b focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder={language ? 'Phone' : 'Teléfono'}
                    className="w-full border-b p-2 focus:border-b focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder={language ? 'Mail' : 'Correo'}
                    className="w-full border-b p-2 focus:border-b focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder={language ? 'Company' : 'Empresa'}
                    className="w-full border-b p-2 focus:border-b focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                    placeholder={language ? 'Country' : 'País'}
                    className="w-full border-b p-2 focus:border-b focus:outline-none"
                    required
                  />
                </div>

                {/* Botón */}
                <div className="mt-5">
                  <button
                    className="bg-black bg-opacity-50 p-2 px-10 text-white"
                    onClick={handleData}
                    disabled={spiner}
                  >
                    {spiner ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>

                {/* Mensajes */}
                <div
                  className={`text-center text-md p-2 text-green-500 ${
                    mensaje ? '' : 'hidden'
                  } transition-all duration-500`}
                  id="exito"
                >
                  {'Muchas gracias, tu mensaje ha sido enviado.'}
                </div>
                <div
                  className={`text-center text-md p-2 text-red-500 ${
                    status ? '' : 'hidden'
                  } transition-all duration-500`}
                  id="warning"
                >
                  {'Todos los campos son requeridos (revisa también tu correo)'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
