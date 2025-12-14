# 🛡️ Ethical Hacking – Web Vulnerabilities Lab

Projet pédagogique **full‑stack volontairement vulnérable** destiné à l’apprentissage de l’ethical hacking et des vulnérabilités web (SQL Injection, XSS stockée, mauvaises pratiques API).

---

## 📦 Architecture du projet

```
Ethical_Hacking/
├── backend/
│   ├── Dockerfile
│   └── app/
│       ├── main.py
│       ├── db.py
│       ├── __init__.py
│       └── api/
│           ├── __init__.py
│           ├── users.py
│           └── comments.py
│
├── frontend/
│   ├── Dockerfile
│   └── src/
│       ├── App.jsx
│       ├── index.js
│       └── styles/
│           └── global.css
│
└── docker-compose.yml
```

---

## 🧠 Objectifs pédagogiques

Ce projet permet de :

- Comprendre les échanges **frontend ↔ backend**
- Identifier et exploiter des vulnérabilités web courantes
- Tester des attaques réelles dans un environnement contrôlé

### Vulnérabilités incluses volontairement

| Vulnérabilité                      | Où                    | Description                                |
| ---------------------------------- | --------------------- | ------------------------------------------ |
| SQL Injection                      | `/user`, `/comment`   | Requêtes SQL construites par concaténation |
| XSS stockée                        | `/comment` + frontend | Injection HTML/JS persistante              |
| Mauvaise gestion des mots de passe | `/user`               | Passwords stockés en clair                 |
| CORS permissif                     | backend               | `allow_origins = *`                        |

---

## 🚀 Lancement du projet

### Prérequis

- Docker
- Docker Compose

### Démarrage

À la racine du projet :

```bash
docker compose up --build
```

### Accès

- Frontend : [http://localhost:3000](http://localhost:3000)
- Backend API : [http://localhost:8000](http://localhost:8000)
- Documentation Swagger : [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🔌 API Backend (FastAPI)

### Users

- `GET /users` → liste des utilisateurs
- `POST /user` → création d’un utilisateur

**Payload attendu :**

```json
{
  "username": "admin",
  "password": "admin123"
}
```

---

### Comments

- `GET /comments` → liste des commentaires
- `POST /comment` → ajout d’un commentaire

**Payload attendu :**

```json
{
  "author": "attacker",
  "content": "<script>alert('XSS')</script>"
}
```

---

## 🖥️ Frontend (React)

Le frontend est volontairement simple et vulnérable.

### Fonctionnalités

- Liste des utilisateurs
- Ajout d’utilisateurs
- Liste des commentaires
- Ajout de commentaires

---

## 🗄️ Base de données

- SQLite (`database.db`)
- Créée automatiquement au démarrage

### Tables

#### users

| Champ    | Type    |
| -------- | ------- |
| id       | INTEGER |
| username | TEXT    |
| password | TEXT    |

#### comments

| Champ   | Type    |
| ------- | ------- |
| id      | INTEGER |
| author  | TEXT    |
| content | TEXT    |

---

## 🛠️ Améliorations possibles

- Authentification vulnérable (login)
- Version sécurisée du backend
- Mode "attaque / défense"
- TP étudiants + corrigés
