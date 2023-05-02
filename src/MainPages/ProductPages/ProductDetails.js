import React from 'react'
import { useParams } from 'react-router-dom'
import Style from "./ProductDetails.module.css"
import ProductImages from "./ProductImages"
import ProductInfo from "./ProductInfo"
import Reviews from "./Reviews"
import FeedBackForm from '../../UICoponents/FeedBackForm'
import { useContext } from 'react'
import ProductContextAPI from '../../ContextAPI/ProductContext'


export default function ProductDetails() {
    const urlId = useParams()
    const ProductsList = useContext(ProductContextAPI)

    const Product = ProductsList.Product.find((product) => product.id == urlId.productId) //Can Not use triple Comparison Operator coz one Num and Second is String
    // console.log(typeof Product.id ) is num 
    // console.log(typeof  urlId.productId) is String
    return (
        <React.Fragment>
            <div className={Style.Container}>
                <div className={Style.ProductImges}>
                    <ProductImages Productimg={Product} />
                </div >
                <div className={Style.ProductInfo}>
                    <ProductInfo Product={Product} />
                    <Reviews reviews={Product.review} />
                    <FeedBackForm />

                </div>
            </div>

        </React.Fragment>

    )

}