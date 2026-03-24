# 🗺️ Roadmap - Portfolio Samy Boudjema

> Dernière mise à jour : 10/03/2026

---

## 🔴 Bugs / Problèmes à corriger

- [x] **Âge codé en dur** — `About.tsx:66`
  - "24 ans" ne se met pas à jour automatiquement
  - → Remplacer par un calcul dynamique basé sur la date de naissance

- [x] **Aucun attribut `aria-*`** — Tout le projet
  - Pas de `aria-label` sur les icônes sociales et liens GitHub
  - Pas de `role="tablist"` / `role="tab"` sur les onglets Formation/Expérience
  - Pas de texte `sr-only` pour les lecteurs d'écran

- [x] **Image Open Graph relative** — `index.html:26`
  - `og:image` utilise `./image_512.png` (chemin relatif)
  - → Les réseaux sociaux ont besoin d'une URL absolue pour la preview

---

## 🟡 Améliorations UX / Design

- [x] **Grille projets déséquilibrée**
  - 7 projets → la dernière ligne n'a qu'1 carte isolée
  - Options : ajouter un 8e/9e projet, ou `span` plus large pour le dernier

- [x] **Animations au scroll**
  - Toutes les sections apparaissent d'un coup
  - → `IntersectionObserver` avec des fade-in pour dynamiser l'apparition

- [x] **Scroll-spy navigation**
  - Le lien actif dans le header ne change pas pendant le scroll
  - → Surligner le lien de la section visible à l'écran

- [x] **Feedback formulaire : remplacer `alert()`**
  - `Contact.tsx` utilise `alert()` natif pour succès/erreur
  - → Toast notification plus professionnel (ex: react-hot-toast)

- [x] **Loading state sur le bouton "Envoyer"**
  - Pas d'indicateur de chargement pendant l'envoi du message
  - → Spinner ou texte "Envoi en cours..." + désactiver le bouton

- [x] **Lien "Accueil" dans le header**
  - La navigation ne permet pas de remonter facilement en haut de page
  - → Ajouter un lien ou un bouton "scroll to top"

---

## 🟢 Optimisations techniques

- [x] **Meta description vague** — `index.html`
  - Actuelle : "Développeur Full Stack - Alternant en Informatique"
  - → Ajouter "Cybersécurité" et des mots-clés pertinents

- [x] **Lazy loading des composants**
  - Tous les composants sont importés de façon synchrone
  - → `React.lazy()` + `Suspense` pour les sections below-the-fold (About, Skills, Contact)
  - Réduit le First Contentful Paint

- [x] **Compétences incomplètes** — `Skills.tsx`
  - Technos manquantes utilisées dans les projets : SwiftUI, .NET, Unity/C#, TypeScript
  - → Ajouter ces compétences dans les catégories appropriées

- [x] **Schéma Yup recréé à chaque render** — `Contact.tsx`
  - Le schéma de validation est défini à l'intérieur du composant
  - → Le déplacer en dehors du composant pour éviter des re-créations inutiles

---

## 🔴 Sécurité — Corrections prioritaires (P0)

- [x] **Email exposé en clair dans le HTML** — `Contact.tsx:L??`
  - `<input type="hidden" name="to_email" value="samy.bdm16@gmail.com" />` visible dans le source
  - → Supprimer ce champ, configurer l'adresse destinataire directement dans le template EmailJS (côté serveur)

- [x] **Aucune Content Security Policy (CSP)** — `public/index.html`
  - Aucun header ni méta-tag CSP : les attaques XSS ne sont pas bloquées par politique navigateur
  - → Ajouter `<meta http-equiv="Content-Security-Policy">` avec directives `default-src`, `script-src`, `style-src`, `img-src`, `connect-src`

- [x] **Aucune balise canonical** — `public/index.html`
  - Risque de contenu dupliqué pour les moteurs de recherche (GitHub Pages vs domaine custom)
  - → Ajouter `<link rel="canonical" href="https://samyboudjema.fr/">`

- [x] **`console.log()` d'erreurs techniques en production** — `Contact.tsx`
  - Expose les détails de configuration EmailJS dans la console du navigateur
  - → Conditionner au `process.env.NODE_ENV !== 'production'` ou supprimer

- [x] **Aucun rate-limiting côté client sur le formulaire** — `Contact.tsx`
  - Aucune protection contre les soumissions répétées (spam)
  - → Ajouter un debounce de 3 secondes après chaque envoi + désactiver le bouton temporairement

---

## 🟠 Accessibilité — Corrections P1 (WCAG 2.1)

- [x] **Labels non associés aux champs de formulaire** — `Contact.tsx`
  - Les `<label>` n'ont pas `htmlFor` et les `<input>` n'ont pas d'`id`
  - → Violation WCAG 2.1 niveau A — ajouter `htmlFor`/`id` sur chaque paire label/input

- [x] **Icônes Font Awesome sans `aria-hidden`** — `Skills.tsx`
  - Les `<i className="...">` dans `SkillItem` et `SkillCategory` sont lus par les lecteurs d'écran
  - → Ajouter `aria-hidden="true"` sur toutes les icônes décoratives

- [x] **Lien actif sans `aria-current="page"`** — `Header.tsx`
  - Les lecteurs d'écran ne savent pas quel lien est actif
  - → Ajouter `aria-current={activeSection === id ? 'page' : undefined}` sur chaque lien

- [x] **`<nav>` sans `aria-label`** — `Header.tsx`
  - → Ajouter `aria-label="Navigation principale"`

- [x] **Aucun skip link** — `App.tsx` / `index.html`
  - Les utilisateurs clavier ne peuvent pas sauter la navigation
  - → Ajouter `<a href="#main-content" className="skip-link">Aller au contenu</a>`

- [x] **Aucune règle `prefers-reduced-motion`** — `App.css`
  - Les animations sont jouées même si l'utilisateur a demandé moins de mouvement
  - → Ajouter `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`

---

## 🟡 Performance — Corrections P1

- [x] **Scroll listener non throttlé** — `Header.tsx`
  - `getBoundingClientRect()` sur 5 éléments DOM appelé à chaque pixel de scroll = reflows forcés
  - → Encapsuler dans `requestAnimationFrame` (throttle natif)

- [x] **Données statiques recréées à chaque render** — `Projects.tsx`, `Skills.tsx`
  - `projectsData[]` et `skillsCategories[]` sont définis à l'intérieur du composant
  - → Déplacer hors du composant (constante au niveau module)

- [x] **`calculateAge()` recalculée à chaque render** — `About.tsx`
  - → Extraire hors du composant en constante calculée une fois

- [x] **Images sans `loading="lazy"`** — `About.tsx`
  - Les logos d'entreprises sont chargés de façon synchrone
  - → Ajouter `loading="lazy"` sur toutes les `<img>` non critiques

---

## 🟡 Qualité TypeScript — Corrections P2

- [x] **TypeScript 4.9.5 obsolète** — `package.json`
  - Incompatible avec React 19 / `@types/react ^19`. Nécessite TypeScript ≥ 5.0
  - → Mettre à jour : `npm install typescript@^5.8 --save-dev`

- [x] **Dépendances mal placées** — `package.json`
  - `@testing-library/*`, `gh-pages` sont dans `dependencies` (runtime) au lieu de `devDependencies`
  - → Déplacer dans `devDependencies`

- [x] **`domRef` trop restrictif** — `useIntersectionObserver.ts`
  - `useRef<HTMLDivElement>` empêche l'usage sur `<section>`, `<article>`, etc.
  - → Changer en `useRef<HTMLElement>`

- [x] **Pas d'alias de chemins TypeScript** — `tsconfig.json`
  - Les imports relatifs profonds (`../../hooks/...`) sont fragiles
  - → Configurer `paths: { "@/*": ["src/*"] }` dans `tsconfig.json`

---

## 🟢 SEO & Contenu — P2

- [x] **Incohérence `og:url` vs `homepage`** — `public/index.html` + `package.json`
  - `og:url` = `https://samyboudjema.fr` mais `homepage` = `https://SamyBoudjema.github.io/mon-portfolio`
  - → Aligner les deux ou configurer le domaine custom sur GitHub Pages

- [x] **Données structurées JSON-LD absentes** — `public/index.html`
  - → Ajouter un bloc `<script type="application/ld+json">` avec schema.org `Person`

- [x] **Sitemap.xml absent**
  - → Créer `public/sitemap.xml` (SPA one-page = 1 seule URL)

- [x] **README.md dupliqué** — `README.md`
  - Il contient le boilerplate CRA + le contenu personnel concaténés
  - → Nettoyer le README : supprimer le boilerplate CRA

---

## 🔵 Tests — P2

- [x] **Zéro test écrit** malgré les bibliothèques installées
  - → Écrire les tests unitaires des composants purs : `Footer`, `SkillItem`, `ProjectCard`
  - → Écrire un test d'intégration pour le formulaire Contact (validation Yup)
  - → Écrire un test e2e avec Playwright : navigation, chargement des sections, accessibilité

---

## 🔵 DevSecOps CI/CD — P1

- [x] **Aucun pipeline GitHub Actions**
  - → Créer `.github/workflows/ci.yml` : lint + TypeScript check + npm audit + CodeQL
  - → Créer `.github/workflows/cd.yml` : build + déploiement GitHub Pages conditionnel

- [x] **Aucune gestion des mises à jour de dépendances**
  - → Configurer `.github/dependabot.yml` (npm + GitHub Actions, hebdomadaire)

- [x] **Aucun linter de sécurité**
  - → Installer `eslint-plugin-security` et `eslint-plugin-jsx-a11y`
  - → Créer `.eslintrc.json` avec les règles de sécurité et accessibilité

- [x] **Secrets non validés en CI**
  - → Utiliser GitHub Actions Secrets pour `REACT_APP_EMAILJS_*`
  - → Vérifier l'absence de secrets dans git avec `trufflesecurity/trufflehog`

- [x] **Aucune politique de sécurité projet**
  - → Créer `SECURITY.md` avec la politique de divulgation responsable

---

## 📋 Récapitulatif des priorités

| Priorité | Nombre d'items | Catégorie |
|----------|---------------|-----------|
| 🔴 P0 — Critique | 5 | Sécurité |
| 🟠 P1 — Important | 10 | Accessibilité + Performance + CI/CD |
| 🟡 P2 — Moyen | 9 | TypeScript + SEO |
| 🔵 P3 — Long terme | 3 | Tests |
