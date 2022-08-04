## Para iniciar el proyecto debes: 

1. Git clone https://github.com/Juancavallejo/curso-react-coderhouse.git
2.  cd curso-react-coderhouse
3. npm install
4. npm start

## Navegación: 
**Home:  **Muestra ItemListContainer + mensaje de bienvenida, todos los productos de la tienda sin filtral.

**Filtrar productos por categoria:** Por el momento existen 3 tipos de categorias: 
- Desierto
- Nieve
- Selva.

Una vez hagas click te mostrará los productos que corresponden a esa categoria. y se sigue la siguiente ruta: **/category/:categoryId**. Al seguir esa ruta se estaría ingresando al ItemListContainer / itemList / Item pero filtrado por categoria.

**Ver el detalle de los productos.** Actualmente es posible ingresar y ver el detalle de cada uno de los productos haciendo click en el link *mas detalles*. Cada producto cuenta con sus detalles propios y se ingresa siguiendo esta ruta: **/detail/:productId**. Al seguir esa ruta se estaría ingresando al ItemDetailContainer y posteriormente a DetailContainer.

**Gif de la navegación de la pagina:** Se encuentra en la carpeta Publi, bajo el nombre Navegación - React app. 

###End