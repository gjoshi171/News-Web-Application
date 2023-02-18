
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

//let name = "Gaurav";
function App() {
 return(
 <>
 <Navbar title= "NewsWebApp"/>

 <div className='container my-8'>
    
 <Form heading ="Convert to upperCase or lowerCase"/>
 </div>

</>
 );
}
 
export default App;
