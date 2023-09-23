/*
1) Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
2) Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
3) Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
4) Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.

5) Vyberte obrázek v poslední zprávě (tu vyberte podle id) a změnte jeho atribut src na obrázek images/zprava3-novy.jpg.
*/

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';
const novinkyElement = document.querySelector('.news');
novinkyElement.style.backgroundColor = 'white';
novinkyElement.style.maxWidth = '60rem';

const h1Element = document.querySelector('H1');
h1Element.classList.add('news__title');
h1Element.textContent = 'Aktuální novinky';

const prvniZpravaElement = document.querySelector('#zprava1');
prvniZpravaElement.classList.add('post--main');

const tretiZpravaElement = document.querySelector('#zprava3 .post__picture');

tretiZpravaElement.src = 'images/zprava3-novy.jpg';
