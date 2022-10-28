import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Heder() {


  const [modal, setModal] = useState(false);
  const [user, setUser] = useState("");
  const [btnMadal, setBtnMadal] = useState(false);
  const [userName, setUserName] = useState("");
  
  
  const userNameHandler = () => {
    if (userName.length < 5){
      toast.error("Enter your full name!")
    }
  }

  const showMadal = () => {
    setModal(!modal)
    setBtnMadal(!btnMadal)
  }

  const sing_upHendler = () => {
    setModal(!modal)
    toast.success("This is Success!");
  }


  AOS.init();
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
            </ul>
            {/* ========= Button trigger modal ================*/}
            <div className="text-end">
              {btnMadal ?
               <button className="btn btn-info"> {userName} </button>
               :
               <button className="btn btn-info" onClick={showMadal}>Sing Up</button>
              
              }
      
              </div>
            {/* =========== Modal ============ */}
      {modal && (
       <div className="madal_sing_up" data-aos="fade-down">
        <form className="form_sing_up">
          <input type="text" placeholder="Name...." onChange={(e) => setUserName(e.target.value)} onBlur={userNameHandler}
          />
          <input type="email" placeholder="Email...." onChange={(e) => setUser(e.target.value)}  />
          <button className="btn btn-info text-white fs-4" onClick={sing_upHendler}>Send</button>
        </form>
       </div>
       
      )}
             {/* ========== End Modal ========== */} 

          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
}

export default Heder;