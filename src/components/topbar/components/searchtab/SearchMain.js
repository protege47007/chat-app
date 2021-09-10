import React from 'react';
import SearchBtn from './SearchBtn';
import SearchTab from './SearchInput';

const SearchMain = ()=>{

    const [test, setTest] = React.useState(false);

    const toggleInput = React.useCallback(() => {
        
        if(test){
            setTimeout(() => {
                setTest(false);
            }, 2000);
            
        } else {
            setTest(true)
        }
    }, [test]);

    return(
        <div id="contactSearch">
            <SearchBtn toggleInput={() => toggleInput()} test={test} />
            <SearchTab toggleInput={() => toggleInput()} test={test} />
        </div>
    );
}

export default SearchMain;