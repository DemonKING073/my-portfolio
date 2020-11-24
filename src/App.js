import './App.css';
import { useEffect, useState } from 'react';
import DefaultPage from './components/DefaultPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';


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
        <Switch>
          <Route path="/" exact component={DefaultPage(Home)}/>
          <Route path="/projects" exact component={DefaultPage(Projects)}/>
          <Route path="/about" exact component={DefaultPage(About)}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
