import actionTypes from '../actions/action.types';
import AssistantService from '../../services/assistant/AssistantService';

function assistantReducer(assistants = [], action){
    switch (action) {
        case actionTypes.LOAD_ASSISTANTS:
            return AssistantService.listByGame(action.game);
        case actionTypes.LOAD_ASSISTANT:
            return AssistantService.get(action.id);
        case actionTypes.ADD_ASSISTANT:
            return AssistantService.create(action.assistant);
        case actionTypes.EDIT_ASSISTANT:
            return AssistantService.save(action.assistant);
        default:
            return assistants;
    }
}

export default assistantReducer;