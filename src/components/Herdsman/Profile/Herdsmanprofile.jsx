import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import profile from '../../Images/meat.jpg';
function Herdsmanprofile() {

  const profiledata = [
    {
      title:"Name",
      placeholder:"Name",
      value:"Surya Prakash"
    },
    {
      title:"Email",
      placeholder:"Email",
      value:"spnreddy2002@gmail.com"
    },
    {
      title:"Mobile No",
      placeholder:"Mobile",
      value:"9381374958"
    },
    {
      title:"Address",
      placeholder:"Address",
      value:"Hitech-City, Hyderabad, Telangana"
    }
  ]
  return (
    <div className="bg-slate-200 p-5 m-2 rounded-xl">
      <p className="text-center text-slate-500 font-bold pb-3">Update Profile Photo</p>
      <div className="flex justify-evenly">
        <div className="m-auto h-[100px] w-[100px] rounded-[50%]"><img className="h-[100px] w-[100px] rounded-[50%]" src={profile}/>
        <input id="image"  type="file" hidden/>
        <label for="image"><Icon.Pencil className="relative left-[100px] bottom-[25px]"/></label>
        </div>
      </div>
      <div className="form font-bold m-4">
        <p className="text-slate-500 m-4">Edit Profile Details</p>
          <form action="">
            <div className="text-slate-900 m-auto">
            {profiledata.map((item,index)=>{
              return <div className="flex justify-evenly"><div className="m-auto"><p className="text-left font-bold text-slate-800">{item.title}</p></div><div className="hover:outline-4 p-2 rounded-md bg-slate-300 w-[40%] m-2"><input placeholder={item.placeholder} className="w-[100%] font-medium outline-none bg-slate-300 border-collapse focus:bg-slate" defaultValue={item.value}></input></div></div> })}
            </div>
          </form>
            <div className="bg-gray-900 rounded-lg text-slate-100 p-2  w-[100px] text-center shadow-lg hover:scale-110 align-middle m-auto mt-3 cursor-pointer"><button value="Update"/>Update</div>
      </div>

    </div>
  )
}

export default Herdsmanprofile
