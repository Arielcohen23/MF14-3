# 🚀 Guide complet pour importer votre projet sur GitHub

## Étape 1: Créer le repository sur GitHub

1. **Allez sur GitHub.com** et connectez-vous
2. **Cliquez sur "New repository"** (bouton vert)
3. **Configurez le repository** :
   - Repository name: `mf14-ecommerce`
   - Description: `Site e-commerce professionnel pour masques à gaz MF14`
   - Public ou Private (votre choix)
   - ❌ **NE PAS** cocher "Add a README file" (on a déjà tout)
   - ❌ **NE PAS** ajouter .gitignore ou license (déjà créés)

## Étape 2: Initialiser Git localement

Ouvrez un terminal dans votre dossier de projet et exécutez :

```bash
# Initialiser le repository Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: MF14 E-commerce website"
```

## Étape 3: Connecter à GitHub

```bash
# Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/mf14-ecommerce.git

# Définir la branche principale
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

## Étape 4: Vérifier l'upload

1. **Rafraîchissez votre page GitHub**
2. **Vérifiez que tous les fichiers sont présents** :
   - ✅ src/ (tous les composants)
   - ✅ package.json
   - ✅ README.md
   - ✅ .github/workflows/
   - ✅ docs/

## Étape 5: Configurer GitHub Pages (optionnel)

1. **Allez dans Settings** de votre repository
2. **Scrollez jusqu'à "Pages"**
3. **Source**: GitHub Actions
4. **Le site sera disponible** à : `https://VOTRE-USERNAME.github.io/mf14-ecommerce/`

## Étape 6: Configurer les secrets (si nécessaire)

Pour les déploiements automatiques :

1. **Settings** → **Secrets and variables** → **Actions**
2. **Ajoutez les secrets nécessaires** :
   - `SHOPIFY_CLI_THEME_TOKEN` (pour Shopify)
   - `NETLIFY_AUTH_TOKEN` (pour Netlify)

## 🔧 Commandes Git utiles

```bash
# Voir le statut
git status

# Ajouter des modifications
git add .
git commit -m "Description des changements"
git push

# Créer une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite

# Fusionner une branche
git checkout main
git merge feature/nouvelle-fonctionnalite
```

## 🚨 En cas de problème

### Erreur d'authentification
```bash
# Utiliser un token personnel au lieu du mot de passe
# Générez un token sur GitHub.com → Settings → Developer settings → Personal access tokens
```

### Repository déjà existant
```bash
# Si vous avez déjà créé le repo avec des fichiers
git pull origin main --allow-unrelated-histories
git push origin main
```

### Fichiers trop volumineux
```bash
# Vérifier la taille des fichiers
find . -size +50M -type f

# Ajouter au .gitignore si nécessaire
echo "dist/" >> .gitignore
```

## ✅ Checklist finale

- [ ] Repository créé sur GitHub
- [ ] Code poussé avec succès
- [ ] README.md visible et formaté
- [ ] GitHub Actions configurées
- [ ] GitHub Pages activées (optionnel)
- [ ] Secrets configurés (si nécessaire)

## 🎯 Prochaines étapes

1. **Personnalisez le README** avec vos informations
2. **Configurez les intégrations** (Netlify, Vercel, etc.)
3. **Invitez des collaborateurs** si nécessaire
4. **Configurez les issues templates**
5. **Ajoutez des labels** pour organiser

Votre projet MF14 E-commerce est maintenant sur GitHub ! 🛡️