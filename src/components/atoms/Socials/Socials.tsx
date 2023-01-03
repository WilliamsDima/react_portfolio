import InstagramIcon from "../Icons/Instagram"
import LinkedinIcon from "../Icons/Linkedin"
import TelegramIcon from "../Icons/Telegram"
import VkIcon from "../Icons/Vk"
import styles from "./style.module.scss"

export const Socials = () => {
	const socials = [
		{
			Icon: () => <VkIcon />,
			link: "https://vk.com/williamsdy",
		},
		{
			Icon: () => <InstagramIcon />,
			link: "https://www.instagram.com/williams.css/",
		},
		{
			Icon: () => <TelegramIcon />,
			link: "https://t.me/DyWilliams",
		},
		{
			Icon: () => <LinkedinIcon />,
			link: "https://ru.linkedin.com/in/dmitry-lemetin-87b412238/ru",
		},
	]

	return (
		<ul className={styles.socials}>
			{socials.map(({ link, Icon }, i) => {
				return (
					<li key={i}>
						<a href={link} target='_blank' rel='noreferrer'>
							<Icon />
						</a>
					</li>
				)
			})}
		</ul>
	)
}
