
const Menu = () => {

    const _MenuItem = (imageRef, title, description) => {
        return { imageRef, title, description };
    };

    // initialization
    const food = {
        item1 : _MenuItem(image1, "Title", "Description"),
        item2 : _MenuItem(image2, "", ""),
        item3 : _MenuItem(image3, "", ""),
        item4 : _MenuItem(image4, "", ""),
    };
    
    const serve = () => {

    }

    const remove = () => {

    }

    return { food, serve, remove };
    
};

export { Menu };
