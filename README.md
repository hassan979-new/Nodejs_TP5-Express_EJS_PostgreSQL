# Node.js – TP Bibliothèque avec Express et PostgreSQL

## 📖 Description
Ce projet est une **application Node.js** utilisant **Express.js**, **PostgreSQL** et **EJS** pour gérer une bibliothèque numérique.  
Il permet la gestion des **auteurs** et des **livres** avec un CRUD complet, ainsi que la recherche de livres par titre, auteur ou genre.

---

## 📂 Structure du projet
```
bibliotheque-app/
├── config/
│   └── db.js
├── controllers/
│   ├── auteurController.js
│   └── livreController.js
├── models/
│   ├── auteurModel.js
│   └── livreModel.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── routes/
│   ├── auteurRoutes.js
│   └── livreRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── navigation.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── accueil.ejs
│       ├── 404.ejs
│       ├── error.ejs
│       ├── auteurs/
│       │   ├── liste.ejs
│       │   ├── ajouter.ejs
│       │   ├── modifier.ejs
│       │   └── details.ejs
│       └── livres/
│           ├── liste.ejs
│           ├── ajouter.ejs
│           ├── modifier.ejs
│           └── details.ejs
├── .env
├── app.js
└── package.json
```


---

## ⚙️ Fonctionnalités

### Gestion des auteurs
- **Liste des auteurs** avec affichage des informations.  
- **Ajout** d’un nouvel auteur avec formulaire.  
- **Détails** d’un auteur avec ses livres associés.  
- **Modification** des informations d’un auteur.  
- **Suppression** d’un auteur.  

### Gestion des livres
- **Liste des livres** avec informations et auteur associé.  
- **Recherche** par titre, auteur ou genre.  
- **Ajout** d’un livre avec sélection de l’auteur.  
- **Détails** d’un livre.  
- **Modification** des informations d’un livre.  
- **Suppression** d’un livre.  

### Interface utilisateur
- Templates EJS avec **partials** pour header, navigation et footer.  
- Pages dédiées pour auteurs et livres.  
- Stylisation avec CSS responsive.  

### Gestion des erreurs
- Page **404** pour les ressources introuvables.  
- Page **error.ejs** pour les erreurs serveur.  

---

## 🖥️ Exemple d’exécution

https://github.com/user-attachments/assets/34746fab-5332-486c-a15c-65467b384334

---

## 💡 Concepts pratiqués
- Connexion à une base PostgreSQL avec **pg**.  
- Architecture MVC (config, modèles, contrôleurs, routes, vues).  
- Templates dynamiques avec **EJS**.  
- Gestion des formulaires et des routes avec Express.  
- Stylisation responsive avec CSS.  
- Recherche et filtrage dans une base relationnelle.  
- Gestion des erreurs serveur et des pages introuvables.  

---

## 🧑‍💻 Auteur
- 👤 **Agouram Hassan**  
- ⚙️ Développement Node.js 
- 🎓 Instructor : **Mr. LACHGAR**  
- 📅 8 Mai 2026

