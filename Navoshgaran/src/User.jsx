import  React , {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
export default React.memo( function User({userData , FRerender}) {
  const { firstName, lastName,  username,  phoneNumber ,id}=userData
  const [firstNameForEdit, setFirstNameForEdit] = useState(firstName)
  const [lastNameForEdit, setLastNameForEdit] = useState(lastName)
  const [usernameForEdit, setUsernameForEdit] = useState(username)
  const [phoneNumberForEdit, setPhoneNumberForEdit] = useState(phoneNumber)
  const [editMode, setEditMode] = useState(false)
  async function deleteUser(){
    await fetch(`http://localhost:8585/users/${id}`,{
      method: 'DELETE',
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
         alert('mission accomplished');
      }else{
        alert('Something went wrong, please try again')
      }
    })
    .catch(() => {
      alert('Something went wrong, please try again')
    });
    FRerender(item => !item)
  }
  async function edit(){ 
    await fetch(`http://localhost:8585/users/${id}`, {
      method: 'PATCH',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName:firstNameForEdit,
        lastName:lastNameForEdit,
        username:usernameForEdit,
        phoneNumber:phoneNumberForEdit,
      })
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
         alert('mission accomplished');
      }else{
        alert('Something went wrong, please try again')
      }
    })
    .catch(() => {
      alert('Something went wrong, please try again')
    });
    setEditMode(false)
    FRerender(item => !item)
  }
  return (
  <div className='w-1/4 flex flex-col items-center justify-start gap-3 border-4 border-gray-600 rounded-md bg-slate-300 py-4  '>
    first name  <input disabled={!editMode} value={firstNameForEdit} className="w-11/12 h-8 border-2 border-gray-600 rounded-md px-2 " onChange={(e)=>{setFirstNameForEdit(e.target.value)}}/> 
    last name <input disabled={!editMode} value={lastNameForEdit} className="w-11/12 h-8 border-2 border-gray-600 rounded-md px-2 " onChange={(e)=>{setLastNameForEdit(e.target.value)}}/> 
    username <input disabled={!editMode} value={usernameForEdit} className="w-11/12 h-8 border-2 border-gray-600 rounded-md px-2 " onChange={(e)=>{setUsernameForEdit(e.target.value)}}/> 
    phone number <input disabled={!editMode} value={phoneNumberForEdit} className="w-11/12 h-8 border-2 border-gray-600 rounded-md px-2 " onChange={(e)=>{setPhoneNumberForEdit(e.target.value)}}/> 
    <div className="w-full flex item-center  gap-4">
      <DeleteIcon color='error' onClick={deleteUser} />
      {editMode?<CheckIcon color='success' onClick={edit}/>:<EditIcon color='primary' onClick={()=>{setEditMode(true)}} />}
    </div>
  </div>
  );
})