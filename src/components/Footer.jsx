import { BrowserRouter, Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <ul>
                <li><Link to="card"><i class="fa-regular fa-comment"></i></Link></li>
                <li><Link to="chat"><i class="fa-regular fa-message"></i></Link></li>
                <li><Link to="chat"><i class="fa-regular fa-user"></i></Link></li>
            </ul>
        </footer>
    )
}


export default Footer;