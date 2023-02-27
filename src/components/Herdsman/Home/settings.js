import React from 'react'
import Sidebar from '../../Sidebar/Sidebar.js'

function Settings() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <div className="container">
          <div className="w-[100%] bg-white rounded-lg p-3 h-[50px] m-2">Navar</div>
            <div className="w-[100%] bg-white rounded-lg p-3 h-[50px] m-2">
                Settings
            </div>
        </div>
      </div>
    </>
  )
}

export default Settings