import { useState } from "react"
import Form from "../Form/Form"

// export default function Home(){
//     const [clicked,setClicked]=useState(false)
//     const handleSubmit=()=>{
//         setClicked(true)
//     }
//     return(
//         <>
//         <h2>User Details Modal</h2>
//         <button onClick={handleSubmit}>Open Form</button>
//         {clicked ?(<>
//         <Form/>
//         </>):(<></>)}
//         </>
//     )
// }

export default function Home (){
    const [isOpen, setIsOpen] = useState(false);
    
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return (
      <div className="App">
        <h1>User Details Modal</h1>
        <button onClick={openModal} className="submit-button">Open Form</button>
        {isOpen && <Form closeModal={closeModal} />}
      </div>
    );
  };