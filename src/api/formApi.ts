import axios from "axios"

const instance = {
	baseURL: "https://api.telegram.org/bot",
	key: process.env.REACT_APP_TG_KEY,
	chatId: process.env.REACT_APP_TG_ID,
}

interface IForm {
	name: string
	email: string
	text: string
}

export const formAPI = {
	form(data: IForm) {
		const n = "Имя пользователя: " + data.name + "          "

		const e = "Email: " + data.email + "          "

		const m = "Сообщение: " + data.text

		return axios.post(
			instance.baseURL +
				instance.key +
				"/sendMessage?chat_id=" +
				instance.chatId +
				"&parse_mode=html&text=" +
				n +
				e +
				m
		)
	},
}
