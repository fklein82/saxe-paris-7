# Stay in Paris 7e — Template

Template de site vitrine pour la location d'un appartement meublé. Conçu pour le 7e arrondissement de Paris, facilement adaptable à tout bien immobilier.

## Fonctionnalités

- Site multilingue (FR / EN / MG) avec sélecteur de langue
- Galerie photos avec lightbox
- Vidéo de visite (embed YouTube)
- Calendrier Google des disponibilités
- Section témoignages
- Carte Google Maps
- Contact avec WhatsApp, SMS et téléphone
- SEO dynamique selon la langue
- Responsive / mobile-first

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

## Personnalisation

1. Remplacez les photos dans `public/images/`
2. Modifiez les textes et traductions dans `src/pages/index.astro`
3. Mettez à jour les numéros de téléphone et liens WhatsApp
4. Connectez votre calendrier Google (voir ci-dessous)
5. Adaptez la carte Google Maps à votre localisation

## Connecter le calendrier Google

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
2. Remplacez l'ID du calendrier dans l'iframe par le vôtre
3. Commitez et poussez — le site se mettra à jour automatiquement

## Structure du projet

```
├── public/
│   ├── images/          # Photos de l'appartement
│   └── favicon.svg
├── src/
│   ├── layouts/         # Layout principal
│   ├── pages/           # Page unique (index.astro)
│   └── styles/          # Styles globaux (Tailwind)
├── .github/workflows/   # Déploiement automatique
└── astro.config.mjs     # Configuration Astro
```
