import { useState } from "react";

export default function Add() {
  const [ firstName , setFirstName ] = useState('')
  const [ lastName , setLastName ] = useState('')
  const [ username , setUsername ] = useState('')
  const [ phoneNumber , setPhoneNumber ] = useState('')
  const regexNumber = /^\d+$/
  async function post (){
    if(  firstName&&  lastName&&    username&& phoneNumber  ){
      fetch('http://localhost:8585/users', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName:firstName,
          lastName:lastName,
          username:username,
          phoneNumber:phoneNumber,
        })
      })
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
             alert('mission accomplished');
          }else{
            alert('Something went wrong, please try again')
          }
        })
        .catch(error => {
          alert('Something went wrong, please try again')
        });
    }else{
      alert('Please fill in all fields')
    }
  }
  return (
    <div className="w-full h-[calc(100vh-40px)] flex items-center justify-center ">
      <div className="w-1/3 flex flex-col items-center justify-start gap-3 border-4 border-gray-600 rounded-md bg-slate-300 py-6">
        <input value={firstName} type="text" placeholder="first name :" className="w-11/12 h-8 border-2 border-gray-600 rounded-md px-2 "  onChange={(e)=>{setFirstName(e.target.value)}}/>
        <input value={lastName} type="text" placeholder="last name :" className="w-11/12 h-8 border-2 border-gray-600 rounded-md  px-2"  onChange={(e)=>{setLastName(e.target.value)}}/>
        <input value={username} type="text" placeholder="username :" className="w-11/12 h-8 border-2 border-gray-600 rounded-md  px-2"  onChange={(e)=>{setUsername(e.target.value)}}/>
        <input value={phoneNumber} type="tel" placeholder="phone number :" className="w-11/12 h-8 border-2 border-gray-600 rounded-md  px-2" onChange={(e)=>{setPhoneNumber(e.target.value)}} />
        <button className="w-1/2 border-2 border-gray-600 rounded-md bg-slate-400" onClick={post} >Add</button>
      </div>
    </div>
  );
}
