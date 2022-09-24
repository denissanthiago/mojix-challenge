import React from "react";
import movieService from '../../infraestructure/services'
import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import { removeMovieSelected, setMovies, setMovieSelected } from "../../infraestructure/store/movieSlice";
import {IMovie} from "../../domain/models/movie";

const useMovies = ( dispatch:  Dispatch<AnyAction>, lang: string) => {
	const { getMoviesFetch } = movieService

	const getMoviesUseCase = React.useCallback(async () => {
		const response = await getMoviesFetch(lang);
		dispatch(setMovies(response.data.results))
	}, [lang])

	const selectMovieUseCase = (movie: IMovie) => {
		dispatch(setMovieSelected(movie))
	}

	const removeMovieSelectedUseCase = () => {
		dispatch(removeMovieSelected())
	}

	return {
		getMoviesUseCase,
		selectMovieUseCase,
		removeMovieSelectedUseCase,
	}
}

export default useMovies