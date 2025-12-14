# Ethical Hacking App – Refonte & conteneurisation

## Objectif du travail
L’objectif de ce travail était de **reprendre une application React existante** et de la transformer en un projet plus **professionnel et structuré**, sans ajouter de nouvelles fonctionnalités métier.

Les efforts ont porté sur :
- l’architecture globale du projet
- la séparation des responsabilités
- la conteneurisation avec Docker

---

## Modifications réalisées

### 1. Séparation frontend / backend

Le projet initial était constitué uniquement d’un frontend React. Il a été découpé en deux services distincts :

- **Frontend** : application React (Create React App)
- **Backend** : API FastAPI (Python)

Cette séparation permet :
- une meilleure lisibilité du code
- une évolution indépendante des composants
- une architecture proche des standards utilisés en entreprise

---

### 2. Refonte de l’arborescence

Une nouvelle arborescence a été mise en place afin de rendre le projet plus clair et scalable.

```
ethical-hacking-app/
├── docker-compose.yml
├── .env
├── README.md
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── styles/
│       └── App.jsx
└── backend/
    ├── Dockerfile
    ├── requirements.txt
    └── app/
        ├── main.py
        └── api/
```

---

### 3. Conteneurisation avec Docker

Le projet est désormais entièrement conteneurisé :

- un conteneur pour le frontend React
- un conteneur pour le backend FastAPI
- un fichier `docker-compose.yml` pour orchestrer l’ensemble

Cela permet :
- un lancement du projet en une seule commande
- un environnement cohérent quel que soit le poste
- une base prête pour un déploiement futur

---

### 4. Mise en place d’une API minimale

Une API FastAPI minimale a été créée afin de :
- valider la communication frontend ↔ backend
- fournir une base extensible pour de futures fonctionnalités

Un endpoint de test (`/health`) est disponible pour vérifier l’état de l’API.

---

## Lancement du projet

À la racine du projet :

```bash
docker compose up --build
```

- Frontend : http://localhost:3000
- Backend (docs) : http://localhost:8000/docs

---

## Avant / Après

### Avant
- Frontend React seul
- Arborescence basique Create React App
- Aucun backend
- Pas de conteneurisation
- Lancement dépendant de l’environnement local

### Après
- Frontend et backend séparés
- Architecture claire et modulaire
- API FastAPI prête à être étendue
- Conteneurisation complète avec Docker
- Lancement standardisé via `docker compose`

---

## Conclusion

Ce travail a permis de transformer un projet initial simple en une **base technique propre, professionnelle et présentable**, mettant en avant des compétences en :
- structuration de projet
- Docker / Docker Compose
- séparation des responsabilités frontend / backend

Le projet constitue désormais une base saine pouvant servir de support pédagogique ou de démonstration technique.

