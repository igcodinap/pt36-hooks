import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Timer from './components/Timer'
import {users} from './data/usersData.js';

const copyLogo = logo

function App() {
  return (
    // el return se escribe lo que se va a renderizar
    // debido a eso es que escribimos html
    <div className="App">
      <NavBar title="First Title" nombreBoton="Este no era el nombre el nombre del boton"/>
      {
        users.map((user) => {
          return <UserProfile username={user.username} age={user.age}/>
        })
      }
      <Timer/>
    </div>
  );
}


export default App;
