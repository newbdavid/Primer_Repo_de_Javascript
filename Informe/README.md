# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

### Tema : `NodeJs` 
### Fecha : `2016-10-21`
### Estudiante : `David Enrique Moncayo Balseca`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `6`

<a name="cabecera"></a>
## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#nodeJsTeoria">Node Js</a>
  * <a href="#npm">Node Package Manager</a>
  * <a href="callbackhell">Callback Hell</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#instalacionNodeJs">Instalacion NodeJs</a>
  * <a href="#appsNode">Aplicaciones en Node</a>
    * <a href="#firstApp">Primera Aplicación</a>
    * <a href="#imports">Imports</a>
    * <a href="#exports">Exports</a>
  * <a href="#httpserver">Servidor Http</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `NodeJs`

<a name="objetivos"></a>
## Objetivos

- Conocer como funciona NodeJs de manera introductoria
- Aprender a publicar nuestras aplicaciones hechas con NodeJs
- Lograr usar aplicaciones de terceros en nuestros proyectos

<a name="marco-teorico"></a>
## Marco Teorico
<a name="nodeJsTeoria"></a>
### Node Js

Node.js es un entorno de ejecución para JavaScript contruido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

<a href="#cabecera">A la cabecera</a>
<br>

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

<a name="callbackhell"></a>
### Callback Hell
JavaScript asíncrono utiliza callbacks, es dificil entenderlo de manera intuitiva. Y mucho código termina pareciendose a este
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/callbackHell.PNG?raw=true" >
</p>
<a name="desarrollo"></a>
## Desarrollo del informe
Aqui se incluiran capturas de pantalla de lo visto en esta clase

<a name="instalacionNodeJs"></a>
### Instalacion de NodeJs
Descargaremos la version 6.9.2 para windows 

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/Captura%20de%20pantalla%202016-12-28%2021.04.18.png?raw=true" width="1280" height="720">
</p>

Hacemos una instalación por defecto, en mi caso voy a instalar en el disco E: Node por razones de espacio

<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/Captura%20de%20pantalla%202016-12-28%2021.05.57.png?raw=true" width="1280" height="720">
</p>

<br>
<a href="#cabecera">A la cabecera</a>
<a name="appsNode"></a>
### Aplicaciones en Node
Hay mucha variedad de Aplicaciones en Node que se pueden usar para diferenets propositos.
En nuestro caso vamos a crear una aplicacion que sume dos numeros y lo vamos a imprimir en consola
<br>
<a name="firstApp"></a>
#### Primera Aplicación
Nuestra primera aplicacion consiste en una calculadora muy básica que toma dos numeros y los suma de la siguiente manera:
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/2016-12-29-2-.png?raw=true" >
</p>
<br>
<a name="imports"></a>
#### Imports
Para importar utilizamos `require` para utilizar un paquete que hayamos instalado desde npm de la siguiente manera: `var calculadora = require("tecnologiaswebmdavid")`
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/2016-12-29-4.png?raw=true" width="1280" height="720">
</p>

<br>
<a name="exports"></a>
#### Exports
Para exportar exportamos un objeto con la funcion que construimos
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/2016-12-29-3.png?raw=true" width="1280" height="720">
</p>

<br>
<a href="#cabecera">A la cabecera</a>
<a name="httpserver"></a>
### Http Server
Ahora vamos a crear un servidor HTTP utilizando `express`. Lo vamos a guardar en una variable llamada `app` dentro de nuestra aplicación `index.js`
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/2016-12-30%20(2).png?raw=true">
</p>

Tambien vamos a crear usuarios de tal manera que puedan ser accedidos en la URL
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/Usuarios.PNG?raw=true">
</p>

Con la función de GET lograremos que nos liste el usuario cuyo id sea el especificado en los parámetros
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/2016-12-30%20(3).png?raw=true" >
</p>

Con la funcion POST se crean validaciones para meter un nuevo usuario, en el req se pone el `Nombre` y `Cédula` y si no se ha proporcionado algún dato se avisa al usuario, cuando todos los datos son correctos se pone en el arreglo el usuario registrado.
<p align="center">
<img src="https://github.com/newbdavid/Primer_Repo_de_Javascript/blob/09-NodeJs04/Informe/imagenes/2016-12-30%20(4).png?raw=true" width="1280" height="720">
</p>


<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Node.js es una manera rápida de construir todo tipo de software, sobre todo web para usar cosas que ya están desarrolladas y usarlas a tu favor.
- Se deben subir aplicaciones funcionales y útiles que sirvan a la comunidad que descarga los paquetes bajo npm para construir una web participativa en el que el trabajo de otros pueda ser recompensado y utilizado.
- Se recomienda el estudio de los headers y como funcionan los métodos HTTP como GET, POST, DELETE, etc. para estar más familiarizado con ellos y poder implementarlos de manera fácil en Javascript


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [David Moncayo](https://github.com/newbdavid)