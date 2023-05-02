import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Style from "./FeedBackForm.module.css"
import { useContext } from "react"
import ProductContextAPI from "../ContextAPI/ProductContext"

function FeedBackForm() {
    const [Name, setName] = useState("")
    const [City, setCity] = useState("")
    const [Date, setDate] = useState("2023-01-01")
    const [Feedback, setFeedback] = useState("")
    const [Photo, setPhoto] = useState("")

    const ProductList = useContext(ProductContextAPI)
    const UrlId = useParams()

    const productIndex = ProductList.Product.findIndex(product => product.id == UrlId.productId)


    function getName(e) {
        setName(e.target.value)
    }
    function getCity(e) {
        setCity(e.target.value)
    }
    function getDate(e) {
        setDate(e.target.value)
    }
    function getFeedBack(e) {
        setFeedback(e.target.value)
    }
    function getPhoto(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPhoto(reader.result)
        }
    }
    function SubmitFormHandler(e) {
        e.preventDefault()
        const UserFeedBack = {
            id: Math.random(),
            Name: Name,
            City: City,
            Date: Date,
            Feedback: Feedback,
            Photo: Photo
        }
        let Item=ProductList.Product[productIndex]
        const UpdatedItem={...Item,review:[...Item.review,UserFeedBack]}
        ProductList.Product[productIndex]=UpdatedItem
        ProductList.AddProduct(ProductList.Product)
        
    }


    return (
        <div className={Style.formContainer}>
            <h2>Feedback</h2>
            <form onSubmit={SubmitFormHandler}>
                <div className={Style.inputContainer}>
                    <label>Name</label>
                    <input value={Name} onChange={getName} type="text"></input>
                </div>
                <div className={Style.DateCity}>
                    <div>
                        <label>City</label>
                        <input value={City} onChange={getCity} type="text"></input>
                    </div>
                    <div>
                        <label>Date</label>
                        <input value={Date} onChange={getDate} type="date"></input>
                    </div>
                </div>
                <div className={Style.inputContainer}>
                    <label>Feedback</label>
                    <textarea value={Feedback} onChange={getFeedBack}></textarea>
                </div>
                <div className={Style.inputPics}>
                    <label>Share Your Photos</label>
                    <input onChange={getPhoto} type="file" accept="image/png, image/jpeg"></input>
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default FeedBackForm;