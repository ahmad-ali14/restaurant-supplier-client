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
import Nav from './Nav'

function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loggedin, setLoggedin] = useState(false)
  const [store, setStore] = useState(null)
  const [role, setRole] = useState(null)
  const [allRestaurants, setAllRestaurants] = useState([])
  const [allSuppliers, setAllSuppliers] = useState([])
  const [appErr, setAppErr] = useState("")
  const [myId, setMyId] = useState(null)
  const [myOrders, setMyOrders] = useState([])
  const [loading, setLoading] = useState(false)


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
        console.log('allRestaurants', allRestaurants)
      }).catch((err) => console.log(err))
  }

  const getAllSuppliers = () => {
    if (!loggedin) {
      return
    }
    fetch(`${domain}/supplier/all`, {
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
    if (!loggedin) { return }
    if (role === "restaurant") { getAllSuppliers() }
    if (role === "supplier") { getAllRestaurants() }

  }

  const getMyOrders = () => {
    console.log('getting orders ...');

    if (!loggedin || myId === null) {
      return
    }

    console.log('getting orders with id ...');

    fetch(`${domain}/order/my-orders/${myId}`, {
      method: "GET",
      headers: { Token: JSON.parse(localStorage.getItem("login")).token },
    })
      .then((res) => {
        console.log('ordes', res)
        return res.json();
      })
      .then(result => {
        if (result === null) {
          return
        }
        setMyOrders(result);
      }).catch((err) => console.log(err))

  }




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
    setLoading(true)
    e.preventDefault()
    if (email == null || email == "" || password == null || password == "") {
      e.preventDefault();
      setAppErr("enter email and password")
      return setLoading(false)

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

        if (!result.userAccount) {
          setAppErr("wrong password or email")
          return setLoading(false)

        }

        localStorage.setItem('login', JSON.stringify({
          loggedin: true,
          token: result.token,
          role: result.role,
          myId: result.userAccount.find(e => e.Key === "_id").Value
        }))
        setLoading(false)
        setAppErr("")


        checkAuth()

      })
  }

  const logout = () => {
    localStorage.removeItem("login")
    setLoggedin(false)
    setMyId(null)
    setStore(null)
    setRole(null)
  }

  useEffect(() => {
    checkAuth()
    getRestaurantsOrSuppliers()
    getMyOrders()
  }, [])


  const Home = <div className="row text-center">
    <div className="col-12 mt-3 mb-3 mb-2 mt-2 text-center">
      <Link className="text-white" to="/register-supplier">
        <button className="col-12 col-md-5 mb-1 mt-1 btn btn-info text-white" >
          Register as Supplier
      </button>
      </Link>
      <div className="col-12 col-md-2" ></div>

      <Link className="text-white" to="/register-restaurant">
        <button className="col-12 col-md-5 mb-1 mt-1 btn btn-info text-white" >
          Register as Restaurant
      </button>
      </Link>
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
      {/* <header className="App-header">
        <h1>You're Welcome, Supplier Or Restaurant</h1>
        <h1 className="mt-5"><p style={{ fontSize: "8rem" }}>&#x290B; &#x290B; &#x290B; </p></h1>
      </header> */}
      <Nav
        logout={logout}
        loggedin={loggedin}
        role={role}
        myId={myId}
      />

      {/* {appErr !== "" ? loading ? (
        <div className="text-white bg-warning font-weight-bolder font-larger" >
          <h3 className="p-3">Wait ...</h3>
        </div>
      ) : (
          <div className="text-white bg-danger font-weight-bolder font-larger" >
            <h3 className="p-3">{appErr}</h3>
          </div>
        ) : ""
      } */}

      {loading &&
        <div className="text-white bg-warning font-weight-bolder font-larger" >
          <h3 className="p-3">Wait ...</h3>
        </div>
      }


      {appErr !== "" &&
        <div className="text-white bg-danger font-weight-bolder font-larger" >
          <h3 className="p-3">{appErr}</h3>
        </div>
      }

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

                  allSuppliers={allSuppliers}
                  getAllSuppliers={getAllSuppliers}
                  myOrders={myOrders}
                  getMyOrders={getMyOrders}

                />}
                {role === "supplier" && <SupplierUi
                  allRestaurants={allRestaurants}
                  getAllRestaurants={getAllRestaurants}
                  myOrders={myOrders}
                  getMyOrders={getMyOrders}
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
