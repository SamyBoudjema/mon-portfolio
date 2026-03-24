# 🚀 Portfolio - Samy Boudjema

> Portfolio personnel moderne développé avec React.js et TypeScript, présentant mon parcours professionnel, mes compétences et mes projets.

[![Déployé sur GitHub Pages](https://img.shields.io/badge/Déployé%20sur-GitHub%20Pages-success?style=flat-square&logo=github)](https://samyboudjema.github.io/mon-portfolio/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## 📖 À propos

Ce portfolio présente mon parcours professionnel en tant que **Développeur Full Stack** et **Consultant en alternance** chez DataDocs. Il met en valeur mes compétences techniques, mes expériences professionnelles et mes projets personnels.

### 🎯 Objectifs du projet

- **Présenter mon profil professionnel** de manière moderne et interactive
- **Démontrer mes compétences techniques** en développement web
- **Faciliter les contacts** avec un formulaire intégré
- **Offrir une expérience utilisateur optimisée** sur tous les appareils

## 🛠️ Technologies utilisées

### Frontend
- **React.js 19.0.0** - Framework JavaScript
- **TypeScript 4.9.5** - Typage statique pour JavaScript
- **CSS3** - Styling moderne avec animations et responsive design
- **Font Awesome** - Icônes vectorielles

### Formulaire de contact
- **React Hook Form 7.56.4** - Gestion des formulaires
- **Yup 1.6.1** - Validation de schémas
- **EmailJS** - Envoi d'emails côté client

### Outils de développement
- **Create React App** - Configuration et build
- **GitHub Pages** - Hébergement et déploiement
- **Git** - Contrôle de version

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/SamyBoudjema/mon-portfolio.git

# Accéder au dossier du projet
cd mon-portfolio

# Installer les dépendances
npm install
```

### Lancement en développement

```bash
npm start
```

L'application sera accessible à l'adresse : [http://localhost:3000/mon-portfolio](http://localhost:3000/mon-portfolio)

### Build de production

```bash
npm run build
```

### Déploiement sur GitHub Pages

```bash
npm run deploy
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation principale
│   │   └── Footer.tsx      # Pied de page
│   └── sections/
│       ├── Hero.tsx        # Section d'accueil
│       ├── About.tsx       # À propos et parcours
│       ├── Projects.tsx    # Portfolio de projets
│       ├── Skills.tsx      # Compétences techniques
│       └── Contact.tsx     # Formulaire de contact
├── assets/                 # Images et ressources
├── App.tsx                 # Composant principal
├── App.css                 # Styles globaux
└── index.tsx              # Point d'entrée
```

## ✨ Fonctionnalités

### 🎨 Design et UX
- **Design moderne et responsive** - Optimisé pour mobile, tablette et desktop
- **Animations fluides** - Transitions CSS3 et effets de survol
- **Navigation intuitive** - Menu fixe et scrolling fluide
- **Thème sombre élégant** - Design moderne avec couleurs cohérentes

### 📋 Sections principales

1. **Accueil (Hero)** - Présentation avec liens sociaux et CV
2. **À propos** - Parcours professionnel avec timeline interactive
	 - Formation universitaire et professionnelle
	 - Expériences professionnelles détaillées
3. **Projets** - Portfolio avec liens GitHub/GitLab
4. **Compétences** - Technologies organisées par catégories
5. **Contact** - Formulaire avec validation et envoi par EmailJS

### 🔧 Fonctionnalités techniques
- **Formulaire de contact fonctionnel** avec EmailJS
- **Validation avancée** avec React Hook Form et Yup
- **Responsive design** pour tous les écrans
- **SEO optimisé** avec meta tags appropriées
- **Performance optimisée** avec lazy loading et optimisations React

## 🎯 Migration JavaScript → TypeScript

Ce projet a été entièrement migré de JavaScript vers TypeScript pour améliorer :

- ✅ **Sécurité du code** - Détection d'erreurs à la compilation
- ✅ **Maintenabilité** - Types explicites et documentation automatique  
- ✅ **Productivité** - Autocomplétion avancée dans l'IDE
- ✅ **Évolutivité** - Refactoring plus sûr et code plus robuste

## 📞 Configuration EmailJS

Pour configurer l'envoi d'emails, créez un compte [EmailJS](https://www.emailjs.com/) et configurez :

1. Votre service email (Gmail, Outlook, etc.)
2. Votre template d'email
3. Les clés API dans le composant `Contact.tsx`

## 🔄 Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Lance le serveur de développement |
| `npm run build` | Crée le build de production |
| `npm test` | Lance les tests (à implémenter) |
| `npm run deploy` | Déploie sur GitHub Pages |
| `npm run eject` | Éjecte la configuration CRA |

## 🌟 Démonstration

**🔗 Portfolio en ligne :** [samyboudjema.github.io/mon-portfolio](https://samyboudjema.github.io/mon-portfolio/)

### Captures d'écran

- **Version Desktop** - Design moderne avec navigation fluide
- **Version Mobile** - Interface adaptée pour smartphones
- **Formulaire de contact** - Validation en temps réel

## 🤝 Contributions

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez votre **branch de feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branch (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Samy Boudjema**
- 🌐 Portfolio : [samyboudjema.github.io/mon-portfolio](https://samyboudjema.github.io/mon-portfolio/)
- 💼 LinkedIn : [@samy-boudjema](https://www.linkedin.com/in/samy-boudjema-814076218/)
- 🐙 GitHub : [@SamyBoudjema](https://github.com/SamyBoudjema)
- 🦊 GitLab : [@samy.bdm16](https://gitlab.com/samy.bdm16)

---

<div align="center">
	<strong>⭐ N'hésitez pas à donner une étoile si ce projet vous plaît !</strong>
</div>
