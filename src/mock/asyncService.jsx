const products = [
    {
        id: '01',
        name: 'Sedum Rubrotinctum Aurora',
        price: 1000,
        description: 'Maceta N° 8',
        stock: 15,
        category: 'suculentas',
        img: '../suculenta_01.jpg'
    },
    {
        id: '02',
        name: 'Cotyledon Orbiculata Oophylla',
        price: 3000,
        description: 'Maceta N° 10',
        stock: 5,
        category: 'suculentas',
        img: '../suculenta_02.jpg'
    },
    {
        id: '03',
        name: 'Opuntia Basilaris',
        price: 2000,
        description: 'Maceta N° 10',
        stock: 4,
        category: 'cactus',
        img: '../cactus_01.jpg'
    },
    {
        id: '04',
        name: 'Tephrocactus Geometricus',
        price: 8000,
        description: 'Maceta N° 8',
        stock: 10,
        category: 'cactus',
        img: '../cactus_02.jpg'
    },
    {
        id: '05',
        name: 'Maceta Perezoso',
        price: 10000,
        description: 'Maceta N° 10',
        stock: 6,
        category: 'insumos',
        img: '../insumo_01.jpg'
    },
    {
        id: '06',
        name: 'Set de Herramientas',
        price: 3000,
        description: 'El set incluye: 1 pala de cubeta, 1 pala, 1 pala puntiaguda y 1 removedor de plántulas.',
        stock: 12,
        category: 'insumos',
        img: '../insumo_02.jpg'
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false

        setTimeout(()=> {
            if(error){
                reject('no hay data')
            }else{
                resolve(products)
            }
        },3000)
    })
}

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        let productFound= products.find((prod)=> prod.id === id)
        setTimeout(()=>{
            resolve(productFound)
        },1500)
    })
}