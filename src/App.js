import './App.css';
import ClassComp from './ClassComp';
import LifeCycle from './LifeCycle';
import MultiCounterApp from './Demo';
import ExampleComponent from './Demo'
import Function from './Function';
import UseEffectComp from './component/UseEffectComp';
import UserList from './UserList';
import Demo from './Demo';
import FormHandeling from './component/FormHandeling';
import HandsonSecond from './Handsons/HandsonSecond';
import UseRefHook from './component/UseRefHook';
import ControlledComp from './component/ControlledComp';
import UncontrolledComp from './component/UncontrolledComp';
import Routing from './Routing';


const App=()=> {

  const users= [
    {id:1, name:'name1',email:'abc@gmail.com'},
    {id:2, name:'name2',email:'abcd@gmail.com'},
    {id:3, name:'name3',email:'abcdf@gmail.com'}
  ]

  return (
    <div className="App">
        <Routing/>
      {/* <ControlledComp/> */}
      {/* <UncontrolledComp/> */}
      {/* <UseRefHook/> */}
{/* <HandsonSecond/> */}
      {/* <FormHandeling/> */}
      {/* <UserList users={[users]} /> */}
      {/* <Demo/> */}
{/* 
      <h1>Hello World!</h1>
      <div className='react'>
        Namaste React_/\_.
      </div>
      <Demo /> */}
    {/* <ClassComp/> */}
    {/* <ExampleComponent/> */}
    {/* <LifeCycle/> */}
    {/* <Function/> */}
    {/* <UseEffectComp/> */}
    </div>
  );
}
export default App;

