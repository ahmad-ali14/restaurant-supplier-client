import React from 'react'

const Nav = ({ logout, loggedin, role, myId }) => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <i class="material-icons">Restaurant Supplier Service </i>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="nav navbar-nav text-center">

                        <i className="material-icons text-white ml-5">You're a {role} , Your Id: {myId}</i>


                    </ul>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="http://ahmad-ali.co.uk/" target="_blank" > My Portfolio
                    <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active ml-1">
                            {loggedin &&
                                <div>
                                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                                </div>
                            }

                        </li>
                    </ul>


                </div>
            </div>
        </nav>)

}


export default Nav