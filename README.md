## COmandos Importantes

### Instalar sailsjs

´´´

:>npm install -g sails

### Crear un proyecto en sailsjs
sails new StarWars


### Levantar el servidor

````
sails lift
````
Esto dentro de la carpeta

````
sails lift 
````


El sails les pide opciones si no estan definidas,  las opciones son:
-1 SAFE MODE no se va a alterar la base de datis
-2 ALTER MODE se va a alterar la base datos si nosotros hicimos cambios en os modelos por ejemplo 
-3 DELETE MODE borra todos los datos de la base hy vuelve a crear los modelos

## Servidor Web de Sailsjs
El servidor web de sails esta en la carpeta assets, esto es publico para cualquiera


Podemos ver que sails viene con un servidor http definido



# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-21`
### Estudiante : `David Enrique Moncayo Balseca`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#httpMethods">Métodos HTTP</a>
  * <a href="#codigosHTTP">Codigos HTTP</a>
  * <a href="#navegador">Navegador</a>
  * <a href="#www">La WWW</a>
  * <a href="#w3c">W3C</a>
  * <a href="#w3cSchools">W3Schools</a>
  * <a href="#doctype">Doctype</a>
  * <a href="#html">HTML</a>
  * <a href="#estilosCSS">Estilos CSS</a>
  * <a href="#herramientaInspeccionar">Herramienta Inspeccionar</a>
  * <a href="#npm">Node Package Manager</a>
  * <a href="#xml">XML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#postman">Postman</a>
  * <a href="#tags">Tags</a>
    * <a href="#h1yh2">H1 y H2</a>
    * <a href="#paragraphs">Paragraphs p</a>
    * <a href="#ulolli">Ul Ol y li</a>  
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Tener un conocimiento introductorio de lo que es la web y como esta diseñada internamente
- Explorar sitios donde se pueda aprender sobre el desarrollo de la web
- Conocer herramientas de desarrolladores web como: postman, inspetor web del navegador
- Obtener conocimiento introductorio de herramientas como Node.js
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="httpMethods"></a>
### Métodos HTTP

HTTP define una seria predefinidade métodos de petición (algunas veces referido como "verbos") que pueden utilizarse. El protocolo tiene flexibilidad para ir añadiendo nuevos métodos y para así añadir nuevas funcionalidades. El número de métodos de petición se han ido aumentando según se avanzaban en las versiones4 . Cada método indica la acción que desea que se efectúe sobre el recurso identificado. Lo que este recurso representa depende de la aplicación del servidor. Por ejemplo el recurso puede corresponderse con un archivo que reside en el servidor. (Fuente: [Wikipedia] (https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol))
<br>
#### GET
Lo que hace es pedir un recurso específico, las aplicaciones que causen efectos no deberían usarlo puesto que transmite información a través de URI agregando parámetros a la URL.
<br>
#### HEAD
Pide una respuesta igual a lo que haría una petición GET solo que en esta el cuerpo no se devuelve, es útil para recuperar los metadatos de respuesta sin enviar todo.
<br>

#### POST
Envía los datos para que sean procesados por el recurso identificado. Los datos se incluirán en el cuerpo de la petición. Esto puede resultar en la creación de un nuevo recurso o de las actualizaciones de los recursos existentes o ambas cosas.
<br>

#### PUT
Sube, carga o realiza un upload de un recurso específico, es el camino más eficiente para subir archivos a un servidor, esto es porque en POST utiliza un mensaje multiparte y el mensaje es decodificado por el servidor. En contraste, el método PUT es que los servidores de hosting compartido no lo tienen habilitado
<br>

#### DELETE
Borra el recurso especificado.
<br>

<a href="#cabecera">A la cabecera</a>
<br>

<a name="codigosHTTP"></a>
### Codigos HTTP
Hay una gran variedad de códigos de respuesta de HTTP, se dividen en cinco familias o tipos, cada una tiene una gran variedad de casos se listarán los tipos:

<br>
#### Familia 1xx: Respuestas informativas
Petición recibida, continuando proceso. Esta respuesta significa que el servidor ha recibido los encabezados de la petición, y que el cliente debería proceder a enviar el cuerpo de la misma (en el caso de peticiones para las cuales el cuerpo necesita ser enviado; por ejemplo, una petición Hypertext Transfer Protocol). Si el cuerpo de la petición es largo, es ineficiente enviarlo a un servidor, cuando la petición ha sido ya rechazada, debido a encabezados inapropiados. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP))

<br>
#### Familia 2xx: Peticiones correctas
Esta clase de código de estado indica que la petición fue recibida correctamente, entendida y aceptada.

<br>
#### Familia 3xx: Redirecciones
En esta familia el cliente tiene que tomar una acción adicional para completar la petición
Esta clase de código de estado indica que una acción subsecuente necesita efectuarse por el agente de usuario para completar la petición. La acción requerida puede ser llevada a cabo por el agente de usuario sin interacción con el usuario si y solo si el método utilizado en la segunda petición es GET o HEAD. El agente de usuario no debe redirigir automáticamente una petición más de 5 veces, dado que tal funcionamiento indica usualmente un Bucle infinito.

<br>
#### Familia 4xx: Errores del cliente
La solicitud contiene sintaxis incorrecta o no puede procesarse.
La intención de la clase de códigos de respuesta 4xx es para casos en los cuales el cliente parece haber errado la petición. Excepto cuando se responde a una petición HEAD, el servidor debe incluir una entidad que contenga una explicación a la situación de error, y si es una condición temporal o permanente. Estos códigos de estado son aplicables a cualquier método de solicitud (como GET o POST). Los agentes de usuario deben desplegar cualquier entidad al usuario. Estos son típicamente los códigos de respuesta de error más comúnmente encontrados. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP))

<br>
#### Familia 5xx: Errores del servidor
Esto indica que el servidor falló a completar una solicitud aparentemente válida.
Indican casos en los cuales el servidor tiene registrado aún antes de servir la solicitud, que está errado o es incapaz de ejecutar la petición. El servidor debe incluir la entidad que tenga la explicación de la situación de error y debe informar si es temporal o permanente, siempre y cuando no sea respondiendo a un método `HEAD`

<a name="navegador"></a>
### Navegador
Hoy en día existen muchos navegadores, estos sirven como software para presentar paginas web y renderizar las hojas de estilos y el Javascript que las componen.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
</p>

<a name="www"></a>
### La WWW (World Wide Web)
Esta es la red informatica mundial, un sistema de distribución de documentos de hipertexto o hipermedios accesibles via la internet. El padre de la Web es Tim Berners Lee con la ayuda de Robert Cailliau cuando trabajaban en el CERN en Ginebra, Suiza.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/www.jpg?raw=true" >
</p>

<br>
<a href="#cabecera">A la cabecera</a>

<a name="w3c"></a>
### La W3C (World Wide Web Consortium)
El Wordl Wide Web COnsortium es una comunidad internacional que desarrolla estándares abiertos para asegurar el crecimiento a largo plazo de la Web.
la W3C opera bajo un Código de Conducta ética y profesional.

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/W3C-Developers-Dark.png?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="w3cSchools"></a>
### La W3C Schools
W3Schools es un sitio web popular para aprender sobre tecnologías web en línea. Incluye una gran variedad de tutoriales y objetos interactivos para aprender cosas referentes a:
- HTML
- CSS
- JavaScript
- PHP
- SQL
- Bootstrap y
- JQuery

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/w3schools.png?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="doctype"></a>
### Doctype
Doctype asocia un documento SGML o XML a saber que tipo de documento es, esto viene del inglés DTD (Doctype Declaration)
<br>
<a href="#cabecera">A la cabecera</a>

<a name="html"></a>
### HTML (HiperText Markup Language)
Es el lenguaje de marcado de etiquetas de hipertexto el cual se utiliza para hacer páginas web, esto es interpretado por el navegador y mostrado al usuario
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/Html5-01-1024x768.jpg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="estilosCSS"></a>
### Estilos CSS (Cascade Style Sheet)
El CSS es utilizado para dar estilo a un documento html por medio de nombrar la etiqueta, la clase o el id al que se está dando estilo. Esto es renderizado junto con el HTML por el navegador para dar el estilo final a la página mostrada hacia el usuario.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/CSS3.jpg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="herramientaInspeccionar"></a>
### Herramienta Inspeccionar
El Inspector de un navegador sirve para examinar la estructura y diseño de una página. Tambien se pueden hacer modificaciones en tiempo real de ambos aspectos.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/InspectorInception.png?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="npm"></a>
### Node Package Manager
El Administrador de Paquetes de Node da la facilidad a los desarrolladores para compartir el codigo que ellos han creado para solucionar problemas particulares y dar este código a otros desarrolladores para reusarlo en sus propias aplicaciones.
Una vez que se usa código de otros desarrolladores el NPM hace que recibir actualizaciones del mismo sea muy facil.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/npm.jpg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="xml"></a>
### eXtensible Markup Language
Se traduce como Lenguaje de Marcado Extensible es un metalenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium utilizado para almacenar datos de forma legible. Proviene del lenguaje SGML y permite definir la gramatica de lenguajes específicos para estructurar documentos grandes. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language))


<a name="desarrollo"></a>
## Desarrollo del informe
Aqui se incluiran capturas de pantalla de lo visto en esta clase

<a name="postman"></a>
### Postman
Postman es una herramienta que permite testear APIs de manera eficiente y rapida, viendo las peticiones HTTP, los headers y hasta un preview sin css de la pagina que se está probando
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/PostmanBIG.png?raw=true" width="1280" height="720">
</p>

La página que vamos a probar es la de El Hobbit [la Batalla de los 5 ejercitos](http://middle-earth.thehobbit.com/)

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/LetsPostThisThing.png?raw=true" width="1280" height="720">
</p>

El resultado al ver esta página en Postman fueron 6 headers y todos los enunciados de los juegos dentro de la pagina con sus botones correspondientes sin CSSs

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/ResultPostMan.png?raw=true" width="1280" height="720">
</p>
<br>
<a href="#cabecera">A la cabecera</a>
<a name="tags"></a>
### Tags
Hay mucha variedad de Tags que se pueden usar para diferenets propositos.

<a name="h1yh2"></a>
#### H1, H2, y otros Hummers..
Son utilizados para dar enfasis a los titulos por ejemplo
Usemos `<h1>Soy un titulo random en H1</h1>` para lo siguiente
<h1>Soy un titulo random en H1</h1>

<a name="paragraphs"></a>
#### Paragraphs
Para hacer parrafos es facil solo se debe encapsular en `<p></p>` de la sigueinte forma:
`<p>5 Si necesitan sabiduría, pídansela a nuestro generoso Dios, y él se la dará; no los reprenderá por pedirla. 6 Cuando se la pidan, asegúrense de que su fe sea solamente en Dios, y no duden, porque una persona que duda tiene la lealtad dividida y es tan inestable como una ola del mar que el viento arrastra y empuja de un lado a otro. 7 Esas personas no deberían esperar nada del Señor; 8 su lealtad está dividida entre Dios y el mundo, y son inestables en todo lo que hacen.
9 Los creyentes que son pobres[a] pueden estar orgullosos, porque Dios los ha honrado; 10 y los que son ricos[b] deberían estar orgullosos de que Dios los ha humillado. Se marchitarán como una pequeña flor de campo. 11 Cuando el sol calienta mucho y se seca el pasto, la flor pierde su fuerza, cae y desaparece su belleza. De la misma manera, se marchitarán los ricos junto con todos sus logros.
12 Dios bendice a los que soportan con paciencia las pruebas y las tentaciones, porque después de superarlas, recibirán la corona de vida que Dios ha prometido a quienes lo aman. 13 Cuando sean tentados, acuérdense de no decir: «Dios me está tentando». Dios nunca es tentado a hacer el mal[c] y jamás tienta a nadie. 14 La tentación viene de nuestros propios deseos, los cuales nos seducen y nos arrastran. 15 De esos deseos nacen los actos pecaminosos, y el pecado, cuando se deja crecer, da a luz la muerte.
16 Así que no se dejen engañar, mis amados hermanos. 17 Todo lo que es bueno y perfecto es un regalo que desciende a nosotros de parte de Dios nuestro Padre, quien creó todas las luces de los cielos.[d] Él nunca cambia ni varía como una sombra en movimiento.[e] 18 Él, por su propia voluntad, nos hizo nacer de nuevo por medio de la palabra de verdad que nos dio y, de toda la creación, nosotros llegamos a ser su valiosa posesión. (Santiago 1:5-18)</p>`

<p>5 Si necesitan sabiduría, pídansela a nuestro generoso Dios, y él se la dará; no los reprenderá por pedirla. 6 Cuando se la pidan, asegúrense de que su fe sea solamente en Dios, y no duden, porque una persona que duda tiene la lealtad dividida y es tan inestable como una ola del mar que el viento arrastra y empuja de un lado a otro. 7 Esas personas no deberían esperar nada del Señor; 8 su lealtad está dividida entre Dios y el mundo, y son inestables en todo lo que hacen.
9 Los creyentes que son pobres[a] pueden estar orgullosos, porque Dios los ha honrado; 10 y los que son ricos[b] deberían estar orgullosos de que Dios los ha humillado. Se marchitarán como una pequeña flor de campo. 11 Cuando el sol calienta mucho y se seca el pasto, la flor pierde su fuerza, cae y desaparece su belleza. De la misma manera, se marchitarán los ricos junto con todos sus logros.
12 Dios bendice a los que soportan con paciencia las pruebas y las tentaciones, porque después de superarlas, recibirán la corona de vida que Dios ha prometido a quienes lo aman. 13 Cuando sean tentados, acuérdense de no decir: «Dios me está tentando». Dios nunca es tentado a hacer el mal[c] y jamás tienta a nadie. 14 La tentación viene de nuestros propios deseos, los cuales nos seducen y nos arrastran. 15 De esos deseos nacen los actos pecaminosos, y el pecado, cuando se deja crecer, da a luz la muerte.
16 Así que no se dejen engañar, mis amados hermanos. 17 Todo lo que es bueno y perfecto es un regalo que desciende a nosotros de parte de Dios nuestro Padre, quien creó todas las luces de los cielos.[d] Él nunca cambia ni varía como una sombra en movimiento.[e] 18 Él, por su propia voluntad, nos hizo nacer de nuevo por medio de la palabra de verdad que nos dio y, de toda la creación, nosotros llegamos a ser su valiosa posesión.(Santiago 1:5-18)</p>

<a name="ulolli"></a>
#### `ul`, `ol` and Lo`li`pop
Para esto tomare prestado codigo del la siguiente [fuente](http://html.hazunaweb.com/110.php)
La leyenda es así: 
- ul se utiliza para "unordered lists"
- ol se utiliza para "ordered lists"
- li es el "list item" de cualquiera de las dos de arriba

Aqui un ejemplo de `ul`:
`<ul>
<li type="circle">Esto es un tipo de punto.</li>
<li type="square">Este es otro.</li>
<li type="disc">Y este es otro diferente.</li>
</ul>`
<ul>
<li type="circle">Esto es un tipo de punto.</li>
<li type="square">Este es otro.</li>
<li type="disc">Y este es otro diferente.</li>
</ul>

Aqui un ejemplo de `ol`:
`<ol>
<li value="20">Este será el número 20. </li>
<li>Este será el 21. </li>
<li> Este será el 22. Y así sucesivamente. </li>
</ol>`
<ol>
<li value="20">Este será el número 20. </li>
<li>Este será el 21. </li>
<li> Este será el 22. Y así sucesivamente. </li>
</ol>

<br>
<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- El uso de postman te ayuda a ver que esta trayendo la pagina en sus llamadas y como optimizar el contenido transferido.
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se recomienda el uso de MarkDown Cheat Sheet para tener listo el contenido se puede ver [aqui](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Se recomienda usar el inspector para jugar con la pagina y aprender mas sobre el uso de HTML y CSS

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [David Moncayo](https://github.com/newbdavid)