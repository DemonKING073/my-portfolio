import './App.css';
import { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

// const Hpage= DefaultPage(Home);

function App() {
  const [spinner, setSpinner ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setSpinner(false),1000)
  },[]);
  if(spinner){
    return(
      <div className="loader-background">
        <div className="loader"></div>
      </div>
    )
  }else return (
    <>
    <Router>
      <Nav />
    </Router>
    </>
  );
}

export default App;
