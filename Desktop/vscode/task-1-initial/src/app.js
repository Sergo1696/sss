import {getRandomColor} from './utils';

export default function initApp () {
    const btn = document.createElement('button');
    btn.className = 'button';
    btn.textContent = 'Изменить цвет страницы';
    document.body.append(btn);

    btn.addEventListener('click', () => {
        getRandomColor();
    })
}
