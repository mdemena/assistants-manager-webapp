import {combineReducers} from 'redux';
import AssistantReducer from './assistant.reducer';

const rootReducer = combineReducers({
    assistant: AssistantReducer
})

export default rootReducer;