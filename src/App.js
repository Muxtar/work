import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import Side from './components/SideBar';
import Main from './components/Main';

function App() {
  return (
    <div className="main">
        <Side />
        <Main />
    </div>
  );
}

export default App;
