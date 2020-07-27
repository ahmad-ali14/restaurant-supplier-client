import React from 'react';

const RestaurantUi = () => {

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

                        <tr>
                            <th scope="row" >1</th>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>



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

                        <tr>
                            <th scope="row" >1</th>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>



                        <tr>
                            <td colspan="7"><button className="btn btn-info text-white mt-2 mb-2" >Add New Row</button></td>
                        </tr>
                    </tbody>


                </table>
            </div>


        </div>
    )
}

export default RestaurantUi;