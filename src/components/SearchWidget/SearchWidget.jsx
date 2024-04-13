import React from 'react';
import SearchComponent from '../SearchComponent/SearchComponent';

const SearchWidget = () => {
    return (
        <div>
            <SearchComponent text={'From'}/>
            <SearchComponent text={'To'}/>
        
        </div>
    );
};

export default SearchWidget;