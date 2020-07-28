import React from 'react';

const RestaurantUi = ({ allSuppliers, getAllSuppliers, myOrders, getMyOrders }) => {

    console.log("allSuppliers", allSuppliers)

    if (allSuppliers.length === 0) {
        getAllSuppliers()
    }

    console.log("my oreders inside ", myOrders)


    if (myOrders.length === 0) {
        getMyOrders()
    }

    return (
        <div className="row text-center p-5">
            <h1 className="col-12 mb-5 mt-5">Restaurant UI</h1>
            <hr />
            <h1 className="col-12 mb-1 mt-5"> Your Orders</h1>
            <div className="col-12 table-responsive">
                <table className="table table-bordered table-sm table-striped m-10px" >
                    <thead>
                        <tr>
                            <th scope="col" width="7%">#</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Supplier</th>
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
                                                < p >
                                                    <span className="text-danger">from: {d.from} </span>
                                                    <span className="text-info"> :: </span>
                                                    <span className="text-black"> {d.message} </span>
                                                </p>
                                            );
                                        })}
                                    </td>

                                </tr>
                            )

                        })

                        }


                        <tr>
                            <td colspan="7"><button className="btn btn-info text-white mt-2 mb-2" >Add New Order</button></td>
                        </tr>
                    </tbody>


                </table>
            </div>


            <hr />
            <h1 className="col-12 mb-1 mt-5">Nearby Suppliers</h1>
            <div className="col-12 table-responsive">
                <table className="table table-bordered table-sm table-striped m-10px" >
                    <thead>
                        <tr>
                            <th scope="col" width="7%">#</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Products</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allSuppliers && allSuppliers.map((r, i) => {

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

                                    <td>
                                        {r.products.map((d, i) => {
                                            return (

                                                <p>
                                                    <span className="text-danger">{d.productName} </span>
                                                    <span className="text-info"> :: </span>
                                                    <span className="text-black"> {d.productPrice} £ </span>
                                                </p>
                                            )
                                        })}
                                    </td>

                                </tr>
                            )

                        })

                        }



                        {/* <tr>
                            <td colspan="7"><button className="btn btn-info text-white mt-2 mb-2" >Add New Row</button></td>
                        </tr> */}
                    </tbody>


                </table>
            </div>


        </div >
    )
}

export default RestaurantUi;