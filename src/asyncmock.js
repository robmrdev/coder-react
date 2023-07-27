// const misProductos = [
//     {
//         id: "001",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green.avif",
//             "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green-bg1.avif",
//             "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green2.webp",
//             "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green3.webp",
//             "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/karlpetter-green4.webp"],
//         name: "KARLPETTER",
//         price: "55",
//         description: "Chair",
//         idCat: "Chairs",
//         Stock: 20
//     },
//     {
//         id: "002",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black3.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black4.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black5.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/ostano-black6.webp"],
//         name: "ÖSTANÖ",
//         price: "20",
//         description: "Chair",
//         idCat: "Chairs",
//         Stock: 20
//     },
//     {
//         id: "003",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white3.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/lidas-white4.webp",],
//         name: "LIDÅS",
//         price: "45",
//         description: "Chair",
//         idCat: "Chairs",
//         Stock: 20
//     },
//     {
//         id: "004",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige3.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige4.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/chairs/poang-beige5.webp"],
//         name: "POÄNG",
//         price: "70",
//         description: "Armchair",
//         idCat: "Chairs",
//         Stock: 20
//     },
//     {
//         id: "005",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white3.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white4.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/micke-white5.avif"],
//         name: "MICKE",
//         price: "90",
//         description: "Desk, 105 x 50cm",
//         idCat: "Desks",
//         Stock: 20
//     },
//     {
//         id: "006",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white-bg1.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/kallax-white3.webp"],
//         name: "KALLAX",
//         price: "150",
//         description: "Desk combination, white, 77x154x147 cm",
//         idCat: "Desks",
//         Stock: 20
//     },
//     {
//         id: "007",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white-bg1.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white3.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white4.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/malm-white5.webp"],
//         name: "MALM",
//         price: "169",
//         description: "Desk, 140x65 cm",
//         idCat: "Desks",
//         Stock: 20
//     },
//     {
//         id: "008",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white3.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white4.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/desks/lagkapten-white5.webp"],
//         name: "LAGKAPTEN",
//         price: "109",
//         description: "Desk, 120x60 cm",
//         idCat: "Desks",
//         Stock: 20
//     },
//     {
//         id: "009",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white2.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white3.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white4.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/kleppstad-white5.webp"],
//         name: "KLEPPSTAD",
//         price: "149",
//         description: "Wardrobe with 3 doors, white, 117x176 cm",
//         idCat: "Wardrobes",
//         Stock: 20
//     },
//     {
//         id: "010",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/rakkestad-black.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/rakkestad-black-bg1.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/rakkestad-black2.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/rakkestad-black3.avif"],
//         name: "RAKKESTAD",
//         price: "179",
//         description: "Wardrobe with 3 doors, black-brown, 117x176 cm",
//         idCat: "Wardrobes",
//         Stock: 20
//     },
//     {
//         id: "011",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white-bg1.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white2.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white3.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white4.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/brimnes-white5.webp"],
//         name: "BRIMNES",
//         price: "229",
//         description: "Wardrobe with 3 doors, white, 117x190 cm",
//         idCat: "Wardrobes",
//         Stock: 20
//     },
//     {
//         id: "012",
//         img: ["https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige-bg1.webp",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige2.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige3.avif",
//         "https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/items/wardroves/gursken-beige4.avif"],
//         name: "GURSKEN",
//         price: "59",
//         description: "Wardrobe, light beige, 49x55x186 cm",
//         idCat: "Wardrobes",
//         Stock: 20
//     },
// ];


// export const getProductos = () =>{
//     return new Promise ((resolve) =>{
//         setTimeout( () => {
//             resolve(misProductos);
//         }, 0)
//     })
// } 

// export const getUnProductos = (id) =>{
//     return new Promise ((resolve) =>{
//         setTimeout( () => {
//             const producto = misProductos.find(prod=>prod.id===id)
//             resolve(producto);
//         }, 0)
//     })
// } 

// export const getProductosPorCategoria = (idCategory) =>{
//     return new Promise ((resolve) =>{
//         setTimeout( () => {
//             const productosCategory = misProductos.filter(prod => prod.idCat === idCategory)
//             resolve(productosCategory);
//         }, 0)
//     })
// } 