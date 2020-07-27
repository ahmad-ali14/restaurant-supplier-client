import React, { useState } from 'react';

const SupplierForm = () => {

    const [supplier, setSupplier] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
        role: "supplier",
    })

    const [products, setProducts] = useState([{
        productName: "pr1",
        productPrice: "2"
    }])

    const addNewProduct = (e) => {
        console.log(e);

        e.preventDefault()
        setProducts([...products, {
            productName: "",
            productPrice: ""
        }])
    }

    const changeProductValues = (e, i, pr) => {
        let prr = products[i];
        prr[pr] = e.target.value
        setProducts([...products]);
    }

    const changeSupplierDetais = (e) => {
        let detail = supplier[e.target.name] = e.target.value;
        setSupplier({
            ...supplier,
            detail
        })
    }

    const submitNewSupplier = (e) => {
        e.preventDefault()
        console.log(products);
        console.log(supplier);


    }

    return (
        <div className="p-5">
            <h1 className="mt-5 mb-5">Supplier Registeration Form</h1>
            <form onSubmit={submitNewSupplier}>
                <div className="form-group row">
                    <label for="exampleInputEmail1" className="col-12 col-md-3">Email</label>
                    <input type="email" className="form-control col-12 col-md-8" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your email"
                        name="email" onChange={changeSupplierDetais} />
                </div>

                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Password</label>
                    <input type="password" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="Password" name="password" onChange={changeSupplierDetais} />
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Name</label>
                    <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="eg. Froshka Vegs" name="name" onChange={changeSupplierDetais} />
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Address</label>
                    <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="full addres with postcode"
                        name="address" onChange={changeSupplierDetais} />
                </div>
                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Phone</label>
                    <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="full number with country code"
                        name="phone" onChange={changeSupplierDetais} />
                </div>

                <div className="form-group row">
                    <label for="exampleInputPassword1" className="col-12 col-md-3">Services</label>
                    {/* <input type="text" className="form-control col-12 col-md-8" id="exampleInputPassword1" placeholder="full number with country code" /> */}
                    <div className="col-12 col-md-8 table-responsive">
                        <table className="table table-bordered table-sm table-striped m-10px" >
                            <thead>
                                <tr>
                                    <th scope="col" width="7%">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price(£)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((pr, i) => {
                                    return (
                                        <tr>
                                            <th scope="row" >{i + 1}</th>
                                            <td><input placeholder="product 1 Name" name="productName" value={pr.productName} onChange={(e) => { changeProductValues(e, i, "productName") }} />
                                            </td>
                                            <td>
                                                <input placeholder="product 1 Price" name="productPrice" value={pr.productPrice} onChange={(e) => { changeProductValues(e, i, "productPrice") }} />
                                            </td>
                                        </tr>
                                    );
                                })

                                }
                                <tr>
                                    <td colspan="3"><button className="btn btn-info text-white mt-2 mb-2" onClick={addNewProduct} >Add New Row</button></td>
                                </tr>
                            </tbody>


                        </table>
                    </div>
                </div>

                <hr className="mt-5" />

                <button type="submit" className="btn btn-info mb-5">Submit a New Supplier</button>
            </form>
        </div>
    )
}

export default SupplierForm;