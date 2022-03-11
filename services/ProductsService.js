const PRODUCTS = [
    {
        id: 100,
        name: 'Onions',
        price: 2,
        unit:'KG',
        image: require('../assets/products/onions.jpeg'),
        description: 'The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010. Its close relatives include garlic, scallion, leek, chive, and Chinese onion.'
    },
    {
        id: 101,
        name: 'Carrots',
        price: 4,
        unit:'KG',
        image: require('../assets/products/carrots.jpeg'),
        description: 'The carrot is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.'
    },
    {
        id: 102,
        name: 'Potatoes',
        price: 5,
        unit:'KG',
        image: require('../assets/products/potatoes.jpeg'),
        description: 'Potatoes are a nutrient-dense powerhouse, that provides the energy, potassium and vitamin C you need to fuel your day.'
    },
    {
        id: 103,
        name: 'Tomatoes',
        price: 5,
        unit:'KG',
        image: require('../assets/products/tomatos.jpeg'),
        description: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Mexican Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.'
    }

];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

