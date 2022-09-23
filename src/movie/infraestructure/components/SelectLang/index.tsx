import {setLang} from "../../store/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

const SelectLang = () => {

	const dispatch = useDispatch()
	const { lang } = useSelector((state: RootState) => state.movie)

	return <select value={lang} onChange={(event) => dispatch(setLang(event.target.value))}>
		<option value='es'>Es</option>
		<option value='en'>En</option>
	</select>
}

export default SelectLang