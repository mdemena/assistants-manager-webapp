import actionTypes from './action.types';

class AssistantActions{
    static listByGame(game) {
        return {
            type: actionTypes.LOAD_ASSISTANTS,
            game
        }
    }  
    static get(id) {
        return {
            type: actionTypes.LOAD_ASSISTANT,
            id
        }
    }  
    static add(assistant) {
        return {
            type: actionTypes.ADD_ASSISTANT,
            assistant
        }
    }  
    static udapte(assistant) {
        return {
            type: actionTypes.EDIT_ASSISTANT,
            assistant
        }
    }  
}

export default AssistantActions
