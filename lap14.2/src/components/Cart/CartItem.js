import { useContext } from 'react';
import styles from "./CartItem.module.css";
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);

    const onAddHandler = () => {
        cartCtx.addItem({ ...props.item, amount: 1 });
    }

    const onRemoveHandler = () => {
        cartCtx.removeItem(props.item.id);
    }

    return (
        <li className={styles["cart-item"]}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={styles.summary}>
                    <p className={styles["price"]}>{props.item.price}</p>
                    <p className={styles.amount}>x {props.item.amount}</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemoveHandler}>-</button>
                <button onClick={onAddHandler}>+</button>
            </div>
        </li>
    )
}

export default CartItem;