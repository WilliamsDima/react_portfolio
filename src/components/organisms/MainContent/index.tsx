import cn from "classnames"
import { memo, FC } from "react"
import TextHello from "../../molecules/TextHello/Text"
import Earth from "../Planets/Earth/Earth"
import styles from "./style.module.scss"

type Main = {
	start: boolean
}

const MainContent: FC<Main> = memo(({ start }) => {
	return (
		<div
			className={cn(styles.mainContent, {
				[styles.start]: start,
				[styles.skip]: sessionStorage.getItem("skip-intro"),
			})}
		>
			<TextHello />
			<Earth />
		</div>
	)
})

export default MainContent
