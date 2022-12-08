import react, { memo, FC } from 'react'
import StarsMove from '../../molecules/StarsMove'
import TextIntro from '../../molecules/TextIntro'
import styles from './style.module.scss'

type Intro = {
    skip: () => void
}


const Intro: FC<Intro> = memo(({skip}) => {
   
    return (
        <div className={styles.intro} onClick={skip}>
            <TextIntro />
            <StarsMove start={true}/>

            <p className={styles.skip}>click to skip intro</p>
        </div>
    )
})

export default Intro