import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import RestaurantUi from './RestaurantUi'
import SupplierUi from './SupplierUi'
import SupplierForm from './SupplierForm'
import RestaurantForm from './RestaurantForm'
import { domain } from './config'

function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loggedin, setLoggedin] = useState(false)
  const [store, setStore] = useState(null)
  const [role, setRole] = useState(null)
  const [allRstaurants, setAllRestaurants] = useState([])
  const [allSuppliers, setAllSuppliers] = useState([])
  const [appErr, setAppErr] = useState("")
  const [myId, setMyId] = useState(null)


  const getAllRestaurants = () => {
    if (!loggedin) {
      return
    }
    fetch(`${domain}/restaurant/all`, {
      method: "GET",
      headers: { Token: JSON.parse(localStorage.getItem("login")).token },
    })
      .then((res) => {
        return res.json();
      })
      .then(result => {
        setAllRestaurants(result);
        console.log('allRestaurants', allRstaurants)
      }).catch((err) => console.log(err))
  }

  const getAllSuppliers = () => {
    if (!loggedin) {
      return
    }
    fetch(`${domain}/suppliers/all`, {
      method: "GET",
      headers: { Token: JSON.parse(localStorage.getItem("login")).token },
    })
      .then((res) => {
        return res.json();
      })
      .then(result => {
        setAllSuppliers(result);
      }).catch((err) => console.log(err))
  }

  const getRestaurantsOrSuppliers = () => {
    if (role === "restaurant") { getAllSuppliers() }
    if (role === "supplier") { getAllRestaurants() }

  }
  useEffect(() => {
    checkAuth()
    getAllRestaurants()
    getAllSuppliers()
  }, [])

  const checkAuth = () => {
    let storee = JSON.parse(localStorage.getItem("login"))

    if (storee && storee.loggedin) {
      setStore(storee)
      setLoggedin(true)
      setRole(storee.role)
      setMyId(storee.myId)
    }
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const Login = (e) => {

    e.preventDefault()
    if (email == null || email == "" || password == null || password == "") {
      e.preventDefault();
      setAppErr("enter email and password")
      return
    }
    console.log('logging in .....')

    //let loginResult = await
    return fetch(`${domain}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password })
    })
      .then(async (res) => {

        await sleep(3000)
        console.log("after 3s")
        console.log("res", res);
        return res.json()
      })
      .then((result) => {
        console.log("after 3s")

        console.log(result);

        localStorage.setItem('login', JSON.stringify({
          loggedin: true,
          token: result.token,
          role: result.role,
          myId: result.userAccount.find(e => e.Key === "_id").Value
        }))


        checkAuth()
      })


  }


  const Home = <div className="row text-center">
    <div className="col-12 mt-3 mb-3 mb-2 mt-2 text-center">
      <button className="col-12 col-md-5 mb-1 mt-1 btn btn-info text-white" >
        <Link className="text-white" to="/register-supplier"> Register as Supplier</Link>
      </button>
      <div className="col-12 col-md-2" ></div>
      <button className="col-12 col-md-5 mb-1 mt-1 btn btn-info text-white" >
        <Link className="text-white" to="/register-restaurant"> Register as Restaurant</Link>
      </button>
    </div>
    <div className="col-12 text-center mt-2 mb-2"><h4> OR </h4></div>

    <div className="col-12 col-md-5 text-center mt-2 mb-2" style={{ margin: "auto" }}>
      <form style={{ margin: "auto" }} onSubmit={Login}>
        <input className="col-12 mb-2" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input className="col-12 mt-2" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className=" col-12 btn btn-info text-white mt-3" > LOG IN </button>
      </form>
    </div>


  </div>


  return (
    <div className="App">
      <header className="App-header">
        <h1>You're Welcome, Supplier Or Restaurant</h1>
        <h1 className="mt-5"><p style={{ fontSize: "8rem" }}>&#x290B; &#x290B; &#x290B; </p></h1>
      </header>

      {appErr !== "" && <div className="text-white bg-danger font-weight-bolder font-larger">
        {appErr}
      </div>}

      <Router>
        <Switch>
          <Route exact path="/register-restaurant">
            <RestaurantForm
              store={store}
              checkAuth={checkAuth}
            />
          </Route>
          <Route exact path="/register-supplier"><SupplierForm /></Route>

          <Route path="/">

            {!loggedin ? Home : (
              <>
                {role === "restaurant" && <RestaurantUi

                />}
                {role === "supplier" && <SupplierUi
                  allRestaurants={allRstaurants}
                  getAllRestaurants={getAllRestaurants}
                />}
                {role === null && <h1>Authorizeed but not assigned to a Role</h1>}
              </>
            )}
          </Route>
        </Switch>
      </Router>
    </div>

  );
}



export default App;
