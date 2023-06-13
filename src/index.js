import { Menu } from './menu.js';

const contentReference = document.getElementById("content");

const menu1 = document.createElement("div");



// const imageElement = document.createElement("img");
// imageElement.setAttribute('src', menuItem1);
// console.log(imageElement);
// console.log(contentReference);

// contentReference.appendChild(imageElement);

const Food = (() => {
    
    const load = () => {
        // initialize navbar

        
        console.log("in here");
        const menu = Menu();
        menu.start();
        console.log("out here");

    }


    return { load };
    
})();

Food.load();