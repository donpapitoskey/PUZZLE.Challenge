import React, { Component } from 'react'
import styles from './lister.module.css'
import Card from '../card/Card';
import { connect } from 'react-redux';

class Lister extends Component {




    render() {
        let { searchParamsLocations, searchParamsEpisodes, searchParamsCharacters, fetching, err, characters, filterOption, locations, episodes } = this.props;
        let retrievedArray = [];
        let searchWords = {};
        switch (filterOption) {
            case "locations":
                retrievedArray = locations;
                searchWords = searchParamsLocations;
                break;
            case "episodes":
                retrievedArray = episodes;
                searchWords = searchParamsEpisodes;
                break;
            case "characters":
                retrievedArray = characters;
                searchWords = searchParamsCharacters;
                break;
            default:
                break
        }
        if (fetching) {
            return (
                <div className={styles.container}>
                    <h2>Loading ...</h2>
                </div>
            )
        }
        if (retrievedArray && err === "clean") {

            return (
                <div className={styles.listerContainer}>
                    <h2>{searchWords.name && !searchWords.type ? `Return for search: Name = "${searchWords.name}"`:null}</h2>
                    <h2>{searchWords.type && !searchWords.name  ? `Return for search: Type = "${searchWords.type}"`:null}</h2>
                    <h2>{searchWords.name && searchWords.type ? `Return for search: Name = "${searchWords.name}" and Type = ${searchWords.type}`:null}</h2>
                    <div className={styles.container} >

                        {retrievedArray.map(element => (
                            <Card
                                value={element}
                                name={element.name}
                                episode={element.episode}
                                created={element.created}
                                type={element.type}
                                dimension={element.dimension}
                                image={element.image}
                            />
                        ))}
                    </div>
                </div>
            )
        }
        if (err !== "clean") {
            return (
                <div className={styles.containerError}>
                    <h2>Sorry Morty. Your search could not be achieved :(</h2>
                    <h3>Give it another try with new values :D</h3>
                </div>)
        }

    }
};

function mapStateToProps(store) {
    return {
        filterOption: store.search.typeOfSearch,
        characters: store.search.arrChars,
        locations: store.search.arrLoc,
        episodes: store.search.arrEp,
        fetching: store.search.fetching,
        err: store.search.error,
        searchParamsLocations: store.search.searchParamsLocations,
        searchParamsEpisodes: store.search.searchParamsEpisodes,
        searchParamsCharacters: store.search.searchParamsCharacters
    }
};

export default connect(mapStateToProps)(Lister)


