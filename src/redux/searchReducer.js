import {
    REQUEST, REQUEST_CHARACTERS_SUCCESS,
    REQUEST_EPISODES_SUCCESS,
    REQUEST_ERROR, FILTER_CHANGED,
    REQUEST_LOCATIONS_SUCCESS,
    PAGE_CHANGED, CLEAN_ERROR,
    UPDATE_NAME_BOX, ERASE_NAME_FIELD,
    UPDATE_TYPE_BOX, ERASE_TYPE_FIELD
} from './ActionsType';



let initialData = {
    fetching: false,
    arrChars: [],
    arrLoc: [],
    arrEp: [],
    infoChars: {},
    infoLoc: {},
    infoEp: {},
    typeOfSearch: 'characters',
    searchingPage: 1,
    searchName: '',
    searchType: "",
    error: "clean",
    searchParamsCharacters: {
        name: '',
        type: ''
    },
    searchParamsLocations: {
        name: '',
        type: ''
    },
    searchParamsEpisodes: {
        name: ''
    }
}




export default function reducer(state = initialData, action) {
    switch (action.type) {
        case CLEAN_ERROR:
            return { ...state, error: "clean" }
        case REQUEST:
            return { ...state, fetching: true }
        case REQUEST_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case REQUEST_CHARACTERS_SUCCESS:
            return { ...state, fetching: false, arrChars: action.payload.results, infoChars: action.payload.info, searchParamsCharacters: action.searchParams }
        case REQUEST_LOCATIONS_SUCCESS:
            return { ...state, fetching: false, arrLoc: action.payload.results, infoLoc: action.payload.info, searchParamsLocations: action.searchParams }
        case REQUEST_EPISODES_SUCCESS:
            return { ...state, fetching: false, arrEp: action.payload.results, infoEp: action.payload.info, searchParamsEpisodes: action.searchParams }
        case FILTER_CHANGED:
            return { ...state, typeOfSearch: action.payload, searchingPage: 1 }
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


