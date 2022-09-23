import Header from "../../components/Header";
import Title from "../../components/Title";
import SelectLang from "../../components/SelectLang";
import Table from "../../components/Table";

import styles from './styles.module.css'

const HomePage = () => {

	return <div className={styles.container}>
		<Header>
			<Title/>
			<SelectLang />
		</Header>
		<section>
			<Table/>
		</section>
	</div>
}

export default HomePage;