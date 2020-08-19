import React , {Component} from 'react'
import styles from './search.module.css'

import PropTypes from 'prop-types'






export default class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            selecterOption : "characters"
        };
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render (){
        return (
            <div className={styles.container}>
               
                <label>
                    <input
                        type="text"
                        placeholder="characters"
                        /> 
                </label>
                
            </div>
        )

    }

    
}

