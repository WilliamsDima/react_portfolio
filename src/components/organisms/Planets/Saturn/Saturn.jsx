import React, {useContext} from 'react';
import styles from './Saturn.module.scss';
import { AppContext } from '../../../context/context';


export const Saturn = (props) => {

    const { setIndex } = useContext(AppContext);

    return (

        <div className={styles['planet-wrap']} onClick={() => setIndex(3)}>

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
