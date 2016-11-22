# Estilos CSS

### Materia : `Tecnologías Web con JavaScript`

### Tema : `Estilos CSS` 
### Fecha : `2016-10-21`
### Estudiante : `David Enrique Moncayo Balseca`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#html">HTML</a>
  * <a href="#estilosCSS">Estilos CSS</a>
  * <a href="#bootstrap">Bootstrap</a>
  * <a href="#emmet">Emmet</a>
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
El tema de la práctica es: `Estilos CSS`

<a name="objetivos"></a>
## Objetivos

- Aprender como los estilos CSS afectan en la renderización de las paginas HTML
- Entender como ayuda las hojas de estilo de Bootstrap
- Aprender del uso de emmet para crear automaticamente código de HTML
- Conocer al menos una técnica de diseño responsive

<a name="marco-teorico"></a>
## Marco Teorico

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

<a name="bootstrap"></a>
### Bootstrap
Es el framework mas porpular de HTML, CSS y JS para proyectos web responsive y primero-dispositivos-móviles.
Bootstrap hace el desarrolo web de front-end más rápido y fácil. Esta hecho para gente de todos los niveles de habilidad, dispositivos de todas las formas y proyectos de todos los tamaños
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/02EstilosCSS/Graficos/Bootstrap-3.jpg?raw=true" >
</p>
<br>
<a href="#cabecera">A la cabecera</a>

<a name="emmet"></a>
### Emmet
Emmet es un plugin para varios populares editores de texto, este mejora de gran manera el workflow de codificar HTML y CSS
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/01-html-withInforme/Imagenes/emmet.jpg?raw=true" >
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