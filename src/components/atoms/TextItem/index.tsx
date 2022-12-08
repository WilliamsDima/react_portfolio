import React, { FC } from 'react'
import styles from './style.module.scss'
import { Text } from '../../../store/redusers/main/types'

type TextItem = {
    text: Text
}


const TextItem: FC<TextItem> = ({text}) => {

    const list = text.list && text.list.join(', ')


    return (
        <div className={styles.item}>
            <p className={styles.text}>
                {text.text}
                
                {list && <span>{list}</span>}
                {text.link && <a href={text.link.link} target="_blank">
                        {text.link.text}
                    </a>}
                
            </p>
        </div>
    )
}

export default TextItem