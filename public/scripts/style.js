//contact search bar animation
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



//message input tab (rich-text)custom paste function for editable html content
const editorEle = document.getElementById('message');

// Handle the `paste` event
editorEle.addEventListener('paste', function(e) {
    // Prevent the default action
    e.preventDefault();

    // Get the copied text from the clipboard
    const text = (e.clipboardData)
        ? (e.originalEvent || e).clipboardData.getData('text/plain')
        // For IE
        : (window.clipboardData ? window.clipboardData.getData('Text') : '');
    
    if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, text);
    } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
});