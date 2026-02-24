# 🗺️ Roadmap - Portfolio Samy Boudjema

> Dernière mise à jour : 24/02/2026

---

## 🔴 Bugs / Problèmes à corriger

- [ ] **Âge codé en dur** — `About.tsx:66`
  - "24 ans" ne se met pas à jour automatiquement
  - → Remplacer par un calcul dynamique basé sur la date de naissance

- [ ] **Aucun attribut `aria-*`** — Tout le projet
  - Pas de `aria-label` sur les icônes sociales et liens GitHub
  - Pas de `role="tablist"` / `role="tab"` sur les onglets Formation/Expérience
  - Pas de texte `sr-only` pour les lecteurs d'écran

- [ ] **Image Open Graph relative** — `index.html:26`
  - `og:image` utilise `./image_512.png` (chemin relatif)
  - → Les réseaux sociaux ont besoin d'une URL absolue pour la preview

---

## 🟡 Améliorations UX / Design

- [ ] **Grille projets déséquilibrée**
  - 7 projets → la dernière ligne n'a qu'1 carte isolée
  - Options : ajouter un 8e/9e projet, ou `span` plus large pour le dernier

- [ ] **Animations au scroll**
  - Toutes les sections apparaissent d'un coup
  - → `IntersectionObserver` avec des fade-in pour dynamiser l'apparition

- [ ] **Scroll-spy navigation**
  - Le lien actif dans le header ne change pas pendant le scroll
  - → Surligner le lien de la section visible à l'écran

- [ ] **Feedback formulaire : remplacer `alert()`**
  - `Contact.tsx` utilise `alert()` natif pour succès/erreur
  - → Toast notification plus professionnel (ex: react-hot-toast)

- [ ] **Loading state sur le bouton "Envoyer"**
  - Pas d'indicateur de chargement pendant l'envoi du message
  - → Spinner ou texte "Envoi en cours..." + désactiver le bouton

- [ ] **Lien "Accueil" dans le header**
  - La navigation ne permet pas de remonter facilement en haut de page
  - → Ajouter un lien ou un bouton "scroll to top"

---

## 🟢 Optimisations techniques

- [ ] **Meta description vague** — `index.html`
  - Actuelle : "Développeur Full Stack - Alternant en Informatique"
  - → Ajouter "Cybersécurité" et des mots-clés pertinents

- [ ] **Lazy loading des composants**
  - Tous les composants sont importés de façon synchrone
  - → `React.lazy()` + `Suspense` pour les sections below-the-fold (About, Skills, Contact)
  - Réduit le First Contentful Paint

- [ ] **Compétences incomplètes** — `Skills.tsx`
  - Technos manquantes utilisées dans les projets : SwiftUI, .NET, Unity/C#, TypeScript
  - → Ajouter ces compétences dans les catégories appropriées

- [ ] **Schéma Yup recréé à chaque render** — `Contact.tsx`
  - Le schéma de validation est défini à l'intérieur du composant
  - → Le déplacer en dehors du composant pour éviter des re-créations inutiles
