import React from 'react';

const SearchTab = ({toggleInput,test})=>{
    
    React.useEffect(() => {
        if(test){
            setTimeout(() => {
                document.querySelector('.contactSearchField1').setAttribute('autofocus', true);
            }, 300);
        
        }

    }, [test])
    return(
        <input type="search" onBlur={() => toggleInput()} name="search" id="contactSearchField" className={'contactSearchField'+ (test ? '1':'')} placeholder="Search" />
    );
}

export default SearchTab;