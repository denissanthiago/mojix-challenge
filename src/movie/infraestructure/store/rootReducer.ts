import { combineReducers } from '@reduxjs/toolkit'

import movieReducer from './movieSlice'

const rootReducer = combineReducers({
	movie: movieReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer