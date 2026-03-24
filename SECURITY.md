# Politique de Sécurité — Portfolio Samy Boudjema

## Versions supportées

| Version | Support sécurité |
|---------|-----------------|
| main (dernière) | ✅ Supportée |
| Autres branches | ❌ Non supportées |

## Signaler une vulnérabilité

Si vous découvrez une vulnérabilité de sécurité dans ce projet, merci de procéder comme suit :

### 1. Ne pas créer une issue GitHub publique

Les issues publiques exposent la vulnérabilité avant qu'elle ne soit corrigée.

### 2. Divulgation responsable

Contactez-moi directement par email à l'adresse indiquée sur mon profil GitHub, en incluant :

- **Description** de la vulnérabilité (type, OWASP, CVE si applicable)
- **Étapes de reproduction** claires et détaillées
- **Impact potentiel** estimé (données exposées, fonctionnalité affectée)
- **Suggestion de correction** si vous en avez une (optionnel mais bienvenu)

### 3. Délai de réponse

Je m'engage à :
- Accuser réception sous **48 heures**
- Évaluer la sévérité sous **7 jours**
- Proposer un correctif sous **14 jours** pour les vulnérabilités critiques

### 4. Reconnaissance

Les chercheurs qui signalent des vulnérabilités valides seront mentionnés dans le changelog (sauf s'ils préfèrent rester anonymes).

---

## Périmètre

Ce projet est un portfolio personnel statique déployé sur GitHub Pages.

**Dans le périmètre :**
- Injection XSS dans le formulaire de contact
- Exposition de données personnelles
- Vulnérabilités des dépendances npm (CVE)
- Mauvaise configuration des headers de sécurité

**Hors périmètre :**
- Attaques nécessitant un accès physique à la machine
- Attaques de type social engineering
- Denial of Service (l'infrastructure est gérée par GitHub)

---

## Mesures de sécurité en place

- Content Security Policy (CSP) via méta-tag HTML
- Subresource Integrity (SRI) sur les ressources CDN externes
- Secrets EmailJS stockés en variables d'environnement (jamais dans le code)
- Scan automatique des dépendances via Dependabot
- Analyse SAST avec CodeQL via GitHub Actions
- Détection de secrets avec TruffleHog via GitHub Actions
- `GENERATE_SOURCEMAP=false` en production (ne pas exposer le code source)
