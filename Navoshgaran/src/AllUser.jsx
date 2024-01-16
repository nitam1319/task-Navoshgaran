import React, { useEffect, useState } from 'react'
import User from './User';

export default function AllUser() {
    const [ users , setUsers ] = useState([])
    const [reRender , setReRender] = useState(false)
    useEffect(()=>{
        async function get(){
            fetch('http://localhost:8585/users')
                .then(response => response.json())
                .then(result => {
                    setUsers(result)
                })
                .catch(() => {
                    alert('Something went wrong, please try again')
                });
        }
        get()
    },[reRender])
  
  return (
    <div className='w-full  flex flex-col items-center justify-center gap-3  overflow-y-auto py-10 '>
        {
           users.map(item =>(
            <User key={item.id} FRerender={setReRender} userData={item} />
           )) 
        }
    </div>
  )
}
