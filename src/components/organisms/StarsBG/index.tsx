import react, { memo } from 'react'
import styles from './style.module.scss'
import CSS from 'csstype'
import { useAppSelector } from '../../../hooks/hooks'


const Stars = memo((props) => {

    const { skipIntro } = useAppSelector(store => store.main)

    const limit = 500

    const rand = () => {
        return Math.random();
    }

    const filledArray = Array(limit).fill(1);

    const createStar = () => {
        const style: CSS.Properties = {

        }
        style.top = `${rand() * 100}%`
        style.left = `${rand() * 100}%`
        style.animationDelay = `${rand() * 8}s`

        return style
    }

    const skip = skipIntro || sessionStorage.getItem('skip-intro')

    return (
        <>
            {skip && <div className={styles.space}>
                {filledArray.map((it, i) => {
                    return <div className={styles.star} key={i} style={createStar()}></div> 
                })}
            </div>}

            <div className={styles.scy}>
                <div className={styles.stars}></div>
                <div className={styles.twinkling}></div>
            </div>
        </>

    )
})

export default Stars