import client from '../services/apollo';
import {
    REQUEST, REQUEST_CHARACTERS_SUCCESS,
    REQUEST_EPISODES_SUCCESS,
    REQUEST_ERROR, FILTER_CHANGED,
    REQUEST_LOCATIONS_SUCCESS,
    PAGE_CHANGED, CLEAN_ERROR,
    UPDATE_NAME_BOX, ERASE_NAME_FIELD,
    UPDATE_TYPE_BOX, ERASE_TYPE_FIELD
} from './ActionsType';

import { gql } from 'apollo-boost';

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
    
    dispatch({
        type: UPDATE_NAME_BOX,
        payload: updatedName
    })
}

export let cleanErrorAction = () => (dispatch, getState) => {
    
    dispatch({
        type: CLEAN_ERROR,
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
                            type: REQUEST_EPISODES_SUCCESS,
                            payload: data.episodes
                        })
                        break
                    case "locations":
                        dispatch({
                            type: REQUEST_LOCATIONS_SUCCESS,
                            payload: data.locations
                        })
                        break;
                    case "characters":
                        dispatch({
                            type: REQUEST_CHARACTERS_SUCCESS,
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
