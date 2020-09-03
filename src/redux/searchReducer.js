import {REQUEST, REQUEST_SUCCESS
, REQUEST_ERROR, FILTER_CHANGED,
PAGE_CHANGED, ERASE_STORE,
UPDATE_NAME_BOX, ERASE_NAME_FIELD,
UPDATE_TYPE_BOX, ERASE_TYPE_FIELD} from './ActionsType';



//constants

let initialData = { //reducer
    fetching: false,
    arr: [],
    info: {},
    typeOfSearch: 'characters',
    searchingPage: 1,
    searchName: '',
    searchType: "",
    error: "clean"
}



//actions types en una carpeta y los importo - Boiler plate estructura base para proyecto desde 0

//Reducer es otra cosa
//Reducers
//  --Actions
//  --ActionsType
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case ERASE_STORE:
            return { ...state, arr: action.payload, info: action.payload, error: "clean" }
        case REQUEST:
            return { ...state, fetching: true }
        case REQUEST_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case REQUEST_SUCCESS:
            return { ...state, fetching: false, arr: action.payload.results, info: action.payload.info }
        case FILTER_CHANGED:
            return { ...state, typeOfSearch: action.payload }
        case PAGE_CHANGED:
            return { ...state, searchingPage: action.payload }
        case UPDATE_NAME_BOX:
            return { ...state, searchName: action.payload }
        case UPDATE_TYPE_BOX:
            return { ...state, searchType: action.payload }
        case ERASE_TYPE_FIELD:
            return { ...state, searchType: action.payload }
        case ERASE_NAME_FIELD:
            return { ...state, searchName: action.payload }
        default:
            return state
    }

}

//Actions 

