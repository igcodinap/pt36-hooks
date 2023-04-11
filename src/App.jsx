import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Timer from './components/Timer'
import {users} from './data/usersData.js';
import Dummy from './components/Dummy.jsx'
import { useState } from 'react';

const copyLogo = logo

export default function App() {
  const valorColor2 = 'yellow'

  const [inputUser, setInputUser] = useState('')
  return (
    // el return se escribe lo que se va a renderizar
    // debido a eso es que escribimos html
    <div>
      <input type="text" value={inputUser} onChange={(e) => setInputUser(e.target.value)}/>
      <Dummy color='azul' color2 = {valorColor2} numero={10} input={inputUser}/>
    </div>
  );
}