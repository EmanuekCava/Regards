import { useRouter } from 'next/router'

import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { login } from '../../../server/actions/auth.action'

import Response from '../../../res/responses/loginResponse'

import styles from '../../../../styles/auth.module.css'

const Form = ({ setSignUp }) => {

    const route = useRouter()
    const dispatch = useDispatch()

    const initialState = {
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialState)

    const { email, password } = user;

    const changeLogin = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const sumbitLogin = (e) => {
        e.preventDefault()

        try {

            dispatch(login(user, route))

        } catch (error) {
            console.log(error)
        }

    }

    const register = () => {
        setSignUp(true)
    }

    return (
        <div className={styles.containerForm}>
            <Response />
            <div className={styles.cardForm}>
                <fieldset className={styles.fieldForm}>
                    <legend className={styles.textFieldForm}>
                        LOGIN
                    </legend>
                    <form onSubmit={sumbitLogin} >
                        <div className={styles.separatorFieds}>
                            <input type="text" placeholder="EMAIL" name="email" className={styles.fieldInput} value={email}
                                onChange={changeLogin} />
                        </div>
                        <div className={styles.separatorFieds}>
                            <input type="password" placeholder="PASSWORD" name="password" className={styles.fieldInput} value={password}
                                onChange={changeLogin} />
                        </div>
                        <div className={styles.separatorFiedsCheck}>
                            <label className={styles.questionAccount} htmlFor="keep">Keep logged in</label>
                            <input type="checkbox" name="keep" className={styles.checkInput} />
                        </div>
                        <div className={styles.separatorFieds}>
                            <button className={styles.buttonLogin}>
                                <p className={styles.textButtonLogin}>Login</p>
                            </button>
                        </div>
                    </form>
                    <div className={styles.separatorFiedsDown}>
                        <p className={styles.questionAccount}>You don't have an account yet?</p>
                        <button className={styles.buttonRegisterDown} onClick={register}>
                            <p className={styles.textButtonRegisterDown}>Register</p>
                        </button>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Form