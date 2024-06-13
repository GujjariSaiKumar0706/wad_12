import { Link } from "react-router-dom";

function Head(){

    return(
      <div className="one">

      


        <ul className="nav  justify-content-end">
       
  <li className="nav-item">
    <Link className="nav-link "  to=" ">
        About
        </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link "  to="signup">
        Register
        </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link "  to="signin">
        Login
        </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link "  to="contact">
        Contact
        </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-secondary">
        22071A0523
        </Link>
  </li>
  
  
</ul>



</div>




    )
}

export default Head;