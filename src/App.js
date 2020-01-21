import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ColumnSize from './Layout/LayoutOne';
import TodoApp from './ToDo/ToDo'

function App() {
  return (
    <div className="App">
        {/* <ColumnSize /> */}
        <TodoApp /> 
    </div>
  );
}

export default App;
