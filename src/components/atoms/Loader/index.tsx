import react, { FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import CSS from 'csstype'

type Loader = {
    active: boolean
    pulse?: boolean
    overStyle?: CSS.Properties
}


const Loader: FC<Loader>  = ({active, overStyle, pulse}) => {

    return (
        <div className={cn(styles['atom-wrapper'], {
            [styles.active]: active,
            [styles.pulse]: pulse
        })}>
            <div className={styles.atom}>
                <div style={overStyle}>
                    <div style={overStyle}>
                    </div>
                </div>

                <div style={overStyle}>
                    <div style={overStyle}>
                    </div>
                </div>

                <div style={overStyle}>
                    <div style={overStyle}>
                    </div>
                </div>

                <div style={overStyle}>
                    <div style={overStyle}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader