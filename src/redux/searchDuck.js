import ApolloClient, { gql } from 'apollo-boost'

//constants
let initialData = {
    fetching: false,
    arr: [],
    info: {},
    typeOfSearch: 'characters',
    searchingPage: 1,
    searchName: '',
    searchType: "",
    error: "clean"
}

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

const REQUEST = "REQUEST"
const REQUEST_SUCCESS = "REQUEST_SUCCESS"
const REQUEST_ERROR = "REQUEST_ERROR"

const FILTER_CHANGED = "FILTER_CHANGED"
const PAGE_CHANGED = "PAGE_CHANGED"

const ERASE_STORE = "ERASE_STORE"


const UPDATE_NAME_BOX = "UPDATE_NAME_BOX"
const ERASE_NAME_FIELD = "ERASE_NAME_FIELD"

const UPDATE_TYPE_BOX = "UPDATE_TYPE_BOX"
const ERASE_TYPE_FIELD = "ERASE_TYPE_FIELD"
//Reducer

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

export let eraseNameFieldAction = () => (dispatch, getState) => {
    dispatch({
        type: ERASE_NAME_FIELD,
        payload: ''
    })
}

export let eraseTypeFieldAction = () => (dispatch, getState) => {
    dispatch({
        type: ERASE_TYPE_FIELD,
        payload: ''
    })
}

export let updateTypeAction = (updatedType) => (dispatch, getState) => {

    dispatch({
        type: UPDATE_TYPE_BOX,
        payload: updatedType
    })
}

export let updateNameAction = (updatedName) => (dispatch, getState) => {
    console.log(updatedName)
    dispatch({
        type: UPDATE_NAME_BOX,
        payload: updatedName
    })
}

export let eraseStoreAction = () => (dispatch, getState) => {
    dispatch({
        type: ERASE_STORE,
        payload: []
    })
}

export let setPageAction = (pageNum) => (dispatch, getState) => {


    dispatch({
        type: PAGE_CHANGED,
        payload: pageNum
    })


}

export let setFilterAction = (newFilter) => (dispatch, getState) => {


    dispatch({
        type: FILTER_CHANGED,
        payload: newFilter
    })


}

export function getSearchAction() { 
    return (dispatch, getState) => { 
        

        let { typeOfSearch, searchingPage, searchName, searchType } = getState().search;
        let searchCriteria = '';
        let requestProps = ``
        switch (typeOfSearch) {
            case "episodes":
                searchCriteria = `name: "${searchName}"`
                requestProps =
                    `
                        name
                        created
                        episode
                        characters{
                            name
                        }
              
                    `
                break
            case "locations":
                searchCriteria = `name: "${searchName}" type: "${searchType}"`
                requestProps =
                    `
                        name
                        type
                        dimension
                        residents{
                            name
                        }
              
                    `
                break;
            case "characters":
                searchCriteria = `name: "${searchName}" type: "${searchType}"`
                requestProps =
                    `
                        name
                        gender
                        species
                        type
                        image
              
                    `
                break;
            default:
                searchCriteria = `name: "${searchName}" type: "${searchType}"`
                requestProps =
                    `
                        name
                        gender
                        species
                        type
                        image
              
                    `
                break;
        }
        let query = gql`
        query {
            ${typeOfSearch}(filter:{${searchCriteria}} page:${searchingPage}){
            info {
              count
              pages
              next
            }
            results{
              ${requestProps}
            }
          }
        }
        `
        dispatch({
            type: REQUEST,
            variables: {}
        });

        return client.query({ 
            query
        })
            .then(({ data }) => {

                switch (typeOfSearch) {
                    case "episodes":
                        dispatch({
                            type: REQUEST_SUCCESS,
                            payload: data.episodes
                        })
                        break
                    case "locations":
                        dispatch({
                            type: REQUEST_SUCCESS,
                            payload: data.locations
                        })
                        break;
                    case "characters":
                        dispatch({
                            type: REQUEST_SUCCESS,
                            payload: data.characters
                        })
                        break;
                    default:
                        break;
                }
            })
            .catch((err) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: err
                })
            })

    }
}
