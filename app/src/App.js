import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Bawdy from './components/Bawdy.js'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header/>
        <Bawdy/>
        <Footer/>

        {/* <div id="Comp2">

          COMP2

        </div>

        <div id="Comp3">

          COMP3

        </div> */}

      </div>
    );
  }
}

export default App;

///HERE
// var x = 0;
// if (x > -3) {
//   return "YAY"
// }

// for (var i=0, i<10, i++) {

// }

// var str = "this is a string";

// var arr = ['bob','mike','criag'];

// function testfunc(in) {
//   return in+1
// }

// testfunc(5)

// var ob = {
//   key1: "I am key1",
//   key2: function getName(name) {
//       return name;
//   }
// }

// newob = ob;

// newob.key1 = "changed key"



// craig = arr[2]
// last = arr.pop()
// last = arr[arr.length-1]

// ob.key2("Toren")
