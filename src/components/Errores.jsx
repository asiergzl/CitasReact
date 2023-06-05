import React from 'react'

const Errores = ({children}) => {
  return (
     <div className='bg-red-800 text-white text-center p-3 uppercase fond-bold mb-3 rounded-md'>
        {children}
    </div>
  )
}

export default Errores