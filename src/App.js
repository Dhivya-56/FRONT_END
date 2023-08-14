import logo from './logo.svg';
import './App.css';
import Increment from './Increment';
import Input from './Input';
import ColorButton from './ColorButton';
import Threetask from './Threetask';
function App() {
  return (
   <div>
{/* <Threetask/> */}
    <Increment/>
    <hr/>
    <Input/>
    <hr/>
    <ColorButton/> 
   </div>
  );
}

export default App;
