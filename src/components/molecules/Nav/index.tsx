import cn from 'classnames'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector, useAudio } from '../../../hooks/hooks'
import styles from './style.module.scss'

type Nav = {
    active: boolean
    close: () => void
}

const Nav: FC<Nav> = ({active, close}) => {

    const { pathname } = useLocation()

    const { sound } = useAppSelector(store => store.main)

    const { playBtn, playWooh } = useAudio()

    const linkHandler = () => {
        sound && playBtn()
        sound && playWooh()
    }

    const closeHandler = (e: MouseEvent) => {
        e.stopPropagation()
        close()
    }

    return (
        <div className={cn(styles.nav, {
            [styles.active]: active 
        })} onClick={(e: any) => closeHandler(e)}>

            <div className={styles.container} onClick={(e: any) => e.stopPropagation()}>
                <Link className={cn({
                    [styles.linkActive]: pathname === '/'
                })} to={'/'} onClick={linkHandler}>Главная</Link>

                <Link className={cn({
                    [styles.linkActive]: pathname === '/about'
                })} to={'/about'} onClick={linkHandler}>Обо мне</Link>

                <Link className={cn({
                    [styles.linkActive]: pathname === '/skills'
                })} to={'/skills'} onClick={linkHandler}>Навыки</Link>

                <Link className={cn({
                    [styles.linkActive]: pathname === '/works'
                })} to={'/works'} onClick={linkHandler}>Портфолио</Link>
            </div>
        </div>
    )
}

export default Nav