const show = (array, tableNumber) => {
    let table = document.querySelector(tableNumber);
    let counter = 0;

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.textContent = array[counter].toString();
            counter++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let array1 = Array.from({length: 100}, (_, i) => i + 1);
let array2 = Array.from({length: 100}, (_, i) => i + 1);
shuffleArray(array2);
window.addEventListener('load', () => {
        show(array1, '.table-1');
        show(array2, '.table-2');
    }
);