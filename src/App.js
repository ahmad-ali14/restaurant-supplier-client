import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loggedin, setLoggedin] = useState(false)
  const [store, setStore] = useState(null)


  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    let store = JSON.parse(localStorage.getItem("login"))

    if (store && store.loggedin) {
      setStore(store)
      setLoggedin(true)
    }
  }

  const Login = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then(result => {
        localStorage.setItem('login', JSON.stringify({
          loggedin: true,
          token: result.token
        }))


        checkAuth()
      })
  }


  const Home = <>
    <div className="row mt-3 mb-3 text-center">
      <button className="col-md-5 mr-2 btn btn-info text-white" > Register as Supplier </button>
      <button className="col-md-5 ml-2 btn btn-info text-white" > Register as Restaurant </button>
    </div>
    <div className="row text-center mt-2 mb-2"><h4> OR </h4></div>
    <div className="row text-center">
      <form onSubmit={Login}>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="mb-3" /> <br />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="" />
        <button type="submit" className="col-12 ml-1 mr-2 btn btn-info text-white mt-3" > LOG IN </button>
      </form>
    </div>
  </>


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Supplier Or Restaurant</h1>
        <Router>
          <Switch>
          </Switch>
          <Switch>
            <Route path="/">
              {!loggedin ? Home : (
                <h1> Logging in succeed </h1>
              )}
            </Route>
          </Switch>
        </Router>
      </header>
    </div>

  );
}



export default App;
