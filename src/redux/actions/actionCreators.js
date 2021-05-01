import actioTypes from './actionTypes';

export function addAssistant(assistant) {
    return {
        type: actioTypes.ADD_ASSISTANT,
        assistant
    }
}

