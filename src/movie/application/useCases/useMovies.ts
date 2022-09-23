import React from "react";
import movieService from '../../infraestructure/services'
import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import {setMovies} from "../../infraestructure/store/movieSlice";

const useMovies = ( dispatch:  Dispatch<AnyAction>, lang: string) => {
	const { getMoviesFetch } = movieService

	const getMoviesUseCase = React.useCallback(async () => {
		const response = await getMoviesFetch(lang);
		dispatch(setMovies(response.data.results))
	}, [lang])

	return {
		getMoviesUseCase
	}
}

export default useMovies