import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import useMovies from "../../application/useCases/useMovies";
import {RootState} from "../store/rootReducer";

const useGetMovies = () => {
	const dispatch = useDispatch()

	const { listMovie, lang, movieSelected } = useSelector((state: RootState) => state.movie)
	const { getMoviesUseCase, selectMovieUseCase, removeMovieSelectedUseCase } = useMovies(dispatch, lang)

	React.useEffect(() => {
		getMoviesUseCase()
	},  [lang])

	return {
		loading: false,
		listMovie,
		movieSelected,
		selectMovie: selectMovieUseCase,
		removeMovieSelected: removeMovieSelectedUseCase,
	}
}

export default useGetMovies