import React, { FC, memo } from 'react'

import styles from './style.module.scss'

type Modal = {
    start: (value: boolean) => void
}


const ModalIntro: FC<Modal> = memo(({start}) => {
   

    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <p className={styles.warn}>!</p>
                <p>Включить звуковые эффекты?</p>
            </div>

            <div className={styles.btns}>
                <button className={styles.pulse} onClick={() => start(true)}>
                    Да
                </button>
                <button className={styles.pulse} onClick={() => start(false)}>
                    нет
                </button>
            </div>
        </div>
    )
})

export default ModalIntro