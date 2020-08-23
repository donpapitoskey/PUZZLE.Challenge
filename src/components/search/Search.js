import React , {Component} from 'react'
import styles from './search.module.css'

import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

 



export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            selecterOption : "characters"
        }; 
    }
    render (){
        return (
            <div className={styles.container}>
               
                
                    <TextField  
                    id="standard-full-width"
                    fullWidth
                        InputProps={{
                            endAdornment:(
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        //className="input"
                        label="Search..."
                        /> 
                
                
            </div>
        )

    }

    
}

