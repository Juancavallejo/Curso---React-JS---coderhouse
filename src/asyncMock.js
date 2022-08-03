const items = [
    {
        id: "1",
        name: "Arena del Sahara",
        price: 1000,
        category: "Desiertos",
        stock: "10",
        img: "./src/Assets/Sahara.jpg",
        description:"El más importante y conocido de todos los desiertos del mundo, cubriendo una gran proporción del continente Africano y es increiblemente variado con zonas de estepas, sabanas, montañar muertas, Oasis e inclusive rios. Tiene un poco más de 9 millones de kilometros cuadrados de extensión.",
        container:"Este producto tiene un empaque que lo aisla de la humedad" ,
        delivery: "Una vez realizado el pedido se realizará la entrega del producto en 10 dias habiles"
    },
    {
        id: "2",
        name: "Nieve del desierto Antártico",
        price: 1000,
        category: "Desiertos",
        stock: "10",
        description:"El desierto más grande, más frio, más complejo del mundo. Si bien es nevado, no deja de ser un desierto el cual alcanza temperaturas de -89.2 °C, y con una gigantesca extensión de unos 13.829.430 kilometros cuadrados. El cual si bien hay muy poca flora se encuentra lleno de vida animal. "
    },
    {
        id: "3",
        name: "Sal del desierto de Uyuni",
        price: 1000,
        category: "Desiertos",
        stock: "10",
        description:"Ubicado en Bolivia, es el mayor desierto de sal continuo y alto del mundo. Se ubica a una altitud de 3.650 m.s.n.m y es la mayor reserva del litio del mundo. Un lugar que en epoca de lluvia hace reflejar las mismisimas nubes en su superficie salada"
    },
    {
        id: "4",
        name: "Arena del desierto de Namib",
        price: 1000,
        category: "Desiertos",
        stock: "10",
        description:"Dos mil kilometros de dunas y salares a lo largo de la inspita costa de Namibia, Africa. Tiene dunas una gran zona de dunas rojas de 320 kilometros de longitud y 120 kilometros en la costa central. Dentro del famoso parque Namib-Naukluft se pueden encontrar dunas hasta 360 metros de altura. Las más grandes del mundo. "
    },
    {
        id: "5",
        name: "Arena del desierto de Atacama",
        price: 1000,
        category: "Desiertos",
        stock: "10",
        description:"Un desierto de alta montaña, donde en vez de dunas gran grandes volcanes de más de 6.000 metros de altura. Una gn bodega de minerales estretegicos en el mundo. Es considerada la región más arida del planeta ya que puede estar decadas sin llover y hay zonas donde jamás ha caido una gota de agua con sus cielos siempre azules. "
    },
    {
        id: "6",
        name: "Nieve del Monte Everest",
        price: 1000,
        category: "Nieve",
        stock: "10",
        description:"La montaña más alta del planeta con 8.848 m.s.n.m, muy pocas personas han podido llegar a su cumbre. Muchos han fallecido en el intento"
    },
    {
        id: "7",
        name: "Nieve de K2",
        price: 1000,
        category: "Nieve",
        stock: "10",
        description:"Una montaña con una altura de 8.611 m.s.n.m pero siendo una de las más dificiles de escalar, convirtiendola en una de las montañas más dificiles del mundo, de 4 montañistas que intentan llegan a la cima, uno muere en el intento"
    },   
     {
        id: "8",
        name: "Nieve del Aconcagua",
        price: 1000,
        category: "Nieve",
        stock: "10",
        description:"La montaña más alta de América con una altura de 6.960 m.s.n.m, en Argentina. Es la unica montaña de semejante altura fuera del continente Asitatico"
    },   
     {
        id: "9",
        name: "Nieve del Monte Fuji ",
        price: 1000,
        category: "Nieve",
        stock: "10",
        description:"La máxima cumbre Japonesa, con su altura de 3.776. Una gran atracción turistica del país nipon visible desde Tokio."
    },
    {
        id: "10",
        name: "Nieve del Kilimanjaro ",
        price: 1000,
        category: "Nieve",
        stock: "10",
        description:"En Tanzania, Africa se encuentra una increible montaña nevada rodeada de la selva Africana. Con una altura de 5.892 m.s.n.m permite esquiar en Africa a la vez que disfrutar de su gran riqueza y belleza natural. Se estima que para el 2050 ya no quedé más capa nevada."
    },
    {
        id: "11",
        name: "Nieve de Mont Blanc",
        price: 1000,
        category: "Nieve",
        stock: "10",
        description:"Atravesado por un tunel que constituye un paso fronterizo entre Francia e Italia, se eleva esta montaña a 4.810 m.s.n.m. Considerado como la montaña Maldita durante la edad Media por la creencia de que en su interior convivian fuerzas infernales y brujos"
    },
    {
        id: "12",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },
    {
        id: "13",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },   
     {
        id: "14",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },   
     {
        id: "15",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },
    {
        id: "13",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },
    {
        id: "14",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },     
    {
        id: "15",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },    
    {
        id: "16",
        name: "Frutos de ",
        price: 1000,
        category: "Selvas",
        stock: "10",
        description:"Descripción de arena del sahara"
    },
]

export const getItemsBack = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 500);
    })
}
export const getItemsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(items.filter (prod => prod.category === categoryId ))
        }, 500);
    })
}

export const getItemsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(items.find (prod => prod.id === id))
        }, 500);
    })
}

