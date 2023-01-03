import cn from "classnames"
import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAppSelector, useAudio } from "../../../hooks/hooks"
import CodeSvg from "../../atoms/Icons/Code"
import DevSvg from "../../atoms/Icons/Dev"
import HomeSvg from "../../atoms/Icons/HomeSvg"
import PortfolioSvg from "../../atoms/Icons/Portfolio"
import styles from "./style.module.scss"

type NavType = {
	active: boolean
	close: () => void
}

const Nav: FC<NavType> = ({ active, close }) => {
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
		<div
			className={cn(styles.nav, {
				[styles.active]: active,
			})}
			onClick={(e: any) => closeHandler(e)}
		>
			<div
				className={styles.container}
				onClick={(e: any) => e.stopPropagation()}
			>
				<Link
					className={cn({
						[styles.linkActive]: pathname === "/",
					})}
					to={"/"}
					onClick={linkHandler}
				>
					Главная
					<HomeSvg />
				</Link>

				<Link
					className={cn({
						[styles.linkActive]: pathname === "/about",
					})}
					to={"/about"}
					onClick={linkHandler}
				>
					Обо мне
					<DevSvg />
				</Link>

				<Link
					className={cn({
						[styles.linkActive]: pathname === "/skills",
					})}
					to={"/skills"}
					onClick={linkHandler}
				>
					Навыки
					<CodeSvg />
				</Link>

				<Link
					className={cn({
						[styles.linkActive]: pathname === "/works",
					})}
					to={"/works"}
					onClick={linkHandler}
				>
					Портфолио
					<PortfolioSvg />
				</Link>
			</div>
		</div>
	)
}

export default Nav
