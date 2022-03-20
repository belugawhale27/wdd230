const listsize = document.querySelector('#listsize');
const buildButton = document.querySelector('button');
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

/*
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
    });

    input.focus();
});
*/