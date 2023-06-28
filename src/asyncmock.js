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
        hoverImg: "https://github.com/robmrivas/coder-react/blob/main/src/img/items/chairs/ostano-black-bg1.jpg",
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
];


export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
} 