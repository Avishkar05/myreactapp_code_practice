import logo from './logo.svg';
import './App.css';
import MyClass from './MyClass';  
import Myinfo from './Myinfo';
import Variable from './Variable';
import State from './State';
import SetstateExample from './SetstateExample';
import Student from './Student';
import User_Info from './User_Info.jsx';
import MyFunction from './MyFunction';
import PropsDemo from './PropsDemo';
import Mountphase from './Mountphase'; 
import ShouldComponentUpdateExample from './ShouldComponentUpdateExample.jsx';
import ComponentDidUpdate from './ComponentDidUpdate.jsx';
import { Component, useState } from 'react';
import ComponentWillUnmount from './ComponentWillUnmount';
import UseEffectMount from './UseEffectMount.jsx';
import UseEffectUpdate from './UseEffectUpdate.jsx';
import DependenciesArray from './DependenciesArray.jsx';
import UseEffectUnmount from './UseEffectUnmount.jsx';
import FormHandling from './FormHandling.jsx';
import FormValidition from './FormValidition.jsx';
import Home from './Home.jsx';
import Aboutus from './Aboutus.jsx';
import Contactus from './Contactus.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  let [isvisible,setisvisible]=useState(true)

  return (
    <div>
      <h1>Main Class</h1>
      {/* <MyClass></MyClass> */}
      {/* <Myinfo></Myinfo>
      <Variable></Variable>
      <State></State>
      <SetstateExample></SetstateExample>
      <Student name="Avishkar" course="Java" age="21" email="avishkar@gmail.com"></Student>
      <User_Info></User_Info>
      <MyFunction></MyFunction>
      <PropsDemo name="Avishkar" age="21"></PropsDemo> */}
      {/* <Mountphase></Mountphase> */}
      {/* <ShouldComponentUpdateExample></ShouldComponentUpdateExample> */}
      {/* <ComponentDidUpdate></ComponentDidUpdate> */}
      {/* <ComponentWillUnmount></ComponentWillUnmount> */}
      {/* {
        isvisible?
        <ComponentWillUnmount></ComponentWillUnmount>:null
      } */}
      {/* <button onClick={()=>{setisvisible(false)}}>update isvisible</button><br></br>
      enter city :<input type="text"></input> */}
      {/* <UseEffectMount></UseEffectMount> */}
      {/* <UseEffectUpdate></UseEffectUpdate> */}
      {/* <DependenciesArray></DependenciesArray> */}
      {/* {isvisible?<UseEffectUnmount></UseEffectUnmount>:null}
      <button onClick={()=>{setisvisible(false)}}>click here to set invisible</button> */}
      {/* <FormHandling></FormHandling> */}
      {/* <FormValidition></FormValidition> */}
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<Aboutus></Aboutus>}></Route>
          <Route path='/contact' element={<Contactus></Contactus>}></Route>
        </Routes>
      </BrowserRouter> 
    </div> 
  );
}


export default App;
