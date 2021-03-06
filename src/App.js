import React from 'react';
import logo from './logo.svg';
import './App.css';

const dataList = [
  {'id': 1, 'name': 'Poliglotón', 'city': 'Santiago'},
  {'id': 2, 'name': 'Carlos', 'city': 'Santiago'},
  {'id': 3, 'name': 'Nicolás', 'city': 'Lima'},
  {'id': 4, 'name': 'José', 'city': 'Ciudad de México'}
];

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-6 container pt-5">
          <h3 className="text-left">Listado</h3>
          {
            dataList.map(data=>(
              <div key={data.id} style={{ 'border': '1px solid #eee' }}>
                <h4>{data.name}</h4>
                <p>{data.city}</p>
              </div>
            ))
          }
        </div>
        <div className="col-md-6 container pt-5">
          <div className="card form-group">
            <div className="card-body">
              <h3>Formulario</h3>
              <div class="form-group text-left">
                <label for="name">Email address</label>
                <input type="text" className="form-control mb-3" id="name" name="name" />
              </div>
              <div class="form-group text-left">
                <label for="city">Ciudad</label>
                <input type="text" className="form-control mb-3" id="city" name="city" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
