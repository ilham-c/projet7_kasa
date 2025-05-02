import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./ErrorPage.css";





function ErrorPage() {
    return (
      
      <div className="error_container">
        <h1 className="error_number">404</h1>
        <p className="error_text">Oups! La page que vous demandez n'hexiste pas.</p>
        <Link to="/" className="error_link">Retourner sur la page d'accueil</Link>
      </div>
      
    )
  }
  
  export default ErrorPage