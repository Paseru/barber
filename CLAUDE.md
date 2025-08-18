
# CLAUDE.md

Ce fichier fournit des directives a Claude Code (claude.ai/code) lors du travail avec le code dans ce repository.

# CONSIGNES OBLIGATOIRES - RESPECT ABSOLU

## REGLES CRITIQUES A APPLIQUER SYSTEMATIQUEMENT

### 1. VERIFICATION DE DOCUMENTATION AVANT CODE
**OBLIGATION ABSOLUE**: Avant d'ecrire la moindre ligne de code, utiliser imperativement Context7 MCP pour obtenir la documentation la plus recente du langage/framework utilise.
- Aucune exception tolérée
- Si Context7 non disponible: STOP et signaler le probleme

### 2. VALIDATION SYSTEMATIQUE POST-CODE
**OBLIGATION ABSOLUE**: Apres chaque ecriture de code:
1. Utiliser puppeteer MCP pour tester TOUTE fonctionnalite implementee
2. Verifier l'absence totale d'erreurs affichees
3. Si erreurs detectees: corriger automatiquement AVANT de conclure la reponse
4. Capturer un screenshot via l'outil dedie
5. Confirmer que le rendu correspond EXACTEMENT aux specifications demandees
6. Si non-conforme: modifier le code et recommencer le cycle de test jusqu'a conformite totale
7. Ne JAMAIS terminer une reponse avec du code non teste ou comportant des erreurs
8. Ne JAMAIS utiliser npm run dev, part du principe que le serveur est déja lancé sur http://localhost:3000/
9. Lance ce son lorsque tu as fini ta réponse complète /Users/hyrak/Music/notif.wav

### 3. UTILISATION PRIORITAIRE DU MCP SHADCN
**REGLE STRICTE**: Toujours privilegier l'utilisation d'un composant shadcn grâce au mcp shadcn
- Meme si restyling necessaire
- Aucune recreation de composant existant tolérée
- Si shadcn mcp propose une solution: l'utiliser obligatoirement
- Utiliser des blocks entiers lorsque c’est possible (ex. : page de connexion, calendrier)
- IMPORTANT : lors de l'implementation d'un component/block, toujours appeller d'abord le 'demo tool' du mcp pour voir comment il est utilisé, puis l'implementer.
- Si tu as vraiment pas le choix pour une feature, créer ton propre component mais le styling (spacing, border, padding etc..) doit ABSOLUMENT matcher le theme shadcn et les autres components shadcn.


### 4. PHASE DE CLARIFICATION OBLIGATOIRE
**AVANT TOUTE IMPLEMENTATION DE FEATURE**:
- Poser systematiquement TOUTES les questions necessaires
- Continuer les questions jusqu'a atteindre 95% de certitude minimum
- Couvrir obligatoirement:
  - Exigences fonctionnelles detaillees
  - Contraintes techniques
  - Comportements attendus
  - Cas limites
  - Integration avec l'existant

### 5. SYNCHRONISATION GITHUB IMMEDIATE
**OBLIGATION**: Push sur GitHub requis apres:
- Chaque fin de reponse complete
- Chaque modification complete
- Aucun delai tolere

### 6. INTERDICTION FORMELLE
**JAMAIS**: Aucun Legacy Fallback dans le code
- Pas de polyfills obsoletes
- Pas de code de compatibilite deprecie
- Solutions modernes uniquement
- Pas de npm run dev, on lance manuellement

### 7. TRACABILITE QUOTIDIENNE OBLIGATOIRE
**CHAQUE JOUR SANS EXCEPTION**:
1. Acceder au dossier `changelog/`
2. Creer/modifier le fichier `YYYY-MM-DD.md` (date du jour)
3. Documenter TOUTES les modifications effectuees:
   - Features ajoutees
   - Bugs corriges
   - Refactoring realise
   - Modifications de configuration

### 8. MISE A JOUR STRUCTURE REPERTOIRE
**OBLIGATION**: Maintenir la section `Directory Structure` dans claude.md
- Inclure SEULEMENT les DOSSIERS et non pas les fichiers
- Mettre a jour automatiquement apres chaque modification structurelle
- Refleter l'etat actuel exact de l'arborescence du projet
- Inclure les nouveaux dossiers crees
- Supprimer les references aux elements supprimes
- La structure doit toujours etre synchronisee avec la realite du projet

### 9. CONSULTATION DOCUMENTATION PROJET
**IMPERATIF**: Consulter systematiquement les fichiers Markdown dans le dossier `.agent-os/product` pour:
- Comprehension globale du projet
- Verification de la roadmap
- Respect des exigences techniques
- Alignement avec l'architecture existante

### 10. DESIGN ET INTERFACE
**OBLIGATOIRE**:
- Appliquer un style épurée "zoom 85%" sur tous les composants
- Réduire toutes les dimensions de 15% (spacing, font-size, padding, etc..)
- Interface dense mais lisible

## PROTOCOLE DE DEMARRAGE

### VERIFICATION PRE-EXECUTION
Avant TOUTE action, poser des questions si:
- Doute sur l'interpretation d'une demande
- Ambiguite dans les specifications
- Conflits potentiels avec l'existant
- Choix architectural a valider

## DOCUMENTATION DES FEATURES

### Structure de la documentation
- Chaque feature majeure doit avoir un fichier markdown dans `/docs/features/`
- Format : `/docs/features/[feature-name].md` (ex: auth.md, payment.md, notifications.md)
- Tu dois en créer à chaque fois qu'on mentionne une nouvelle feature.
- Ces fichiers servent de GPS pour naviguer rapidement dans le code

### Workflow OBLIGATOIRE pour les modifications

1. **AVANT de modifier une feature** :
   - Toujours lire `/docs/features/[feature-name].md` en premier
   - Identifier les fichiers clés et patterns documentés
   - Comprendre les décisions architecturales avant de coder

2. **PENDANT la modification** :
   - Le markdown guide mais ne remplace PAS la lecture du code source
   - Toujours examiner le code réel pour la syntaxe exacte et l'état actuel

3. **APRÈS une modification significative** :
   - Mettre à jour `/docs/features/[feature-name].md` immédiatement
   - Documenter : nouveaux fichiers, patterns introduits, décisions techniques
   - Une modification est "significative" si : nouveau composant/service, changement d'architecture, nouveau pattern, ou modification du flux de données

### Contenu attendu dans chaque fichier feature

#### Feature: [Nom]

##### Fichiers principaux
- Liste des fichiers clés avec leur rôle
- Mise à jour obligatoire si structure change

##### Architecture et flux
- Flux de données simplifié
- Décisions techniques importantes
- Patterns spécifiques à cette feature

##### Conventions
- Règles spécifiques à cette feature
- Format des erreurs, nommage, etc.

##### Changelog (optionnel mais recommandé)
- Date et résumé des changements majeurs

### Règles importantes
- Une doc obsolète est pire que pas de doc - maintenir à jour est CRITIQUE
- Le markdown indique OÙ chercher et POURQUOI les choix, pas le code exact
- En cas de doute sur l'état de la doc : vérifier la cohérence avec le code réel
- Si aucune doc n'existe pour une feature : la créer après compréhension du code

### Commande de vérification périodique
Si demandé, vérifier la cohérence : les fichiers mentionnés existent-ils ? Les patterns sont-ils respectés ? Générer un rapport.

## Directory Structure
*Cette section sera mise a jour automatiquement au fur et a mesure de l'evolution du projet*

```
/
├── .claude/
│   └── commands/
├── changelog/
├── docs/
│   └── features/
│   └── PRDs/
├── .agent-os/
│   └── product/
└── ...
```

## APPLICATION DES REGLES

Ces consignes constituent un contrat inviolable. Leur non-respect invalide toute contribution au projet.

**PRIORITE ABSOLUE**: La qualite et la conformite priment sur la rapidite d'execution.


---

*Ces regles s'appliquent sans exception a partir de maintenant et pour toute interaction future.*
