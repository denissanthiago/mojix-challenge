import TableItem from "../TableItem";
import useGetMovies from "../../hooks/useGetMovies";
import styles from './styles.module.css'

const Table = () => {
	const { listMovie } = useGetMovies();

	return <table className={styles.container}>
		<tr>
			<th className={styles.container__title}>Index</th>
			<th className={styles.container__title}>Title</th>
			<th className={styles.container__title}>Popularity</th>
			<th className={styles.container__title}>Release Date</th>
		</tr>
		{ listMovie.map( (movie, index) => <TableItem index={index} key={movie.id} movie={movie}/> ) }

	</table>
}

export default Table