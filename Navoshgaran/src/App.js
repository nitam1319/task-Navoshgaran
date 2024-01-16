
import './App.css';
import Add from './Add'
import { Routes, Route, Link } from "react-router-dom";
import AllUser from './AllUser';

function App() {
  return (
    <>
    <div className=" w-full h-10 bg-gray-600 flex items-center justify-center gap-5 ">
      <Link to={'/'} className='w-24 bg-orange-600 text-center border-spacing-1 rounded-2xl hover:bg-orange-800  text-slate-100 '>Add user</Link>
      <Link to={'/AllUser'} className='w-24 bg-orange-600 text-center border-spacing-1 rounded-2xl hover:bg-orange-800 text-slate-100 '>All user</Link>
    </div>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/AllUser' element={<AllUser/>}/>
      </Routes>
      
    </>
  );
}

export default App;
