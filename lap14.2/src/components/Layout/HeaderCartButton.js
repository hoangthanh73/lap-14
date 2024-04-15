import { useEffect, useContext, useState } from 'react';
import CartContext from '../../store/cart-context';

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnIsHightlighted, setBtnIsHightLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);

    const btnClasses = `${styles.button} ${btnIsHightlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHightLighted(true);

        const timer = setTimeout(() => setBtnIsHightLighted(false), 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onShowCart}>
            <i className={"fa-solid fa-cart-shopping " + styles.icon}></i>
            <span className={styles.bump}>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;
