import axios, {AxiosResponse} from 'axios'
import {IMovieService} from "../../domain/models/movie";

const getMoviesFetch = async ( lang: string ): Promise<AxiosResponse<IMovieService, any>> => {
	 try {
		 return await axios.get<IMovieService>(`${process.env.REACT_APP_BASE_URL_API}/3/movie/popular?language=${lang}&api_key=${process.env.REACT_APP_TOKEN_API}`)
	 } catch (err) {
		 throw new Error('Error call to service')
	 }
}

export default {
	getMoviesFetch
}