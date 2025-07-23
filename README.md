# API REST Full con Node.js - Proyecto Final

Este proyecto es una API RESTful construida con **Node.js** y **Express**, que implementa autenticación de usuarios y gestión de productos utilizando un patrón en capas (routes, controllers, services, models).

---

## ✨ Características

- 🔐 Autenticación con Firebase y middleware JWT
- 📦 CRUD completo de productos
- 🧱 Estructura organizada en carpetas: routes, controllers, services, models
- ✅ Validación de rutas protegidas con autenticación
- 📁 Configuración mediante archivo `.env`
- ⚙️ Desplegado en Vercel:  
  🔗 [https://api-rest-full-node-js.vercel.app](https://api-rest-full-node-js.vercel.app)

---

## 🧾 Endpoints disponibles

> Todos los endpoints de productos requieren autenticación (excepto los públicos si se configuran).

### Auth

- `POST /auth/login` → Iniciar sesión y obtener token

### Productos

- `GET /products/` → Obtener todos los productos  
- `GET /products/:id` → Obtener un producto por ID  
- `POST /products/create` → Crear nuevo producto  
- `PUT /products/:id` → Actualizar producto  
- `DELETE /products/:id` → Eliminar producto  

---

## 🗂 Estructura del proyecto

```
/src
├── controllers
│   ├── auth.controller.js
│   └── products.controller.js
├── services
│   ├── auth.service.js
│   └── products.service.js
├── models
│   ├── firebase.config.js
│   └── products.model.js
├── routes
│   ├── auth.routes.js
│   └── products-routes.js
├── middlewares
│   └── auth.middleware.js
index.js
package-lock.json
package.json
vercel.json
.env
```

---

## 🛠 Instalación

```bash
git clone https://github.com/rodrigoemanuelmontes/api-rest-full-NodeJs.git
cd api-rest-full-NodeJs
npm install
```

---

## 🔐 Configuración del archivo `.env`

Crea un archivo `.env` con las variables necesarias de tu cuenta de Firebase y el secreto JWT. Ejemplo:

```env
FIREBASE_API_KEY="tu_api_key"
FIREBASE_AUTH_DOMAIN="tu_auth_domain"
FIREBASE_PROJECT_ID="tu_project_id"
FIREBASE_STORAGE_BUCKET="tu_storage_bucket"
FIREBASE_MESSAGING_SENDER_ID="tu_sender_id"
FIREBASE_APP_ID="tu_app_id"
JWT_SECRET="tu_clave_secreta"
```

> ⚠️ **Nunca compartas tus claves reales en repositorios públicos.**

---

## ▶️ Uso

```bash
npm run dev
```

El servidor estará disponible en:

```
http://localhost:3000/
```

---

## ✅ Requisitos

- Node.js v18+
- Cuenta en Firebase con Auth y Firestore configurados
- Postman o Insomnia para testear los endpoints

---

## 🚀 Deploy

Este proyecto puede ser desplegado en:

- ✅ **Vercel**  

Solo asegurate de configurar correctamente las variables de entorno en el entorno de producción.

---

## 📌 Autor

**Rodrigo Emanuel Montes**  
📧 rodrigomontes167@gmail.com  
💼 [GitHub](https://github.com/rodrigoemanuelmontes)

---

## 🪪 Licencia

MIT - Libre para uso personal y educativo.
