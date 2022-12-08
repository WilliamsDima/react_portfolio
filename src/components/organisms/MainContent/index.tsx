import react, { memo } from 'react'
import TextHello from '../../molecules/TextHello/Text'
import Earth from '../Planets/Earth/Earth'
import styles from './style.module.scss'


const MainContent = memo((props) => {

   
    return (
        <>
            <TextHello />
            <Earth />
        </>
    )
})

export default MainContent