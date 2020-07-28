import React from 'react';

const SupplierUi = ({ allRestaurants, getAllRestaurants, myOrders, getMyOrders }) => {

    console.log("allrestaurants", allRestaurants)

    if (allRestaurants.length === 0) {
        getAllRestaurants()
    }

    console.log("my oreders inside ", myOrders)


    if (myOrders.length === 0) {
        getMyOrders()
    }

    return (
        <div className="row text-center p-5">
            <h1 className="col-12 mb-5 mt-5">Supplier UI</h1>
            <hr />
            <h1 className="col-12 mb-1 mt-5"> Your Orders</h1>
            <div className="col-12 table-responsive">
                <table className="table table-bordered table-sm table-striped m-10px" >
                    <thead>
                        <tr>
                            <th scope="col" width="7%">#</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">To Restaurant</th>
                            <th scope="col">Value(£)</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Comments</th>


                        </tr>
                    </thead>
                    <tbody>

                        {myOrders && myOrders.map((r, i) => {

                            return (
                                < tr >
                                    <th scope="row" >{i + 1}</th>
                                    <td>{r._id}</td>
                                    <td>{r.restaurantId}</td>
                                    <td>{r.value}</td>
                                    <td>{r.status}</td>
                                    <td>
                                        <button className="btn btn-warning mr-1">Action1</button>
                                        <button className="btn btn-warning ml-1">Action2</button>
                                    </td>

                                    <td>
                                        {r.comments.map((d, i) => {
                                            return (

                                                <p>
                                                    <span className="text-danger">from: {d.from} </span>
                                                    <span className="text-info"> :: </span>
                                                    <span className="text-black"> {d.message} </span>
                                                </p>
                                            )
                                        })}
                                    </td>

                                </tr>
                            )

                        })

                        }


                        {/* 
                        <tr>
                            <td colSpan="7"><button className="btn btn-info text-white mt-2 mb-2" >Add New Order</button></td>
                        </tr> */}
                    </tbody>


                </table>
            </div>


            <hr />
            <h1 className="col-12 mb-1 mt-5">Nearby Restaurants</h1>
            <div className="col-12 table-responsive">
                <table className="table table-bordered table-sm table-striped m-10px" >
                    <thead>
                        <tr>
                            <th scope="col" width="7%">#</th>
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRestaurants && allRestaurants.map((r, i) => {

                            return (
                                < tr >
                                    <th scope="row" >{i + 1}</th>
                                    <td>{r.name}</td>
                                    <td>{r.address}</td>
                                    <td>{r.phone}</td>
                                    <td>{r.email}</td>
                                    <td>
                                        <button className="btn btn-warning mr-1">Action1</button>
                                        <button className="btn btn-warning ml-1">Action2</button>
                                    </td>

                                </tr>
                            )

                        })

                        }


                        {/* 
                        <tr>
                            <td colSpan="6"><button className="btn btn-info text-white mt-2 mb-2" >Add New Row</button></td>
                        </tr> */}
                    </tbody>


                </table>
            </div>


        </div >
    )
}

export default SupplierUi;