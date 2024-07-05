// index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.getElementById('container');
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw { status: response.status };
            }
            const allProducts = yield response.json(); // Obtener todos los productos
            // Filtrar y limitar a 10 productos distribuidos en distintas categorías
            const selectedProducts = selectProducts(allProducts);
            // Limpiar el contenedor antes de agregar nuevos elementos
            container.innerHTML = '';
            // Iterar sobre cada producto seleccionado
            selectedProducts.forEach((product) => {
                // Crear tarjeta (card) para cada producto
                const card = createProductCard(product);
                // Agregar la tarjeta al contenedor
                container.appendChild(card);
            });
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    });
}
// Función para crear una tarjeta (card) para un producto dado
function createProductCard(product) {
    // Crear elementos de la tarjeta
    const card = document.createElement('div');
    card.classList.add('card');
    // Imagen del producto
    const image = document.createElement('img');
    image.src = product.images[0]; // Suponiendo que la primera imagen es la principal
    image.alt = product.title;
    card.appendChild(image);
    // Contenedor para detalles del producto
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('card-details');
    card.appendChild(detailsContainer);
    // Título del producto
    const title = document.createElement('h2');
    title.textContent = product.title;
    detailsContainer.appendChild(title);
    // Precio del producto
    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;
    detailsContainer.appendChild(price);
    return card;
}
// Función para seleccionar hasta 10 productos de distintas categorías
function selectProducts(products) {
    const selectedProducts = [];
    const categoryMap = new Map(); // Mapa para seguir las categorías seleccionadas
    for (const product of products) {
        if (selectedProducts.length >= 10) {
            break; // Salir del bucle si ya tenemos 10 productos
        }
        // Verificar si ya hemos seleccionado un producto de esta categoría
        if (!categoryMap.has(product.category.name)) {
            selectedProducts.push(product);
            categoryMap.set(product.category.name, true); // Marcar la categoría como seleccionada
        }
    }
    return selectedProducts;
}
// Llamada inicial al cargar la página
fetchData("https://api.escuelajs.co/api/v1/products/");
export {};
