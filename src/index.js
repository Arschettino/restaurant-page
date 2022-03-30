import "./style.css";

import {displayHome} from './home.js';
import { displayMenu } from './menu.js';
import { displayContact } from './contact.js';

const homeTab = document.querySelector('button#home');
const menuTab = document.querySelector('button#menu');
const contactTab = document.querySelector('button#contact');

const content = document.querySelector('div.content');

homeTab.addEventListener('click', event => {
    displayHome(content);
});
menuTab.addEventListener('click', event => {
    displayMenu(content);
});
contactTab.addEventListener('click', event => {
    displayContact(content);
});

displayHome(content);
