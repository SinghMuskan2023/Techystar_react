 import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
 import Header from "./components/Header";
 import Home from "./components/Home";
 import Contact from "./components/Contact"

 import "./styles/App.scss";
  import "./styles/header.scss";
import "./styles/home.scss";
 
 import "./styles/contact.scss";

  
 
 
 function App(){

    return(
 <Router>
     <Header/> 
<Routes>
  <Route path="/" element={<Home/>}/> 
 </Routes>
  <Contact/>
    
 </Router>



    );
}
export default  App





// import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
//   import Header from "./components/Header";
//  //import Home from "./components/Home";
//   import Footer from "./components/Footer";
// //  import "./styles/App.scss";
// //   import "./styles/header.scss";
// // import "./styles/home.scss";
// //   import "./styles/footer.scss";
// //   const Footer = () => {
// //    return (
// //    <>
// //  <div >
// //      <h1>TechyStar</h1>
// //      <p>@all right reserved</p>
// //  </div>
// //  <div>
// //      <h5>Follow Us</h5>
     
// //  </div>
 
// //  </>
 
// //    );
// //  }
 
//  function App(){

//     return(
//  <Router>
//       <Header/>  
// <Routes>
//   <Route path="/" element={<Footer/>}/> 
//  </Routes>
//     <Footer/>   
//  </Router>



//     );
// }
// export default  App