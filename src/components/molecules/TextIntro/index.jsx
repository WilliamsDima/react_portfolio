import styles from './style.module.scss'

const TextIntro = (props) => {

    const selectText = [
        {
            className: 'one',
            text: 'wellcome'
        },
        {
            className: 'two',
            text: 'among a billion stars'
        },
        {
            className: 'three',
            text: 'on one of the stars'
        },
        {
            className: 'four',
            text: 'we will change the world'
        }
    ]

    return (
        <div className={styles.intro}>
            <div className={styles.intro_text}>
            {selectText.map((it, i) => {

                return <span key={i} className={styles[it.className]}>{it.text}</span>
            })}
            </div>  
        </div>
    )
}

export default TextIntro