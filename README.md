
# Clone de Reddit — Projet académique

Application web inspirée de Reddit, réalisée en équipe dans le cadre d'un projet scolaire. Elle permet aux utilisateurs de créer un compte, de rejoindre des communautés et de partager des publications.

## Fonctionnalités

- Inscription et connexion des utilisateurs.
- Consultation des publications et des communautés.
- Création de publications avec titre, contenu et image.
- Consultation des publications par communauté.
- Gestion des commentaires et des votes.
- Réinitialisation du mot de passe.

## Technologies utilisées

| Partie | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript |
| Interface | Material UI, Emotion, React Icons |
| Navigation | React Router |
| Communication API | Axios |
| Backend | Strapi 5, Node.js |
| Authentification | JWT |
| Base de données | SQLite, PostgreSQL |

## Architecture du projet

```text
STRAPI/
├── backend/   # API et gestion des contenus avec Strapi
└── frontend/  # Interface utilisateur avec React et Vite
```

Le frontend communique avec le backend via l'API Strapi.

## Installation et lancement

### Prérequis

- Node.js
- npm

### 1. Backend

```bash
cd backend
npm install
```

Configurer les variables d'environnement dans un fichier `.env`, puis lancer :

```bash
npm run develop
```

Le backend est accessible sur :

`http://localhost:1337`

### 2. Frontend

Dans un nouveau terminal :

```bash
cd frontend
npm install
npm run dev
```

Ouvrir l'adresse locale affichée par Vite dans le terminal.

## Modèles de données

- **Post :** titre, contenu, image, auteur et communauté.
- **Subreddit :** nom, description et publications associées.
- **Comment :** contenu, auteur et publication associée.
- **Vote :** valeur du vote et relations avec les utilisateurs, publications ou commentaires.

## Contexte du projet

Projet académique réalisé en équipe dans le cadre de notre formation en développement web.

Ce projet nous a permis de mettre en pratique :
- La séparation frontend et backend.
- La création et la consommation d'une API.
- La gestion des utilisateurs et de l'authentification.
- La gestion des données et des relations entre contenus.

---

**Projet académique – Développement Web**
