const searchBtn = document.querySelector('#contactSearchBtn');
const searchField = document.querySelector('#contactSearchField');

let toggle = searchBtn.getAttribute('data-toggle');
console.log(toggle);

searchBtn.addEventListener('click', ()=>{
    if(toggle === 'on'){
        toggle = 'off';
        searchBtn.setAttribute('data-toggle', toggle);
        console.log('click',toggle);
        searchField.classList.remove('contactSearchField');
        searchBtn.classList.remove('contactSearchBtn');

        searchField.classList.add('contactSearchField1');
        searchField.setAttribute('autofocus', true);
        searchBtn.classList.add('contactSearchBtn1');
    }
});

searchField.addEventListener('blur', ()=>{
    console.log('blur');
    setTimeout(() => {
        if (toggle === 'off') {
            toggle = 'on';
            searchBtn.setAttribute('data-toggle', toggle);
            console.log('blur',toggle);
        searchField.classList.remove('contactSearchField1');
        searchBtn.classList.remove('contactSearchBtn1');

        searchField.classList.add('contactSearchField');
        searchBtn.classList.add('contactSearchBtn');
        }
    }, 500);
}, true);