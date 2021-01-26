import { Component } from 'react';
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header'
import Shelf from './Components/Shelf';
import data from './data' //imports data.js

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section key="main-content">
          <BookList/>
          <Shelf/>
        </section>
      </div>
    );
  }
}

export default App;
