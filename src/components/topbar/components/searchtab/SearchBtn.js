import React from 'react';

const SearchBtn = ({toggleInput, test})=> {
    return(
        <button onClick={() => toggleInput()} id="contactSearchBtn" className={'contactSearchBtn'+ (test? '1': '')} data-toggle="on">
            <i className="fas fa-search"></i>
        </button>
    );
}

export default SearchBtn;