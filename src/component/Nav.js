import React from "react"
import "./css/nav.css"
import svglogo from "./images/svglogo.png"
import th from "./images/th.jpg"
import { Link } from "react-router-dom"
import Form from "./Form"
function Nav(){
    return(
     <>
     
      
             <div className="nav-container">
                
                {/* <img src={svglogo} alt="insta clone" style={{width:'60px',height:"50px"}}  id="logo"/> <h1 id="h1">InstaClone</h1> */}
                <Link to="/instaclone"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqhjhY1ovJJTtewPpf3yYMJLgwnjMAKtwdj-YjY6H5g&usqp=CAU&ec=48600112" alt="logo" style={{width:"200px"}} /></Link>
                {/* <Link to="newpost"  element={<Form/>}>  <img id="camera" src={th} alt="camera_icon" style={{width:'90px',float:'right'}} /></Link> */}
                <Link to="newpost"  element={<Form/>}>  <img id="camera" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8998qxOtpGpVFrQq1Ykd3FoMoMbGjxcTs82vXHYnapQ&usqp=CAU&ec=48600112" alt="camera_icon" style={{width:'90px',float:'right'}} /></Link>
                
                
             </div>
             <hr style={{width:"1100px"}}></hr>
          
    </>
    )
}


export default Nav