import React, { Component } from 'react';
import styles from './lister.module.css';
import Card from '../card/Card';
import { connect } from 'react-redux';

class Lister extends Component {

    render() {
        const { searchParamsLocations, searchParamsEpisodes, searchParamsCharacters, fetching, err, characters, filterOption, locations, episodes } = this.props;
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
        if (err !== "clean") {
            return (
                <div className={styles.containerError}>
                    <h2>Sorry Morty. Your search could not be achieved :(</h2>
                    <h3>Give it another try with new values :D</h3>
                </div>)
        }
            return (
                <div className={styles.listerContainer}>
                    {searchWords.name && !searchWords.type && <h3 style={{textAlign:"center"}}>Results for search: Name = "{searchWords.name}"</h3>}
                    {searchWords.type && !searchWords.name && <h3 style={{textAlign:"center"}}>Results for search: Type = "{searchWords.type}"</h3>}
                    {searchWords.name && searchWords.type && <h3 style={{textAlign:"center"}}>Results for search: Name = "{searchWords.name}" and Type = "{searchWords.type}"</h3>}
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
            );
    };
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
        searchParamsCharacters: store.search.searchParamsCharacters,
    };
};

export default connect(mapStateToProps)(Lister);
