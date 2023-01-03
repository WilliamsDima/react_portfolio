import styles from "./Mars.module.scss"

const Mars = props => {
	return (
		<div className={styles["planet-wrap"]}>
			<div className={styles["mars"]}>
				<div className={styles["dark"]}>
					<div className={styles["planet"]}>
						<div className={styles["wrap"]}>
							<div className={styles["background"]}></div>
							<div className={styles["clouds"]}></div>
						</div>

						<div className={styles["mask"]}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mars
