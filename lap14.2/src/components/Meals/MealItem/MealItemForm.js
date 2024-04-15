import { useContext, useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        const amount = +amountInputRef.current.value;
        if (amount > 5 || amount < 1) {
            setAmountIsValid(false);
            return;
        } else {
            setAmountIsValid(true);
            e.preventDefault();
            cartCtx.addItem({ ...props.meal, amount });
            amountInputRef.current.value = 1;
        }

    }

    return (
        <form className={styles.form}>
            <Input
                label="Amount"
                ref={amountInputRef}
                input={{
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }} />
            <button onClick={submitHandler}>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1 - 5)</p>}
        </form>
    )
}

export default MealItemForm;