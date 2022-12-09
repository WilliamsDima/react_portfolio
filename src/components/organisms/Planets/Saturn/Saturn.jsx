import React from 'react'
import styles from './Saturn.module.scss'


export const Saturn = (props) => {

    return (

        <div className={styles['planet-wrap']}>

            <div className={styles["saturn"]}>
                <div className={styles["planet"]}>
                    <div className={styles['bottom']}></div>
                    <div className={styles["rings"]}></div>
                    <div className={styles["top"]}></div>
                    <div className={styles["shadow"]}></div>
                </div>
            </div>

        </div>

    )
}
