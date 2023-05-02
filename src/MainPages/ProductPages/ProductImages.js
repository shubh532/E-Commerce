import Style from "./ProductImages.module.css"

function ProductImages(props) {
    return (
        <div className={Style.MainConatiner}>
                <div className={Style.imgsContainer}>
                    <div className={Style.reviewImgContainer}>
                        <img src={props.Productimg.imageUrl} alt="About Us Img"></img>
                        <img src={props.Productimg.imageUrl} alt="About Us Img"></img>
                        <img src={props.Productimg.imageUrl} alt="About Us Img"></img>
                        <img src={props.Productimg.imageUrl} alt="About Us Img"></img>
                        <img src={props.Productimg.imageUrl} alt="About Us Img"></img>
                    </div>
                    <div className={Style.MainImg}>
                        <img src={props.Productimg.imageUrl} alt="About Us Img"></img>
                    </div>
                </div>
                <div className={Style.buttons}>
                    <button className={Style.button1}>Buy Now</button>
                    <button className={Style.button2}>Add To Cart</button>
                </div>
        </div>
    )
}

export default ProductImages;