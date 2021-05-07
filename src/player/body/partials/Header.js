import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import {useDataLayerValue} from "../../../data/DataLayer";
import SearchForm from "./SearchForm";
//import SearchResult from "./SearchResult";

function Header({ spotify }) {
    const [{user}] = useDataLayerValue();


    return (
        <div className="header">
            <div className="header__left">
                <SearchForm />
                <SearchIcon />
                <input
                    placeholder='Recherchez un titre, un artiste ou un album'
                    type="text"/>
                <a href="http://localhost:3001/redirect"> Go</a>    
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url } alt={user?.display_name} />
                <h4>{ user?.display_name }</h4>
            </div>
        </div>
    )
}

export default Header