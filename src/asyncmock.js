const misProductos = [
    {
        id: "1",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green.avif",
        name: "KARLPETTER",
        price: "55",
        description: "Chair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green-bg1.avif",
    },
    {
        id: "2",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black.avif",
        name: "ÖSTANÖ",
        price: "20",
        description: "Chair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black-bg1.avif",
    },
    {
        id: "3",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white.avif",
        name: "LIDÅS",
        price: "45",
        description: "Chair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white-bg1.avif",
    },
    {
        id: "4",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige.avif",
        name: "POÄNG",
        price: "70",
        description: "Armchair",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige-bg1.avif",
    },
    {
        id: "5",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white.avif",
        name: "MICKE",
        price: "90",
        description: "Desk, 105 x 50cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white-bg1.avif",
    },
    {
        id: "6",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white.avif",
        name: "KALLAX",
        price: "150",
        description: "Desk combination, white, 77x154x147 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white-bg1.webp",
    },
    {
        id: "7",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white.webp",
        name: "MALM",
        price: "169",
        description: "Desk, 140x65 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white-bg1.webp",
    },
    {
        id: "8",
        img: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white.avif",
        name: "LAGKAPTEN",
        price: "109",
        description: "Desk, 120x60 cm",
        hoverImg: "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white-bg1.avif",
    },
];


export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
} 