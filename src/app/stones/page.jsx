import React from 'react'
import Catalogo from '@/components/Stones/Catalogo'
export const metadata = {
  title: "Stones",
  description: "Nuestro catalogo de piedras"
}
const pageStones = () => {

  return (
    <div>
      <Catalogo></Catalogo>
    </div>
  )
}

export default pageStones
