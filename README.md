# Appartement Avenue de Saxe — Paris 7e

Site vitrine pour un appartement meublé 3 pièces à louer, situé avenue de Saxe dans le 7e arrondissement de Paris.

## Stack

- **Astro** — Générateur de site statique
- **Tailwind CSS v4** — Styles utilitaires
- **GitHub Pages** — Hébergement gratuit

## Commandes

```bash
npm install          # Installer les dépendances
npm run dev          # Serveur de développement (localhost:4321)
npm run build        # Build de production dans ./dist
npm run preview      # Prévisualisation du build
```

## Déploiement

Le site se déploie automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`.

**URL du site** : `https://fklein82.github.io/saxe-paris-7/`

## Connecter le calendrier Google

Pour afficher vos disponibilités, vous devez connecter un Google Agenda :

### Étape 1 : Rendre votre agenda public

1. Ouvrez [Google Agenda](https://calendar.google.com)
2. Cliquez sur la roue dentée > **Paramètres**
3. Dans la colonne de gauche, sélectionnez votre agenda
4. Section **Autorisations d'accès** : cochez **Rendre disponible publiquement**
5. Choisissez **Afficher uniquement les informations de disponibilité**

### Étape 2 : Récupérer l'ID de l'agenda

1. Dans les paramètres de votre agenda, section **Intégrer l'agenda**
2. Copiez l'**ID de l'agenda** (format : `xxxxx@group.calendar.google.com` ou votre email)

### Étape 3 : Mettre à jour le site

1. Ouvrez `src/pages/index.astro`
2. Recherchez `YOUR_CALENDAR_ID`
3. Remplacez-le par votre ID d'agenda
4. Commitez et poussez — le site se mettra à jour automatiquement

### Conseils

- Créez un agenda dédié « Disponibilités appartement »
- Bloquez les dates réservées dans cet agenda
- Les visiteurs verront les créneaux libres/occupés sans détails personnels

## Structure du projet

```
saxe-paris-7/
├── public/
│   ├── images/          # Photos optimisées de l'appartement
│   └── favicon.svg
├── src/
│   ├── layouts/         # Layout principal
│   ├── pages/           # Page unique (index.astro)
│   └── styles/          # Styles globaux (Tailwind)
├── .github/workflows/   # Déploiement automatique
└── astro.config.mjs     # Configuration Astro
```

## Photos

14 photos sélectionnées et optimisées parmi 58 originales :
- Salon (4 angles différents)
- Cuisine
- Chambres (double + simple)
- Salle de bain (2 vues)
- Entrée et couloir
- Détails architecturaux
- Vue Tour Eiffel (jour + nuit)

## Vidéo

Une vidéo de visite de l'appartement est incluse (`visite-appartement.mp4`).
