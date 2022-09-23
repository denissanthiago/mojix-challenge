import styles from './styles.module.css'
interface IHeader {
	children: JSX.Element | JSX.Element[]
}

const Header = ({ children }: IHeader): JSX.Element => {
	return <div className={styles.container}>
		{ children }
	</div>
}

export default Header