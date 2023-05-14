// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { Container ,Row, Col } from 'reactstrap';
import { ToastContainer, } from "react-toastify"; 
import Jumbotron from './components/Jumbotron';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';

function App(){

  // const btnHandle=()=>
  // {
  //   toast.success("done", {
  //     position:"top-center"
  //   })
  // }

  return (
    <div>
    
      <Router>
        <ToastContainer />
        <Header />
        <Container >
          
          <Row>
            <Col md={4}>
                <Menu/>
            </Col>
            <Col md={8}>
            <Routes>
              <Route path="/" element={<Jumbotron />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<AllCourses/>} />
          </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
