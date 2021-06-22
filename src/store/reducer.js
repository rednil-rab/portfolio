import * as actionTypes from './action';
// import axios from 'axios';

const initialState = {
    menu: {
        home: true,
        about: false,
        projects: false,
        contact: false
    },
    height: {
        home: null,
        about: null,
        projects: null,
        contact: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBLE_PAGE:

            let tempMenu = {
                home: false,
                about: false,
                projects: false,
                contact: false
            }
            switch (action.value) {
                case 'home':
                    tempMenu.home = true;
                    break;
                case 'about':
                    tempMenu.about = true;
                    break;
                case 'projects':
                    tempMenu.projects = true;
                    break;
                case 'contact':
                    tempMenu.contact = true;
                    break;
            }

            return {
                ...state,
                menu: tempMenu
            }
        case actionTypes.SET_SECTION_HEIGHT:
            let tempHeight = state.height;
            switch (action.section) {
                case 'home':
                    tempHeight.home = action.value;
                    break;
                case 'about':
                    tempHeight.about = action.value;
                    break;
                case 'projects':
                    tempHeight.projects = action.value;
                    break;
                case 'contact':
                    tempHeight.contact = action.value;
                    break;
            }
            return {
                ...state,
                menu: tempHeight
            }
        default:
            return state;
    }
}

export default reducer