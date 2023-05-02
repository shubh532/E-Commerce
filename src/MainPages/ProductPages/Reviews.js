import Style from "./Reviews.module.css"
import StarRating from "../../UICoponents/StarRating"
export default function Reviews(props) {
    let Reviews = null
    if (props.reviews.length === 0) {
        Reviews = <h2>No Reviews</h2>
    } else {
        Reviews = props.reviews.map((item) => {
            return (
                <div key={item.id} className={Style.userreviews}>
                    <div>
                        <StarRating />
                        <p>{item.Feedback}</p>
                    </div>
                    {item.Photo &&<img src={item.Photo} alt="Img"></img>}
                    <h4>{item.Name}, {item.City}, {item.Date}</h4>
                </div>
            )
        }
        )
    }

    return (
        <div className={Style.ReviewsContainer}>
            <div className={Style.ReviewsHead}>
                <h2>Costemer Reviews & Rating</h2>
                <div className={Style.rating}>
                    <div><StarRating /></div>
                    <span className={Style.ReviewCount}>12,957 rating and 1,352 reviews</span>
                </div>
            </div>
            {Reviews}
        </div>
    )

}