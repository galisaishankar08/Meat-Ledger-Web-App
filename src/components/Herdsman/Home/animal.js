import React from 'react'
import Sidebar from '../../Sidebar/Sidebar.js'
import AnimalDetails from '../Profile/AnimalDetails';

function Animal() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className="container">
          <div className="w-[100%] bg-white rounded-lg p-3 h-[50px] m-2">Navar</div>
          <div><AnimalDetails/></div>
        </div>
      </div>
    </>
  )
}

export default Animal