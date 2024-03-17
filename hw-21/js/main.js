const show = () => {
    let body = document.querySelector('body');
    let table = document.querySelector('.table-1');
    let counter = 0;

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            counter++;
            td.textContent = counter.toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};
window.addEventListener('load', show);

const secondShow = () => {
    let body = document.querySelector('body');
    let table = document.querySelector('.table-2');
    let array = Array.from({length: 100}, (_, i) => i + 1);
    let element;


    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            let randomIndex = Math.floor(Math.random() * array.length);
            randomIndex = +randomIndex;
            element = array[randomIndex];
            array.splice(randomIndex, 1);
            td.textContent = element.toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};
window.addEventListener('load', secondShow);
