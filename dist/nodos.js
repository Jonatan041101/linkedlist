import { d } from "./utils/variables.js";
let id = 0;
export function nodoLinkedlist(value, viewArrow) {
    const arrow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='30' height='30'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
    const $li = d.createElement('li');
    const $div = d.createElement('div');
    $li.classList.add('linkedlist__li');
    $div.classList.add('linkedlist__value');
    $div.innerHTML = `${value}`;
    $li.appendChild($div);
    // Si le damos el boolean en true creamos la flecha a parte del circulo de la linkedlist
    if (viewArrow) {
        const $id = d.createElement('div');
        $id.classList.add('linkedlist__id');
        id += 1;
        $li.id = `${id}`;
        $id.innerHTML = `<span class="linkedlist__aux">I</span>${id}`;
        $div.appendChild($id);
        const $arrow = d.createElement('div');
        $arrow.classList.add('linkedlist__arrow');
        $arrow.innerHTML = arrow;
        $li.appendChild($arrow);
    }
    $li.style.animationName = 'addLinkedist';
    $li.style.animationDuration = '0.5s';
    $li.style.animationTimingFunction = 'ease';
    $li.style.animationFillMode = 'forwards';
    return $li;
}
