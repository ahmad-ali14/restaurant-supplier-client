import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Supplier Or Restaurant</h1>
        <div className="row mt-3 mb-3">
          <button className="col-md-5 mr-2 btn btn-secondary text-white" > Register as Supplier </button>
          <button className="col-md-5 ml-2 btn btn-secondary text-white" > Register as Restaurant </button>
        </div>
        <div className="row text-center mt-2 mb-2"><h1> OR </h1></div>
        <div className="row text-center">
          <button className="col-12 ml-1 mr-2 btn btn-secondary text-white mt-3" > LOG IN </button>
        </div>
      </header>
    </div>
  );
}

export default App;
