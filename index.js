let input = document.querySelector('input');
let addBtn = document.querySelector('.btn-add');
let ul = document.querySelector('ul');
let empty = document.querySelector('.empty');

addBtn.addEventListener('click', (btn) => {
    btn.preventDefault();
    
    let text = input.value;

    if(text !== ''){
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = 'none';
    }
});

let addDeleteBtn = () => {
    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (btn) => {
        let item = btn.target.parentElement;
        ul.removeChild(item);

        let items = document.querySelector('li');

        if(item.length === 0){
            empty.style.display = 'block';
        }
    });
    return deleteBtn;
};

