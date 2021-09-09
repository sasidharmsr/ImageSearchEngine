import { combineReducers } from 'redux'
import {reduce} from "./reducer"

export const rootreducer=combineReducers({
    images:reduce,
})

