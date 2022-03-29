import { useRouter } from 'next/router'

import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { register } from "../../server/actions/auth.action";

import Response from '../../res/responses/registerResponse'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import styles from '../../../styles/auth.module.css'

const Register = ({ setSignUp }) => {

    const route = useRouter()

    const dispatch = useDispatch()

    const initialState = {
        username: '',
        email: '',
        password: '',
        confirm: ''
    }

    const [showPassword, setshowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [user, setUser] = useState(initialState)

    const { username, email, password, confirm } = user;

    const changeRegister = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const sumbitRegister = (e) => {
        e.preventDefault()

        try {

            dispatch(register(user, route))

        } catch (error) {
            console.log(error);
        }
    }

    const show = () => {
        setshowPassword(!showPassword)
    }
    const showConfirmPassword = () => {
        setShowConfirm(!showConfirm)
    }
    const login = () => {
        setSignUp(false)
    }

    return (
        <div className={styles.containerRegisterForm}>
            <fieldset className={styles.fieldForm}>
                <legend className={styles.textFieldForm}>
                    REGISTER
                </legend>
                <Response />
                <form onSubmit={sumbitRegister} >
                    <div className={styles.separatorFieds}>
                        <input type="text" name="username" placeholder="USERNAME" className={styles.fieldInput} value={username}
                            onChange={changeRegister} autoComplete="off"
                        />
                    </div>
                    <div className={styles.separatorFieds}>
                        <input type="text" name="email" placeholder="EMAIL" className={styles.fieldInput} value={email}
                            onChange={changeRegister}
                        />
                    </div>
                    <div className={styles.conteinerPassword}>
                        <div className={styles.separatorFieds}>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="PASSWORD" className={styles.fieldInput} value={password}
                                onChange={changeRegister}
                            />
                            {
                                showPassword ? <VisibilityOffIcon className={styles.visibilityOn1} onClick={show} />
                                    : <VisibilityIcon className={styles.visibilityOn1} onClick={show} />
                            }
                        </div>
                    </div>
                    <div className={styles.conteinerPassword}>
                        <div className={styles.separatorFieds}>
                            <input type={showConfirm ? 'text' : 'password'} name="confirm" placeholder="CONFIRM PASSWORD" className={styles.fieldInput} value={confirm}
                                onChange={changeRegister}
                            />
                        </div>
                        {
                            showConfirm ? <VisibilityOffIcon className={styles.visibilityOn1} onClick={showConfirmPassword} />
                                : <VisibilityIcon className={styles.visibilityOn1} onClick={showConfirmPassword} />
                        }
                    </div>
                    <div className={styles.separatorFieds}>
                        <button className={styles.buttonRegister}>
                            <p className={styles.textButtonLogin}>Register</p>
                        </button>
                    </div>
                </form>
                <div className={styles.separatorFiedsDown}>
                    <p className={styles.questionAccount}>You already have an account?</p>
                    <button className={styles.buttonLoginDown} onClick={login} >
                        <p className={styles.textButtonRegisterDown}>Login</p>
                    </button>
                </div>
            </fieldset>
        </div>
    )
}

export default Register
