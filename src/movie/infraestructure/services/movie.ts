import axios, {AxiosResponse} from 'axios'
import {IMovieService} from "../../domain/models/movie";

const BASE_URL = `https://api.themoviedb.org`;
const API_KEY = `1b501bbda107113acc653f328a2e935d`;

const getMoviesFetch = async ( lang: string ): Promise<AxiosResponse<IMovieService, any>> => {
	 try {
		 return await axios.get<IMovieService>(`${BASE_URL}/3/movie/popular?language=${lang}&api_key=${API_KEY}`)
	 } catch (err) {
		 throw new Error('Error call to service')
	 }
}

export default {
	getMoviesFetch
}