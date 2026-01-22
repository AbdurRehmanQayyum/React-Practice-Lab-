// // import { StrictMode } from 'react'
import { createRoot } from "react-dom/client"
import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))


// function MainContent(){
//   return (
//     <>
//     <h1>React Is Great</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur rerum asperiores ullam consequatur sed, necessitatibus placeat voluptas blanditiis dolor?</p>
//     </>
//   );
// }

// function MyAwesomeNavbar() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           MyAwesomeNavbar
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarExample"
//           aria-controls="navbarExample"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarExample">
//           <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//             <li className="nav-item">
//               <a className="nav-link active" href="#">
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Link
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link disabled">Disabled</a>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="#">Action</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><a className="dropdown-item" href="#">Something else</a></li>
//               </ul>
//             </li>
//           </ul>

//           <form className="d-flex">
//             <input className="form-control me-2" placeholder="Search" />
//             <button className="btn btn-outline-light">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// root.render(
//   <div>
//     <MyAwesomeNavbar />
//     <MainContent />
//   </div>
// )


const root = createRoot(document.getElementById("root"))

root.render(
  <Page />
)


function Page () {
  return (
    <ol>
      <li>This is good</li>
      <li>React is Awesome</li>
    </ol>
  )
}