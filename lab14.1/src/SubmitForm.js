import { useState } from "react"

const SubmitForm = () => {

    const [enteredValues, setEnteredValues] = useState({
        name: '',
        email: ''
    });

    const [didEdit, setDidEdit] = useState({
        name: false,
        email: false
    })

    const handlerInputChange = (identifier, value) => {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value
        }))
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: false
        }))
    }

    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleInputBlur = (idenfitier) => {
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [idenfitier]: true
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = enteredValues.name.trim();
        const email = enteredValues.email.trim();

        if (name && email && isEmailValid(email)) {
            console.log(enteredValues);
            alert('success');
        }
        else{
            alert('some thing went wrong!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`form-control ${didEdit.name && !enteredValues.name.trim() && 'invalid'}`}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text' id='name'
                    onBlur={() => { handleInputBlur('name') }}
                    onChange={(event) => handlerInputChange('name', event.target.value)}
                    value={enteredValues.name} />
                {didEdit.name && !enteredValues.name.trim() && <p className='error-text'>Name must not be empty.</p>}
            </div>
            <div className={`form-control ${didEdit.email && !isEmailValid(enteredValues.email) && 'invalid'}`}>
                <label htmlFor='email'>Your E-Mail</label>
                <input
                    type='email'
                    id='email'
                    onBlur={() => { handleInputBlur('email') }}
                    onChange={(event) => handlerInputChange('email', event.target.value)}
                    value={enteredValues.email} />
                {didEdit.email && !isEmailValid(enteredValues.email) && <p className='error-text'>Please enter valid email.</p>}
            </div>
            <div className='form-actions'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default SubmitForm