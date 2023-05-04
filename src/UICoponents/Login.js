import Style from "./LoginPage.module.css"
import { useRef, useState } from "react"
import TokenAPI from "../ContextAPI/TokenAPI"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
export default function LogInPage() {

    const [isLogin, SetIsLogin]=useState(true)
    const [Loading,SetLoding]=useState(false)

    const Token=useContext(TokenAPI)

    const history=useHistory()

    const getEmail=useRef()
    const getPassword=useRef()

    function CreateNewAcHandler(e){
        e.preventDefault()
        SetIsLogin(prevStae=>!prevStae)
    }

    async function SignupHandler(e){
        e.preventDefault()
        SetLoding(true)
       const Response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-Bn5PjUAaplAicPOLXy7tw2aCnLfXqZc", {
        method: "POST",
        body: JSON.stringify({
          email: getEmail.current.value,
          password: getPassword.current.value,
          returnSecreToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (Response.ok){
        alert("You Have Successfully Sign Up")
      }else{
        const ErrorResponse=await Response.json()
        alert(ErrorResponse.error.message)
      }
      SetLoding(false)
    }
    async function LoginHandler(e){
        e.preventDefault()

        SetLoding(true)
        const Response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-Bn5PjUAaplAicPOLXy7tw2aCnLfXqZc", {
        method: "POST",
        body: JSON.stringify({
          email: getEmail.current.value,
          password: getPassword.current.value,
          returnSecreToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(Response.ok){
        const SuccessResponse=await Response.json()
        Token.LogIn(SuccessResponse.idToken)
        history.replace("/products")
        SetLoding(false)
      }else{
        await Response.json()
        alert("Authentication Failed")
        SetLoding(false)
      }
    }

    

    return (
        <div className={Style.FormContainer}>
            <h2>{isLogin?"LogIn":"Sing Up"}</h2>
            {!Loading?<form onSubmit={isLogin?LoginHandler: SignupHandler}>
                <div className={Style.InputContainer}>
                    <label>Email</label>
                    <input type="email" required ref={getEmail}></input>
                </div >
                <div className={Style.InputContainer}>
                    <label>Password</label>
                    <input type="password" required ref={getPassword}></input>
                </div>

                <div className={Style.btnsContainer}>
                    <button>{isLogin?"LogIn":"SignUp"}</button>
                    <button onClick={CreateNewAcHandler} className={Style.NewACBtn}>{isLogin?"Create New Account":"Already Have Account"}</button>
                </div>
            </form>:
            <h2>Please Wait...</h2>
            }
        </div>
    )
} 