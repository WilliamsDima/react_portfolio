/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom"
import "./style.scss"
import Page from "../../components/templates/Page"

const NotFount = () => {
	return (
		<Page>
			<div className='empty_pagy'>
				<div style={{ justifyContent: "center" }}>
					<h1>404 Page : (</h1>

					<button>
						<Link to='/' className='link'>
							на главную
						</Link>
					</button>
				</div>

				<img className='error' src={require("../../assets/images/error.png")} />
			</div>
		</Page>
	)
}

export default NotFount
