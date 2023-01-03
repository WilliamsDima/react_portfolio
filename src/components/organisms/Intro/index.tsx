import { memo, FC } from "react"
import StarsMove from "../../molecules/StarsMove"
import TextIntro from "../../molecules/TextIntro"
import styles from "./style.module.scss"

type IntroType = {
	skip: () => void
}

const Intro: FC<IntroType> = memo(({ skip }) => {
	return (
		<div className={styles.intro} onClick={skip}>
			<TextIntro />
			<StarsMove start={true} />

			<p className={styles.skip}>click to skip intro</p>
		</div>
	)
})

export default Intro
