import { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal.js";
import CartItem from "./CartItem";
import CartContext from '../../store/cart-context.js';
import FormInfo from "../FormInfo/FormInfo.js";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const [order, setOrder] = useState('');
    const [showBtn, setShowBtn] = useState(true);

    const openOrderForm = () => {
        if (cartCtx.items.length > 0) {
            setOrder(true);
            setShowBtn(false);
        } else {
            alert('Bạn chưa mua sản phẩm nào cả!')
        }
    }

    return (
        <Modal onHideCart={props.onHideCart}>
            <div>
                <ul className={styles["cart-items"]}>
                    {cartCtx.items.map(
                        el => <CartItem key={el.id} item={el} />
                    )}
                </ul>
                <div className={styles.total}>
                    <p>Total Amount</p>
                    <p>{totalAmount}</p>
                </div>
            </div>
            {order && <FormInfo changeOrder={setOrder} changeShowBtn={setShowBtn} onHideCart={props.onHideCart} />}
            {showBtn && <div className={styles.actions}>
                <button className={styles["button-alt"]} onClick={props.onHideCart}>Close</button>
                <button className={styles["button"]} onClick={openOrderForm}>Order</button>
            </div>}
        </Modal >
    )
}

export default Cart;