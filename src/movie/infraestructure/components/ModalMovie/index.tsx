import Modal from "../Modal";
import React from "react";
import useGetMovies from "../../hooks/useGetMovies";
import CardMovie from "../CardMovie";

const ModalMovie = () => {
	const { movieSelected, removeMovieSelected  } = useGetMovies();

	return <Modal open={!!movieSelected} closeModal={() => removeMovieSelected()}>
		<CardMovie movie={movieSelected} />
	</Modal>
}

export default ModalMovie;