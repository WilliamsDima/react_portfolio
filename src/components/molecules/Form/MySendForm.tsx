import { useState, FC } from "react"
import { formAPI } from "../../../api/formApi"
import style from "./style.module.scss"

type Form = {
	close: () => void
	setThanksModal: () => void
}

const MySendForm: FC<Form> = ({ close, setThanksModal }) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [text, setText] = useState("")

	const handleSubmit = () => {
		const data = {
			name,
			email,
			text,
		}

		if (name && email && text) {
			formAPI.form(data)
			close()
			setThanksModal()

			setName("")
			setEmail("")
			setText("")
		}
	}

	return (
		<div className={style.formWrapp}>
			<div className={style.form}>
				<div className={style["block__name"]}>
					<input
						value={name}
						onChange={({ target }) => setName(target.value)}
						name={"username"}
						placeholder={"Имя"}
						required
					/>
					<span className={style["line"]}></span>
				</div>

				<div className={style["block__email"]}>
					<input
						value={email}
						onChange={({ target }) => setEmail(target.value)}
						type={"email"}
						name={"email"}
						placeholder='Email'
						required
					/>
					<span className={style["line"]}></span>
				</div>

				<div className={style["block__message"]}>
					<textarea
						value={text}
						onChange={({ target }) => setText(target.value)}
						name={"text"}
						placeholder={"сообщение"}
						required
					/>
					<span className={style["line"]}></span>
				</div>

				<button className={style["btn-form"]} onClick={handleSubmit}>
					отправить
				</button>
			</div>
		</div>
	)
}

export default MySendForm
