import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./js/components/Form";
import List from "./js/components/List";

const App =() => (
    <>
    <div>
      <h2>Articles</h2>
      <List/>

    </div>
    <div>
      <h2>Add a new article</h2>
      <Form/>
    </div>
    </>
)


export default App;
