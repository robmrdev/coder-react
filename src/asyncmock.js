const misProductos = [
    {
        id: "001",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green.avif",
        name: "KARLPETTER",
        price: "55",
        description: "Chair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green-bg1.avif",
    },
    {
        id: "002",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black.avif",
        name: "ÖSTANÖ",
        price: "20",
        description: "Chair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black-bg1.avif",
    },
    {
        id: "003",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white.avif",
        name: "LIDÅS",
        price: "45",
        description: "Chair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white-bg1.avif",
    },
    {
        id: "004",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige.avif",
        name: "POÄNG",
        price: "70",
        description: "Armchair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige-bg1.avif",
    },
    {
        id: "005",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white.avif",
        name: "MICKE",
        price: "90",
        description: "Desk, 105 x 50cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white-bg1.avif",
    },
    {
        id: "006",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white.avif",
        name: "KALLAX",
        price: "150",
        description: "Desk combination, white, 77x154x147 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white-bg1.webp",
    },
    {
        id: "007",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white.webp",
        name: "MALM",
        price: "169",
        description: "Desk, 140x65 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white-bg1.webp",
    },
    {
        id: "008",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white.avif",
        name: "LAGKAPTEN",
        price: "109",
        description: "Desk, 120x60 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white-bg1.avif",
    },
    {
        id: "009",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white.avif",
        name: "KLEPPSTAD",
        price: "149",
        description: "Wardrobe with 3 doors, white, 117x176 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white-bg1.avif",
    },
    {
        id: "010",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/rakkestad-black.avif",
        name: "RAKKESTAD",
        price: "179",
        description: "Wardrobe with 3 doors, black-brown, 117x176 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/rakkestad-black-bg1.avif",
    },
    {
        id: "011",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white.webp",
        name: "BRIMNES",
        price: "229",
        description: "Wardrobe with 3 doors, white, 117x190 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white-bg1.webp",
    },
    {
        id: "012",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige.webp",
        name: "GURSKEN",
        price: "59",
        description: "Wardrobe, light beige, 49x55x186 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige-bg1.webp",
    },
];


export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
} 