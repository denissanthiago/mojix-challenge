import { IMovie } from "../../../domain/models/movie";
interface ITableItem {
	movie: IMovie
}

const TableItem = ({ movie }: ITableItem): JSX.Element => {
	return <tr>
			<td>{ movie.id }</td>
			<td>{ movie.title }</td>
			<td>{ movie.popularity }</td>
			<td>{ movie.release_date }</td>
	</tr>
}

export default TableItem