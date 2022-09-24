import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IMovie} from "../../domain/models/movie";

interface MovieState {
	listMovie: IMovie[]
	lang: string,
	movieSelected: IMovie | null
}

const issuesInitialState: MovieState = {
	listMovie: [],
	lang: 'en',
	movieSelected: null
}

const movie = createSlice({
	name: 'movie',
	initialState: issuesInitialState,
	reducers: {
		setMovies(state, { payload }: PayloadAction<MovieState['listMovie']>) {
			state.listMovie = payload
		},
		setLang(state, { payload }: PayloadAction<string>) {
			state.lang = payload
		},
		setMovieSelected(state, { payload }: PayloadAction<IMovie>) {
			state.movieSelected = payload
		},
		removeMovieSelected(state) {
			state.movieSelected = null
		},
	}
})

export const {
	setMovies,
	setLang,
	setMovieSelected,
	removeMovieSelected
} = movie.actions

export default movie.reducer
