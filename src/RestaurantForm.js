import React, { useState } from 'react';
import { domain } from './config'

const RestaurantForm = ({ store, checkAuth }) => {
    const [restaurant, setRestaurant] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
        role: "restaurant",
    })



    const changeRestaurantDetais = (e) => {
        let detail = restaurant[e.target.name] = e.target.value;
        setRestaurant({
            ...restaurant,
            detail
        })
    }

    const submitNewRestaurant = (e) => {
        //e.preventDefault();
        //console.log(restaurant)

        fetch(`${domain}/restaurant/new`, {
            method: "POST",
            // headers: { Token: JSON.parse(localStorage.getItem("login")).token },
            body: JSON.stringify(restaurant)
        })
            .then((res) => { return res.json(); })
            .then(result => {
                console.log(result);
                // console.log('allRestaurants', allRstaurants)
            }).catch((err) => console.log(err))
    }


    return (
        <div className="p-5">
            <h1 className="mt-5 mb-5">Restaurant Registeration Form</h1>
            <form onSubmit={submitNewRestaurant} >
                <div className="form-group row">
                    <label for="exampleInputEmail1" className="col-12 col-md-3">Email</label>
                    <input type="email" className="form-control col-12 col-md-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your email"
                        name="email" onChange={changeRestaurantDetais} />
                </div>

                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Password</label>
                    <input type="password" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="Password"
                        name="password" onChange={changeRestaurantDetais} />
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Name</label>
                    <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="eg. Flame London"
                        name="name" onChange={changeRestaurantDetais}
                    />
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Address</label>
                    <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="full addres with postcode"
                        name="address" onChange={changeRestaurantDetais} />
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Phone</label>
                    <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="full number with country code"
                        name="phone" onChange={changeRestaurantDetais} />
                </div>

                <hr className="mt-3" />
                <button type="submit" className="btn btn-info mb-5">Submit a New Restaurant</button>
            </form>
        </div>
    )
}

export default RestaurantForm;