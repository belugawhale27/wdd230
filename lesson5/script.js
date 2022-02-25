const listsize = document.querySelector('#listsize');
const buildButton = document.querySelector('');
const list = document.querySelector('#userlist');

buildButton.addEventListener('click', () => {
    // get the list size
    let size = Number(listsize.value);
    // build HTML
    for (let i = 1; i<= size; i++) {
        let li = document.createElement('li');
        li.textContent = `Item: ${i}`;
        list.appendChild(li);
    }
    
});

