# Linktree clone

Este proyecto es un clon de Linktree, una plataforma que permite a los usuarios consolidar y compartir todos sus enlaces importantes en un solo lugar. Al crear una página de perfil personalizable, los usuarios pueden agregar enlaces a sus redes sociales, sitios web, blogs, y cualquier otra página en línea que deseen destacar.

## Tecnologías Usadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![CSS](https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Instalación

   Si utilizas Github Codespaces (recomendado) o Gitpod, esta plantilla ya vendrá con Python, Node y la base de datos Postgres instalados. Si trabajas localmente, asegúrate de instalar Python 3.10, Node.

**Instalar el backend primero**:
   Asegúrate de tener Python 3.8, Pipenv y un motor de base de datos (Postgres recomendado).

**Instalar los paquetes de Python**:
   ```sh
   $ pipenv install
   ```

**Crear un archivo .env basado en .env.example**:
   ```sh
   $ cp .env.example .env
   ```

**Instalar tu motor de base de datos y crear tu base de datos**:
   Dependiendo de tu base de datos, debes crear una variable `DATABASE_URL` con uno de los posibles valores, asegurándote de reemplazar los valores con la información de tu base de datos:

   | Motor     | DATABASE_URL                               |
   |-----------|--------------------------------------------|
   | SQLite    | sqlite:////test.db                         |
   | MySQL     | mysql://username:password@localhost:port/example |
   | Postgres  | postgres://username:password@localhost:5432/example |

**Migrar las migraciones** (saltar si no has hecho cambios en los modelos en `./src/api/models.py`):
   ```sh
   $ pipenv run migrate
   ```

**Ejecutar las migraciones**:
   ```sh
   $ pipenv run upgrade
   ```

**Ejecutar la aplicación**:
   ```sh
   $ pipenv run start
   ```

   **Nota**: Los usuarios de Codespaces pueden conectarse a psql escribiendo:
   ```sh
   psql -h localhost -U gitpod example
   ```

**Deshacer una migración**:
   También puedes deshacer una migración ejecutando:
   ```sh
   $ pipenv run downgrade
   ```
**Instalación Manual del Front-End**

1. Asegúrate de estar usando la versión 14+ de Node y de haber instalado y ejecutado exitosamente el backend.
2. Instala los paquetes:
   ```sh
   $ npm install
   ```
3. ¡Empieza a codificar! Inicia el servidor de desarrollo de webpack:
   ```sh
   $ npm run start
   ```
   
## **Nota importante sobre la base de datos y los datos en su interior**

Cada entorno de Github Codespaces tendrá **su propia base de datos**, por lo que si estás trabajando con más personas, cada uno tendrá una base de datos diferente y registros diferentes dentro de ella. Estos datos **se perderán**, así que no pases demasiado tiempo creando registros manualmente para pruebas. En su lugar, puedes automatizar la adición de registros a tu base de datos editando el archivo ```commands.py``` dentro de la carpeta ```/src/api```. Edita la línea 32 de la función ```insert_test_data``` para insertar los datos según tu modelo (utiliza la función ```insert_test_users``` anterior como ejemplo). Luego, todo lo que necesitas hacer es ejecutar ```pipenv run insert-test-data```.

