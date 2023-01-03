import { memo, useState } from "react"
import styles from "./style.module.scss"
import Loader from "../../atoms/Loader"
import Sound from "../../atoms/Icons/Sound"
import cn from "classnames"
import Nav from "../../molecules/Nav"
import { useAppSelector, useAudio } from "../../../hooks/hooks"
import { useActions } from "../../../hooks/useActions"

const Navigation = memo(props => {
	const { setSound } = useActions()
	const { sound } = useAppSelector(store => store.main)

	const [nav, setNav] = useState(false)

	const { playBtn, playWoohv2 } = useAudio()

	const soundHandler = () => {
		setSound(!sound)
		sound && playBtn()
	}

	const navHandler = () => {
		setNav(!nav)
		sound && playBtn()
		sound && playWoohv2()
	}

	return (
		<nav className={styles.nav}>
			<Nav active={nav} close={navHandler} />

			<button
				className={cn(styles.sound, {
					[styles.off]: !sound,
				})}
				onClick={soundHandler}
			>
				<Sound />
			</button>

			<button className={styles.atom} onClick={navHandler}>
				<Loader
					pulse={true}
					active={true}
					overStyle={{ borderColor: "#fff" }}
				/>
			</button>
		</nav>
	)
})

export default Navigation
