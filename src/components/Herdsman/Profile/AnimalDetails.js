import React from 'react'
import {Link} from 'react-router-dom';

const AnimalDetails = () => {
  return (
    <div className="p-2 m-2 rounded-lg bg-white text-slate-900">
        <div className="flex justify-between">
            <p className="font-bold text-center text-slate-100 bg-slate-500 shadow-lg p-2 rounded-lg"><Link to="newaniaml" >Add New Animal +</Link></p> 
        </div>
        <div className="pt-2  p-1 rounded-lg text-slate-600 mt-2 font-bold">
            Animal Details of the Present Herdsman.
        </div>
    </div>
  )
}

export default AnimalDetails
