import * as actionTypes from './action';
// import axios from 'axios';

const initialState = {
    menu: {
        home: true,
        about: false,
        projects: false,
        contact: false
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
        default:
            return state;
    }
}

export default reducer