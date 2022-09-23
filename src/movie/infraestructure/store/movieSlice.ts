import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IMovie} from "../../domain/models/movie";

interface MovieState {
	listMovie: IMovie[]
	lang: string
}

const issuesInitialState: MovieState = {
	listMovie: [],
	lang: 'en'
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
		}
	}
})

export const {
	setMovies,
	setLang,
} = movie.actions

export default movie.reducer
