import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../services/config"

const TestForm = () => {
    const [name,setName] =useState("")
    const [lastName, setLastName] = useState ("")
    const [phone, setPhone] = useState("")

    const formHandler = (event) => {
        event.preventDefault();

        addDoc(collection(db, "users"), {
            name:name,
            lastName:lastName,
            phone:phone
        })

        setName("")
        setLastName("")
        setPhone("")
    }

  return (
    <form onSubmit={formHandler}>
        <h2>Test Form</h2>
        <label htmlFor="name"> Name </label>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

        <label htmlFor="lastName"> Last name </label>
        <input type="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>

        <label htmlFor="phone"> Phone Number </label>
        <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>

        <button type="submit"> Send </button>
    </form>
  )
}

export default TestForm