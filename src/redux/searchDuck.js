import ApolloClient, { gql } from 'apollo-boost'

//constants
let initialData = {
    fetching: false,
    array: [],
    typeOfSearch: ''
}

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

const REQUEST = "REQUEST"
const REQUEST_SUCCESS = "REQUEST_SUCCESS"
const REQUEST_ERROR = "REQUEST_ERROR"


//Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case REQUEST:
            return { ...state, fetching: true } //lo que devuelvo
        case REQUEST_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case REQUEST_SUCCESS:
            return { ...state, fetching: false, array: action.payload }
        default:
            return state
    }

}



//Actions 

export function getSearchAction() { // action creator
    return (dispatch, getState) => { //recibe dispatch y get state. dispatch hace la accion getstate brinda store :D
        //return 
        let typeOfSearch =  "episodes";
        let query = gql`
        query {
            ${typeOfSearch}(filter:{name:"a"}){
            info {
              count
                pages
              next
            }
            results{
              name
              created
              episode
              characters{
                name
              }
              
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
                console.log(data);
                dispatch({
                    type: REQUEST_SUCCESS,
                    payload: data.episodes.results
                })
            })
            .catch((err) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: err.responde.message
                })
            })

    }
}
