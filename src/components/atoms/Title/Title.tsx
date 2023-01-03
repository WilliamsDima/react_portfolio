import { FC } from "react"
import styles from "./Title.module.scss"
import cn from "classnames"

type TitleType = {
	text: string[]
}

const Title: FC<TitleType> = ({ text }) => {
	const arr = [...text]

	const content = arr.map((w, i) => (
		<span
			key={i}
			className={cn({ [styles["m-r"]]: arr[i + 1] && arr[i + 1] === " " })}
			data-text={w}
		>
			{w}
		</span>
	))

	return <h1 className={styles["span-text"]}>{content}</h1>
}

export default Title
