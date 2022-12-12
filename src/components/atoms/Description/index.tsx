import react, { FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { IWorks } from '../../../store/redusers/main/types'

type Description = {
    work: IWorks
}


const Description: FC<Description>  = ({work}) => {

    const titleTecnology = work?.technology.join(', ')

    const dateConverter = (i: number) => {
        if (i < 10) {
            return '0' + i
        }
        return i
    }

    const date = work.date.toDate()
    const dateDisplay = dateConverter(date.getDate()) + '.' + dateConverter(date.getMonth()) 
    + '.'+ date.getFullYear()

    const linkText = work.link.includes('google') ? 'google play' : 'git'

    return (
        <dd className={styles.description}>
            <h3>{work.name}</h3>
            <p>{titleTecnology}</p>
            <p>{dateDisplay}</p>
            <a href={work.link} target="_blank">{linkText}</a>
        </dd> 
    )
}

export default Description