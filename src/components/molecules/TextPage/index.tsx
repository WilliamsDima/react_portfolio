import { FC } from "react"
import { Text } from "../../../store/redusers/main/types"
import TextItem from "../../atoms/TextItem"
import styles from "./style.module.scss"

type TextPageType = {
	data: Text[]
}

const TextPage: FC<TextPageType> = ({ data }) => {
	return (
		<div className={styles.content}>
			{data.map((it, i) => {
				return <TextItem key={i} text={it} />
			})}
		</div>
	)
}

export default TextPage
