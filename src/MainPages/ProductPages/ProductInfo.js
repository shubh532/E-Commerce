import Style from "./ProductInfo.module.css"
import SizeImg from "../../Media/tshirt.png"
import discountTag from "../../Media/discount-tag.png"
import StarRating from "../../UICoponents/StarRating"
export default function ProductInfo(props) {

    return (
        <div className={Style.InfoContainer}>
            <h2>{props.Product.title}</h2>
            <div className={Style.priceInfo}>
                <span className={Style.SellingPrice}>&#8377;{props.Product.price}</span>
                <span className={Style.MRPprice}> &#8377;1499</span>
                <span className={Style.priceOff}>73% Off</span>
            </div>
            <div className={Style.rating}>
                <StarRating/>
                <span className={Style.ReviewCount}>12,957 rating and 1,352 reviews</span>
                <span className={Style.Assurance}>100% Assured</span>
            </div>
            <div className={Style.SizeData}>
                <span>Size</span>
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
                <div className={Style.SizeChart}>
                    <span>Size Chart</span>
                    <img src={SizeImg} alt="Sizeimg"></img>
                </div>
            </div>
            <div className={Style.offersClass}>
                <h3>Available Offers</h3>
                <p><img src={discountTag} alt="img" /> Buy this product and Get Extra ₹50 Off on Select Fans <span>T&C</span></p>
                <p><img src={discountTag} alt="img" />Bank Offer5% Cashback on Flipkart Axis Bank Card <span>T&C</span>
                </p>
                <p><img src={discountTag} alt="img" />Partner OfferEMI Offer: Sign-up for Flipkart Pay Later & Get ₹500* Flipkart Gift Voucher on EMI Txn  <span> Know More</span>
                </p>
                <p><img src={discountTag} alt="img" />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* on Full swipe <span>Know More</span>
                </p>
            </div>
        </div>
    )
}