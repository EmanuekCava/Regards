import React from 'react'

import Form from './components/form'
import Title from './components/title'

import styles from '../../../styles/auth.module.css'

const Login = ({ setSignUp }) => {

    return (
        <div className={styles.keepFormDesign}>
            <Title />
            <Form setSignUp={setSignUp} />
        </div>
    )
}


export default Login
