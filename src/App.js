import './App.scss';
import Login from './contents/Login';
import Layout from './contents/Layout';
import { Token } from './config/Token';
import { useLocation } from 'react-router-dom';
// import Login from './contents/login';

function App() {
  const { pathname } = useLocation()
  console.log("pathname : ", pathname)
  return (
    <div className="App">
      {Token ? <Layout /> : <Login/>} 
    </div>
  );
}

export default App;
