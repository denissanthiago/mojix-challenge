import { IMovie } from "../../../domain/models/movie";
import styles from './styles.module.css'

interface ICardMovie {
	movie: IMovie | null
}

const CardMovie = ( { movie }: ICardMovie): JSX.Element => {
	return <div className={styles.container}>
		<div>
			<div className={styles.container__id}>
				<span>ID: </span>
				<span>{movie?.id}</span>
			</div>

			<div className={styles.container__title}>
				<h3>{movie?.title} ({movie?.original_title})</h3>
			</div>
			<div className={styles.container__tags}>
				<div>
					<span>language: </span>
					<span>{movie?.original_language} | </span>
				</div>
				<div>
					<span>popularity: </span>
					<span>{movie?.popularity} | </span>
				</div>
				<div>
					<span>{movie?.release_date}</span>
				</div>
			</div>
			<div className={styles.container__description}>
			<span>
				{movie?.overview}
			</span>
			</div>
		</div>
		<div className={styles.container__image}>
			<img src={`${process.env.REACT_APP_BASE_URL_IMAGE}${movie?.poster_path}`} alt='image video'/>
		</div>
	</div>
}

export default CardMovie