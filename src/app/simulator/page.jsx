import React from 'react'
import ComponentSimulator from '@/components/Simulador/Simulador'
export const metadata = {
  title: "Simulador",
  description: "Visualiza nuestras obras de arte en espacios de lujo"
}
const pageSimulator = () => {
  return (
    <div>
      <ComponentSimulator></ComponentSimulator>
    </div>
  )
}

export default pageSimulator
