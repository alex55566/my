import { el } from 'redom';
import master from './assets/images/Master.jpeg';
import mir from './assets/images/Mir.jpg';
import visa from './assets/images/Visa.jpg';

export let masterLogo = el('img', { class: "page-header-logo", src: master })
export let mirLogo = el('img', { class: "page-header-logo", src: mir })
export let visaLogo = el('img', { class: "page-header-logo", src: visa })

