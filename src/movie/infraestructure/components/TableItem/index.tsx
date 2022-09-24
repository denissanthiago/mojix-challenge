import { IMovie } from "../../../domain/models/movie";
import useNumberPrime from "../../hooks/useNumberPrime";
import styles from './styles.module.css'

interface ITableItem {
	movie: IMovie
	index: number
}

const TableItem = ({ movie, index }: ITableItem): JSX.Element => {

	const { isNumberPrimeFn } = useNumberPrime(index)
	const isNumberPrime = isNumberPrimeFn()

	return <tr className={`${styles.container} ${isNumberPrime ? styles.container__is_number_prime : ''}`}>
			<td>{ index }</td>
			<td>{ movie.title }</td>
			<td>{ movie.popularity }</td>
			<td>{ movie.release_date }</td>
	</tr>
}

export default TableItem