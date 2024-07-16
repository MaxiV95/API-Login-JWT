# **API-Login-JWT**

<br />

## **📌 OBJETIVOS**

- Construir una pequeña API-Rest de login, que sirva de ejemplo.
- Tecnologías: **Node** y **Express**
- Creación de usuario.
- Autenticación con token JWT.
- Autorización nivel admin.

<br />

## **⚠️ IMPORTANTE**

Es necesario contar mínimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependencias necesarias para correr el proyecto. Actualmente las versiones necesarias son:

- **Node**: 18.16.0 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
  node -v
  npm -v
```

<br />

## **📋 PARA COMENZAR...**

1. Clona el repositorio en tu computadora para comenzar a trabajar.

2. En la carpeta **principal del proyecto** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```javascript
    SECRET_KEY= tu clave semilla secreta
   ```

3. Instala las dependencias, ejecutando el comando **`npm install`** en la terminal.

4. Inicializa el servidor, ejecutando el comando **`npm start`** en la terminal. Si el servidor está corriendo, deberías ver algo así:

   ```
    [nodemon] starting `node index.js`
    Server raised in PORT: 3000
   ```

<br />

## **🔄 COMANDOS GIT**

- **git remote update origin --prune** estando en main actualiza las ramas

- **git add .** agrega todos los archivos guardados para hacer commit

- **git commit -m 'mensaje'** realiza un nuevo commit con un mensaje

- **git commit --amend** modifica el ultimo commit (cambiar archivos y mensaje, en rama propia)

- **git push** sube el commit a la nube

- **git push --force** sube el commit a la nube de manera forzosa, para luego de haber realizado un amend (cuidado! solo en rama propia)
