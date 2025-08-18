# Feature: Landing Page

## Fichiers principaux

- `/barber-app/app/page.tsx` - Composant principal de la landing page
- `/barber-app/app/globals.css` - Styles globaux et variables CSS
- `/barber-app/components/ui/*` - Composants SHADCN UI utilisés

## Architecture et flux

### Structure de la page
1. **Navigation** - Menu de navigation avec dropdowns pour Certification, Business et Community
2. **Hero Section** - Section d'accueil avec gradient et statistiques clés
3. **How It Works** - Processus en 3 étapes pour les nouveaux utilisateurs
4. **Services Grid** - Grille de 9 services principaux offerts
5. **Testimonials** - Section témoignages avec évaluation 5 étoiles
6. **Why Choose** - 4 bénéfices principaux de la plateforme
7. **FAQ** - Questions fréquemment posées
8. **CTA Section** - Appel à l'action final avec gradient
9. **Footer** - Pied de page complet avec liens et informations

### Technologies utilisées
- **Next.js 15.4.6** - Framework React avec App Router
- **SHADCN UI** - Système de composants moderne
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Lucide React** - Bibliothèque d'icônes

### Patterns spécifiques
- Utilisation de composants SHADCN (Button, Card, Badge, NavigationMenu, Separator)
- Design system cohérent avec variables CSS définies dans globals.css
- Sections alternées avec fond blanc/gris pour le rythme visuel
- Cards interactives avec hover effects
- Navigation sticky avec backdrop blur

## Conventions

### Nommage
- Sections nommées de manière descriptive (Hero, Services, Testimonials, etc.)
- Classes Tailwind organisées (layout > spacing > style > effects)

### Structure des composants
- Chaque section est un élément `<section>` avec padding responsive
- Container max-width défini pour maintenir la cohérence
- Grilles responsives pour les layouts multi-colonnes

### Accessibilité
- Structure sémantique HTML5 (header, nav, main, section, footer)
- Liens avec classes hover/focus appropriées
- Alt text pour les éléments visuels (via aria-labels)

## Changelog

### 2025-08-18
- Création initiale de la landing page
- Extraction du contenu de barbersworld.org avec MCP Puppeteer
- Implémentation complète avec SHADCN UI
- Remixage du contenu avec ton corporate professionnel
- Tests avec Puppeteer et captures d'écran