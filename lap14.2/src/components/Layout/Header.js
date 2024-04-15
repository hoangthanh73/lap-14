import styles from "./Header.module.css";
import MealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton.js";

const Header = (props) => {
    return (
        <>
            <div className={styles.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </div>
            <div className={styles["main-image"]}>
                <img src={MealImage} alt="Meals" />
            </div>
        </>
    )
};

export default Header;