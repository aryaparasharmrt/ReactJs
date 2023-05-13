import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AllCourses from './components/AllCourses';
import Course from './components/Course';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify"; 
import Allcourses from './components/AllCourses';

function App(){

  const btnHandle=()=>
  {
    toast.success("done", {
      position:"top-center"
    })
  }

  return (
    <div className='text-center'>
    
      <ToastContainer />
      <Header name="Arjun" title="1"/>
        <h1>This is My React Project </h1>
      <Header name="Arpit" title="2"/>
        <h2>One Way</h2>
      <Button color='warning' size='lg' onClick={btnHandle}>First React Button</Button> 
      <Allcourses />
      
    </div>
  );
}

export default App;
