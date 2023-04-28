import React from "react"
import { useState } from "react"
import Style from "./ContactUs.module.css"
export default function ContactUs() {
    const [Name, SetName] = useState()
    const [email, Setemail] = useState()
    const [Phone, Setphone] = useState()

    function getName(event) {
        SetName(event.target.value)
    }

    function getEmail(event) {
        Setemail(event.target.value)
    }

    function getPhone(event) {
        Setphone(event.target.value)
    }

    async function SubmitForm(e) {
        e.preventDefault()
        const UserData = {
            Name: Name,
            Email: email,
            Phone: Phone
        }
        await fetch("https://react-moviesapp-7f47b-default-rtdb.firebaseio.com/UserData.json",{
            method:"POST",
            body:JSON.stringify(UserData),
            headers: {
                "content-type": "application/json",
              }
        })
        console.log("Done")

    }

    return (
        <form className={Style.form} onSubmit={SubmitForm}>
            <div className={Style.inputContainer}>
                <label>Name</label>
                <input value={Name} type="text" onChange={getName}></input>
            </div>
            <div className={Style.inputContainer}>
                <label>E-mail</label>
                <input value={email} type="email" onChange={getEmail}></input>
            </div>
            <div className={Style.inputContainer}>
                <label>Phone No</label>
                <input value={Phone} type="tel" onChange={getPhone}></input>
            </div>
            <button>SUBMIT</button>
        </form>

    )
}