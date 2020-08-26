import ApolloClient, { gql } from 'apollo-boost'

//constants
let initialData = {
    fetching: false,
    arr: [],
    info: {},
    typeOfSearch: 'episodes',
    searchingPage: 1
}

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

const REQUEST = "REQUEST"
const REQUEST_SUCCESS = "REQUEST_SUCCESS"
const REQUEST_ERROR = "REQUEST_ERROR"

const FILTER_CHANGED = "FILTER_CHANGED"
const PAGE_CHANGED = "PAGE_CHANGED"

//Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case REQUEST:
            return { ...state, fetching: true } //lo que devuelvo
        case REQUEST_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case REQUEST_SUCCESS:
            return { ...state, fetching: false, arr: action.payload.results, info: action.payload.info }
        case FILTER_CHANGED:
            return { ...state, typeOfSearch: action.payload }
        case PAGE_CHANGED:
            return { ...state, searchingPage: action.payload }
        default:
            return state
    }

}



//Actions 
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

export function getSearchAction() { // action creator
    return (dispatch, getState) => { //recibe dispatch y get state. dispatch hace la accion getstate brinda store :D
        //return 

        let { typeOfSearch, searchingPage } = getState().search;
        let requestProps = ``
        switch (typeOfSearch) {
            case "episodes":
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

        }

        let query = gql`
        query {
            ${typeOfSearch}(filter:{name:""} page:${searchingPage}){
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

        return client.query({ // objeto al que se le pasan configuraciones
            query
        })
            .then(({ data }) => {
                //console.log(data);
                dispatch({
                    type: REQUEST_SUCCESS,
                    payload: data.episodes
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: REQUEST_ERROR,
                    payload: err
                })
            })

    }
}
