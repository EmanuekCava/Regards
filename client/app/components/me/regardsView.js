import React from 'react'

import Regards from './components/regards'

import styles from '../../../styles/me.module.css'

const RegardsView = ({ regards, auth, regardId, CreateResponse, RemoveResponse }) => {

    let regard = regards.regard;
    
    return (
        <div className={styles.containerRegardsView}>
            <Regards regard={regard} auth={auth} regardId={regardId} 
            CreateResponse={CreateResponse} RemoveResponse={RemoveResponse} />
        </div>
    )
}

export default RegardsView
