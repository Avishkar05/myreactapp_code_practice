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




function App() {
  return (
    <div>
      <h1>Main Class</h1>
      <MyClass></MyClass>
      <Myinfo></Myinfo>
      <Variable></Variable>
      <State></State>
      <SetstateExample></SetstateExample>
      <Student name="Avishkar" course="Java" age="21" email="avishkar@gmail.com"></Student>
      <User_Info></User_Info>
      <MyFunction></MyFunction>
      <PropsDemo name="Avishkar" age="21"></PropsDemo>
    </div>
  );
}


export default App;
