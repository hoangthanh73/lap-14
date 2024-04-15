import styles from "./AvailableMeals.module.css";
import MealItem from './MealItem/MealItem';
import Card from "../UI/Card.js";
import useHttp from "../../hooks/HttpHook.js";

const AvailableMeals = () => {
    const url = 'https://lap-14-funix-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json';

    const data = useHttp(url);
    const meals = data.data;

    const mealList = meals && meals.length > 0 && meals.map(item => {
        return <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price} />
    })

    return (
        <div className={styles.meals}>
            <Card>
                <ul>
                    {data.isLoading && 'Loading...'}
                    {mealList}
                </ul>
            </Card>
        </div>
    )
};

export default AvailableMeals;