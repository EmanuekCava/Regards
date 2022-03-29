import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createRegard } from '../app/server/actions/regard.action'

import Response from "../app/res/responses/createResponseDanger";

import styles from '../styles/crud.module.css'

const Create = () => {

    const route = useRouter()
    const { auth } = useSelector(state => state)

    const dispatch = useDispatch()

    const initialState = {
        title: "",
        description: ""
    }

    const [regard, setRegard] = useState(initialState)
    const [regardImages, setRegardImages] = useState("")

    const { title, description } = regard;

    const changeRegard = (e) => {
        const { name, value } = e.target
        setRegard({ ...regard, [name]: value })
    }
    const changeImages = (e) => {
        const { files } = e.target;
        setRegardImages(files)
    }

    const cancelCreate = () => {
        route.push('/me')
    }

    const sumbitRegard = (e) => {
        e.preventDefault();

        try {

            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)

            for (let i = 0; i < regardImages.length; i++) {
                formData.append('files', regardImages[i])
            }

            dispatch(createRegard(auth.auth.token, formData))

            route.push('/me')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.containerCreate}>
            <div className={styles.ContainerFormCreate}>
                <fieldset className={styles.fieldCreate}>
                    <legend className={styles.textFieldCreate}>
                        <h1>Create regards!</h1>
                    </legend>
                    <Response />
                    <form onSubmit={sumbitRegard} >
                        <div className={styles.separatorFields}>
                            <input type="text" name="title" placeholder="TITLE" value={title} className={styles.inputCreate}
                                onChange={changeRegard} />
                        </div>
                        <div className={styles.separatorFields}>
                            <textarea name="description" placeholder="DESCRIPTION (NOT COMPULSORY)" className={styles.textAreaCreate}
                                value={description} onChange={changeRegard} ></textarea>
                        </div>
                        <div className={styles.separatorFields}>
                            <input type="file" name="files" className={styles.fileCreate} onChange={changeImages} multiple />
                        </div>
                        <div className={styles.separatorFields}>
                            <button className={styles.buttonCreate}>
                                <p className={styles.textButtonCreate}>CREATE</p>
                            </button>
                        </div>
                    </form>
                    <button className={styles.buttonCancel}>
                        <p className={styles.textButtonCreate} onClick={cancelCreate}>CANCEL</p>
                    </button>
                </fieldset>
            </div>
        </div>
    )
}

export default Create
