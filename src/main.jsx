// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(<p>Why are you doing react ?</p>,
<ul>
  <li>Money</li>
  <li>Skill</li>
  <li>Freedom of</li>
</ul>)

