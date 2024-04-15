import { useContext, useRef } from 'react'

import Input from '../UI/Input';
import styles from './FormInfo.module.css';
import CartContext from '../../store/cart-context';

const FormInfo = (props) => {
    const cartCtx = useContext(CartContext);
    console.log(props)

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const formcontrolStyles = {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginBottom: '16px'
    }

    const inputStyles = {
        width: '100%',
        marginLeft: '0',
        marginTop: '4px'
    }

    const handleCancel = (event) => {
        event.preventDefault();
        props.changeOrder(false);
        props.changeShowBtn(true);
    }

    const validate = () => {
        let flag = true;
        if (!nameInputRef.current.value || !streetInputRef.current.value || !postalInputRef.current.value || !cityInputRef.current.value) {
            flag = false;
            alert('Toàn bộ các trường đều không được bỏ trống')
        }
        if (!postalInputRef.current.value.length > 5) {
            flag = false;
            alert('Post Code phải lớn hơn 5 ký tự')
        }
        return flag;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            cartCtx.orderSuccess();
            console.log({
                items: cartCtx.items,
                totalAmount: cartCtx.totalAmount,
                info: {
                    name: nameInputRef.current.value,
                    street: streetInputRef.current.value,
                    'postal code': postalInputRef.current.value,
                    city: cityInputRef.current.value
                }
            })
            props.onHideCart();
            alert('Order Success');
        }
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles['control-group']}>
                <Input label='Your Name'
                    id='name'
                    ref={nameInputRef}
                    control={{
                        style: formcontrolStyles
                    }}
                    input={{
                        type: 'text',
                        style: inputStyles
                    }} />
                <Input label='Street'
                    id='street'
                    ref={streetInputRef}
                    control={{
                        style: formcontrolStyles
                    }}
                    input={{
                        type: 'text',
                        style: inputStyles
                    }} />
                <Input label='Postal Code'
                    id='postal-code'
                    ref={postalInputRef}
                    control={{
                        style: formcontrolStyles
                    }}
                    input={{
                        type: 'text',
                        style: inputStyles
                    }} />
                <Input label='City'
                    id='city'
                    ref={cityInputRef}
                    control={{
                        style: formcontrolStyles
                    }}
                    input={{
                        type: 'text',
                        style: inputStyles
                    }} />
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={handleCancel}>Cancel</button>
                <button className={styles.button} type='submit'>Confirm</button>
            </div>
        </form>
    )
}

export default FormInfo;