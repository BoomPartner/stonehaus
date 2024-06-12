import React from 'react'
import Contacto from '@/components/contacto/Contacto'
export const metadata = {
  title: "Contacto",
  description: "Contactanos para cotizar o consultar información sobre nuestros productos"
}
const pageContact = () => {
  return (
    <div>
      <Contacto></Contacto>
    </div>
  )
}

export default pageContact
