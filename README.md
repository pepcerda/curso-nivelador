# Readme del curso nivelador del Master en Full Stack Web Development de Three Points

## Para probar la solución desde Nodejs
Para ejecutar este programa se deben seguir las instrucciones señaladas en este documento. 

1.- Clonar el repositorio en un directorio local: git clone https://github.com/pepcerda/curso-nivelador.git <dir_local>

2.- Situarse en el repositorio clonado, en la carpeta del proyecto (proyecto_curso_nivelador) y ejecutar el siguiente comando: npm install

3.- Continuando en el mismo repositorio ejecutar: node basic_server_cowsay.js

4.- El comando anterior levanatará la aplicación en el puerto 8080 del localhost. Entonces, copiando este enlace en un explorador podremos ver el API ejecutándose: http://localhost:8080/

5.- Para testear el API, se pueden utilizar los siguientes comandos desde la terminal para testear las peticiones GET y POST: 

- GET: curl -i localhost:8080
- POST: curl -X POST localhost:8080

## Para probar la solución dockerizada

1.- Ejecutar el comando de docker para generar la imagen: docker build . -t username/nombrerepo

2.- Ejecutar el siguiente comando para crear el contenedor y ejecutar la imagen en él: docker run -p puertoPC:8080 -d username/nombrerepo

3.- Para testear el API, se pueden utilizar los siguientes comandos desde la terminal para testear las peticiones GET y POST: 

- GET: curl -i localhost:8080
- POST: curl -X POST localhost:8080






