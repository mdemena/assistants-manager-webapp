import actionTypes from '../actions/actionTypes';
import AssistantService from '../../services/assistant/AssistantService';

function assistantsReducer(assistants = [], action){
    switch (action) {
        case actionTypes.ADD_ASSISTANT:
            return [AssistantService.create(action.assistant)];
        default:
            return assistants;
    }
}