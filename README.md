# Estructura

Un informe debe de seguir la siguiente estructura:

- **Cabecera**
  * Materia
  * Tema
  * Fecha
  * Nombre
  * Nombre del Profesor (TANIA CALLE Y ADRIAN EGUEZ)
  * Número de Informe (El número de informe es secuencial)
- **Índice de contenidos**
  * En el indice de contenidos debemos de tener los indices y sub indices (excepto de la cabecera y el índice) de toda la estructura del informe.
- **Tema**
  * Un nombre o descrición por ejemplo (Tags HTML o Introducción a la Web)
- **Objetivos**
  * Los objetivos es que es lo que se va a lograr con los informes, si en clase se aprendio acerca de DOCTYPEs entonces eso es un objetivo, si aprendierono TAGS HTML, ese es otro objetivo y así.
- **Marco Teorico**
  * En el Marco Teórico, lo que nos interesa es describir los conceptos que revisamos dentro de la clase, por ejemplo si revisamos el concepto de `navegador` entonces describiremos que es un navegador con referencias osea un LINK AL RECURSO, si es un libro el link a una pagina informativad del libro y en que parte del libro se encontro dicha información.
- **Desarrollo de la Práctica**
  * El desarrollo de la práctica son `capturas` de pantalla de lo que se hizo en clases y su `descripción`, por ejemplo si se utilizo el postman para conectarse con google y revisar los códigos de estatus HTTP, eso es lo que deberia de ir en las imágenes y descripciones.
- **Conclusiones y Recomendaciones**
  * Conclusiones son que objetivos se lograron y que se aprendió haciendo esos objetivos.
  * Recomendaciones son que temas también o cuales temas estuvieron de más abordados en la clase, o también cómo se podría mejorar esa práctica.

# Ejemplo de informe

El siguiente es un ejemplo de un informe, la informacion es irrelevante, más lo que interesa es la estructura.

# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

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
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
</p>

<br>
<a href="#cabecera">A la cabecera</a>

<a name="w3c"></a>
### La W3C (World Wide Web Consortium)
El Wordl Wide Web COnsortium es una comunidad internacional que desarrolla estándares abiertos para asegurar el crecimiento a largo plazo de la Web.
la W3C opera bajo un Código de Conducta ética y profesional.

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
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
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
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
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="estilosCSS"></a>
### Estilos CSS (Cascade Style Sheet)
El CSS es utilizado para dar estilo a un documento html por medio de nombrar la etiqueta, la clase o el id al que se está dando estilo. Esto es renderizado junto con el HTML por el navegador para dar el estilo final a la página mostrada hacia el usuario.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="herramientaInspeccionar"></a>
### Herramienta Inspeccionar
El Inspector de un navegador sirve para examinar la estructura y diseño de una página. Tambien se pueden hacer modificaciones en tiempo real de ambos aspectos.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="npm"></a>
### Node Package Manager
El Administrador de Paquetes de Node da la facilidad a los desarrolladores para compartir el codigo que ellos han creado para solucionar problemas particulares y dar este código a otros desarrolladores para reusarlo en sus propias aplicaciones.
Una vez que se usa código de otros desarrolladores el NPM hace que recibir actualizaciones del mismo sea muy facil.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/navegadores-web.jpeg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="xml"></a>
### eXtensible Markup Language
Se traduce como Lenguaje de Marcado Extensible es un metalenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium utilizado para almacenar datos de forma legible. Proviene del lenguaje SGML y permite definir la gramatica de lenguajes específicos para estructurar documentos grandes. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language))


<br><br>
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>
<br><br>
<a name="hist"></a>
### Historia y Facts

La Web se desarrolló entre marzo de 1989 y diciembre de 1990.2 3 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992. Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares Web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una Web semántica. Utilizando los conceptos de sus anteriores sistemas de hipertexto como ENQUIRE, el físico británico Tim Berners-Lee, un científico de la computación y en ese tiempo de los empleados del CERN, ahora director del World Wide Web Consortium (W3C), escribió una propuesta en marzo de 1989 con lo que se convertiría en la World Wide Web.4 la propuesta de 1989 fue destinada a un sistema de comunicación CERN pero Berners-Lee finalmente se dio cuenta que el concepto podría aplicarse en todo el mundo.5 En la CERN, la organización europea de investigación cerca de Ginebra, en la frontera entre Francia y Suiza,6 Berners-Lee y el científico de la computación belga Robert Cailliau propusieron en 1990 utilizar el hipertexto "para vincular y acceder a información de diversos tipos como una red de nodos en los que el usuario puede navegar a voluntad",7 y Berners-Lee terminó el primer sitio web en diciembre de ese año.8 Berners-Lee publicó el proyecto en el grupo de noticias alt.hypertext el 7 de agosto de 1991. (Fuente: <a href="https://es.wikipedia.org/wiki/World_Wide_Web">Wikipedia</a>)
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe
Aqui se incluiran capturas de pantalla de lo visto en esta clase

<a name="postman"></a>
### Postman
Postman es una herramienta que permite testear APIs de manera eficiente y rapida, viendo las peticiones HTTP, los headers y hasta un preview sin css de la pagina que se está probando
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>

La página que vamos a probar es la de El Hobbit [la Batalla de los 5 ejercitos](http://middle-earth.thehobbit.com/)

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>

El resultado al ver esta página en Postman fueron 6 headers y todos los enunciados de los juegos dentro de la pagina con sus botones correspondientes sin CSSs

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>

<a name="tags"></a>
### Tags



### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/adrianeguez` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/Tec_Web_Js_2016_B`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>

Por ultimo podemos centrar las imagenes de la siguiente manera:


```
<p align="center">

<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>
```

### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Adrian Eguez](https://github.com/adrianeguez)