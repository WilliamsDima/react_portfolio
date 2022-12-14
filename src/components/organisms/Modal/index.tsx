import { FC, memo, ReactNode } from "react"
import cn from "classnames"

import styles from "./style.module.scss"

type ModalType = {
	children: ReactNode
	visible: boolean
	close: () => void
}

const Modal: FC<ModalType> = memo(({ children, close, visible }) => {
	const closeHandler = (e: MouseEvent) => {
		close()
	}

	return (
		<div
			className={cn(styles.modal, {
				[styles.active]: visible,
			})}
			onClick={(e: any) => closeHandler(e)}
		>
			<div onClick={(e: any) => e.stopPropagation()}>{children}</div>
		</div>
	)
})

export default Modal
