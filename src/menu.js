import './style.css';
import { Card, HoverText, HoverImage } from './utils.js';
import menuItem1 from './assets/Chicken-Biryani.jpg';
import menuItem2 from './assets/chicken-burger.jpg';
import menuItem3 from './assets/chicken-momos.jpg';
import menuItem4 from './assets/chicken-ramen.jpg';

const Menu = () => {

    const _MenuItem = (img, desc) => {
        return { img, desc };
    }

    const _menuCreate = (item1, item2) => {
        let menuContainer = document.createElement("div");
        menuContainer.classList = 'menu-container';

        item1Card = Card(item1.img, item1.desc);
        item2Card = Card(item2.img, item2.desc);

        return menuContainer;
    }

    const start = () => {
        console.log("started");

        //initialize menu items

        const biryani = _MenuItem(menuItem1, "The Kings Indian");
        const chickenBurger = _MenuItem(menuItem2, "The Mouthwatering American");
        const chickenMomos = _MenuItem(menuItem3, "The Beast of the East");
        const chickenRamen = _MenuItem(menuItem4, "The staple of the SouthEast");

        const menu1 = _menuCreate(biryani, chickenBurger);
        const menu2 = _menuCreate(chickenMomos, chickenRamen);
        
        // create menu-container

        // create menu div
        // create menu-item
        // create menu-item

        // create menu div
        // create menu-item
        // create menu-item

        // create menu div
        // create menu-item
        // create menu-item

        // create menu div
        // create menu-item
        // create menu-item
    }

    const end = () => {
        console.log("ended");
        // delete menu container

    }

    return { start, end };
};

export { Menu };




