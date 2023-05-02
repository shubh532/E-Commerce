import style from "./StarRating.module.css"
function StarRating() {
    return (
        <div className={style.starrating}>
            <span className={style.Stars}>4&#9733;</span>
        </div>

    )
}
export default StarRating;