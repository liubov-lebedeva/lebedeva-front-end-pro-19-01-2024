let div;
document.querySelector('input').addEventListener('focus', (e) => {
    div = document.createElement('div');
    div.className = 'ghost';
    let divParent = document.querySelector('div.parent');
    divParent.appendChild(div);
});
document.querySelector('input').addEventListener('blur', (e) => {
    div.remove();
});