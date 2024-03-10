// import { useState } from "react"

// export default function Form(){
//     const [phone,setPhone]=useState(0)
//     const valid=(phone)=>{
//         if (phone>999999999 && phone>0){ 
//             console.log("valid")
//         }else{
//             alert("invalid phone no")
//         }
//     }
//     const handlePhone=(e)=>{
//         setPhone(e.target.value)
//     }
//     console.log(phone)
//     return(
//         <>
//         <div>
//             <h3>Fill Details</h3>
//             <div>
//             <form>
//                 <div>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 required
//                 className="input-field"
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="username">Email Adress:</label>
//                 <input
//                 type="email"
//                 id="username"
//                 name="username"
//                 required
//                 className="input-field"
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="username">Phone Number:</label>
//                 <input
//                 type="tel"
//                 id="username"
//                 name="username"
//                 value={phone}
//                 onChange={handlePhone}
//                 required
//                 className="input-field"
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="username">Date of Birth:</label>
//                 <input
//                 type="date"
//                 id="username"
//                 name="username"
//                 required
//                 className="input-field"
//                 />
//                 </div>
//                 <button onSubmit={valid} >Sumbit</button>
//             </form>
//             </div>
//         </div>
//         </>
//     )
// }
import "./Form.css"

const Form = ({ closeModal }) => {

    // Function to validate email
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    // Function to validate phone number
    const validatePhone = (phone) => {
      return phone.length === 10 && !isNaN(phone);
    };
  
    // Function to validate date of birth
    const validateDOB = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      return birthDate < today;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const email = formData.get('email');
      const phone = formData.get('phone');
      const dob = formData.get('dob');
  
      if (!validateEmail(email)) {
        alert('Invalid email. Please check your email address.');
        return;
      }
  
      if (!validatePhone(phone)) {
        alert('Invalid phone number. Please enter a 10-digit phone number.');
        return;
      }
  
      if (!validateDOB(dob)) {
        alert('Invalid date of birth. Date of birth cannot be in the future.');
        return;
      }
  
      closeModal(true);
    };
  
    const handleOutsideClick = (event) => {
      if (event.target.className === "modal") {
        closeModal();
      }
    };
  
    return (
      <div className="modal" onClick={handleOutsideClick}>
        <div className="modal-content">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  

  
  export default Form;