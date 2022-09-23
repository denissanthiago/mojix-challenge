import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import useMovies from "../../application/useCases/useMovies";
import {RootState} from "../store/rootReducer";

const useGetMovies = () => {
	const dispatch = useDispatch()

	const { listMovie, lang } = useSelector((state: RootState) => state.movie)
	const { getMoviesUseCase } = useMovies(dispatch, lang)

	React.useEffect(() => {
		getMoviesUseCase()
	},  [lang])

	return {
		loading: false,
		listMovie,
	}
}

export default useGetMovies