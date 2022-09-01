## Para iniciar el proyecto debes: 

1. Git clone https://github.com/Juancavallejo/curso-react-coderhouse.git
2. npm install
3.  npm start

## Navegación: 
**Home:  **Muestra ItemListContainer + mensaje de bienvenida, todos los productos de la tienda sin filtrar.

**Filtrar productos por categoria:** Por el momento existen 4 tipos de categorias: 
- Desierto
- Nieve
- Agua
- Colombia

Una vez hagas click te mostrará los productos que corresponden a esa categoria. y se sigue la siguiente ruta: **/category/:categoryId**. Al seguir esa ruta se estaría ingresando al ItemListContainer / itemList / Item pero filtrado por categoria.

**Ver el detalle de los productos.** Actualmente es posible ingresar y ver el detalle de cada uno de los productos haciendo click en el link *mas detalles*. Cada producto cuenta con sus detalles propios y se ingresa siguiendo esta ruta: **/detail/:productId**. Al seguir esa ruta se estaría ingresando al ItemDetailContainer y posteriormente a DetailContainer.

**Dentro de item detail** Una vez selecciones la cantidad de productos de deseas comprar, se habilitará el link *ir al carrito de compras*. El cual sigue la ruta **/cart**.

En el carrito de compras podras verificar los productos que deseas adquirir y eliminar cada item, limpiar todo el carrito o seguir con tu compra. En caso de realizar esto último se puede dar click en el boton *finalizar compra*, el cual sigue la ruta **/checkout**

Finalmente en **Información de envio** tienes un breve resumen de los productos a adquirir y un formulario, donde debes introducir tus datos. Una vez introducidos, y cuando des click al boton *generar order,* se genera la order y te deja un numero de comprobante con la cual seguir tu order. 


**¡Gracias por tu compra!**


**Gif de la navegación de la pagina:** Se encuentra en la carpeta Publi, bajo el nombre Navegación - React app. 

###End