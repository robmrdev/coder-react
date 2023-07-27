import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const LogInButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [verify, setVerify] = useState(false);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const validateUser = (e) => {
        e.preventDefault();

        if(user==="user" && pass==="password"){
            setVerify(true);
            handleClose();
        }else{
            setUser("Not Found")
            setPass("Not Found")
        }
    }

    const unvalidateUser = () => {
        setVerify(false)
    }

    return (
        <>
            {verify ? <strong onClick={unvalidateUser}>Log out</strong> : <strong onClick={handleShow}>Log in or sign up</strong>}

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form  onSubmit={validateUser}>
                        <label htmlFor="user">User</label>
                        <input type="text" id="user" onChange={(e)=> setUser(e.target.value)} value={user}/>

                        <label htmlFor="pass">Password</label>
                        <input type="text" id="pass" onChange={(e)=> setPass(e.target.value)} value={pass}/>

                        <button>Log In</button>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};


export default LogInButton;
