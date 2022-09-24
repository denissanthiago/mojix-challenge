import Header from "../../components/Header";
import Title from "../../components/Title";
import SelectLang from "../../components/SelectLang";
import Table from "../../components/Table";

import styles from './styles.module.css'
import ModalMovie from "../../components/ModalMovie";

const HomePage = () => {

	return <div className={styles.container}>
		<Header>
			<Title/>
			<SelectLang />
		</Header>
		<section>
			<Table/>
			<ModalMovie/>
		</section>
	</div>
}

export default HomePage;