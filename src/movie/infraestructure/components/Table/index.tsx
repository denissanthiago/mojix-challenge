import TableItem from "../TableItem";
import useGetMovies from "../../hooks/useGetMovies";
import styles from './styles.module.css'

const Table = () => {
	const { listMovie, selectMovie } = useGetMovies();

	return <table className={styles.container}>
		<thead>
			<tr>
				<th className={styles.container__title}>Index</th>
				<th className={styles.container__title}>Title</th>
				<th className={styles.container__title}>Popularity</th>
				<th className={styles.container__title}>Release Date</th>
			</tr>
		</thead>
		<tbody>
			{ listMovie.map( (movie, index) => <TableItem onClick={selectMovie} index={index} key={movie.id} movie={movie}/> ) }
		</tbody>
	</table>
}

export default Table