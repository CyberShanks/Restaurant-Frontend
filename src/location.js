import { LocationCard } from "./utils.js";
import restaurantFront from './image_assets/restaurant.jpg';
import './stylesheets/loc.css'


const Loc = () => {

    const show = containerElement => {
        let locationCard = LocationCard(restaurantFront, "Join us at the Party!", "304 Hollywood Boulevard, Raskins Metroview, Ammenai 16RE4829");
        let locationElement = locationCard.initialize(locationCard.image, locationCard.title, locationCard.address);
        containerElement.appendChild(locationElement);
    }

    return { show };
}

export { Loc };