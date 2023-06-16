import { MenuCard } from "./utils.js";
import chickenBiryani from './image_assets/chicken-biryani.jpg';
import chickenBurger from './image_assets/chicken-burger.jpg';
import chickenMomos from './image_assets/chicken-momos.jpg';
import chickenRamen from './image_assets/chicken-ramen.jpg';
import './stylesheets/menu.css';

const Menu = () => {

    const _MenuItem = (imageRef, title, description) => {
        return { imageRef, title, description };
    };

    const foods = {
        item1: _MenuItem(chickenBiryani, "Chicken Biryani", "A tantalizing blend of fragrant basmati rice, tender chicken pieces, and a medley of aromatic spices, Chicken Biryani is a beloved culinary masterpiece that will transport your taste buds to the vibrant streets of India"),
        item2: _MenuItem(chickenBurger, "Chicken Burger", "Sink your teeth into a true American classic with our mouthwatering American Chicken Burger, featururing a juicy, flame-grilled chicken patty nestled between two fluffy, toasted buns."),
        item3: _MenuItem(chickenMomos, "Chicken Momos", "Made with succulent minced chicken that has been seasoned with a delicate blend of herbs and spices. Served with our signature dipping sauce, these bite-sized treats are perfect for sharing"),
        item4: _MenuItem(chickenRamen, "Chicken Ramen", "This Japanese culinary masterpiece combines tender chicken, springy noodles, and a rich, savory broth to create a bowl of pure bliss. Each spoonful is a symphony aromatic spices and umami-rich ingredients."),
    };

    const serve = containerElement => {

        for (let key in foods) {
            let cardObject = MenuCard(foods[key].imageRef, foods[key].title, foods[key].description);
            let cardElement = cardObject.initialize(cardObject.imageRef, cardObject.titleText, cardObject.descriptionText);
            containerElement.appendChild(cardElement);
        }
    }

    const remove = () => {
        // delete food cards
    }

    return { serve, remove };

};

export { Menu };
