import './App.css';
// import {useState} from 'react';
import Navbar from './Components/Navbar.component';
import Homepage from './Components/Home-page.component';
import Footer from './Components/Footer.component';
import {Switch, Route} from 'react-router-dom';
import Createpage from './Components/Create-page.component';
import BlogDetailPage from './Components/Blog-detail.component';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr className = 'line'></hr>
      <Switch>
        <Route exact path = '/'>
          <Homepage></Homepage>

        </Route>
        <Route path = '/create'>
          <Createpage></Createpage>
        </Route>
        <Route path = '/blogs/:id'>
          <BlogDetailPage></BlogDetailPage>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
