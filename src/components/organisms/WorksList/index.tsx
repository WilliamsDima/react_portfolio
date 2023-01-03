import { memo, FC } from "react"
import { IImage, IWorks } from "../../../store/redusers/main/types"
import WorkItem from "../../molecules/WorkItem"
import styles from "./style.module.scss"

type WorksListType = {
	works: IWorks[]
	images: IImage[]
	setModal: (work: IWorks) => void
}

const WorksList: FC<WorksListType> = memo(({ works, images, setModal }) => {
	const sortByDateWorks =
		works &&
		[...works].sort((a, b) => {
			return +new Date(b.date) - +new Date(a.date)
		})

	return (
		<ul className={styles.works}>
			{sortByDateWorks.map((work, i) => {
				const img = images.find(it => it.id === work.id)

				return <WorkItem setModal={setModal} work={work} key={i} img={img} />
			})}
		</ul>
	)
})

export default WorksList
