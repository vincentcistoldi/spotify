# spotify
Projet Spotify-like (cours ReactJS)

Pour info : 
==> Le dossier cd ne sert à rien, c'est une erreur de manip lors de la config de Firebase (qui doit pointer vers l'index de src)
==> La fonction recherche reste à débugger voir fichiers suivants dans src/player/body : 
- Dashboard.js : vue qui affiche les résultats de recherce, que je dois intégrer ensuite à Body.js
- /partials/SearchForm.js : vue que j'ai commencé à intégré au header pour effectuer la recherche
- /partials/SearchResult.js : Requete pour afficher les resultats par AlbumList, PlayList, ArtistList
+ fichier Result.js (dossier actions)


Pour lancer le projet, ouvrir spotify.js : 
- Modifier le localhost si nécessaire
- Modifier l'id Spotify correspondant a votre projet spotify (compte for dev)
- Ajouter les autorisations (scopes) si nécessaire
- Ajouter le localhost correspondant sur le projet spotify (Edit settings project > Redirect URIs)


Installer les dépendances : 
- npm install bootstrap@4.5.2 lodash@4.17.19 prop-types@15.7.2 react-bootstrap@1.3.0 redux@4.0.5 react-redux@7.2.1 react-router-dom@5.2.0 redux-thunk@2.3.0 spotify-web-api-js @material-ui/core @material-ui/icons
(ou yarn add ***)
- npm start


Pour le déploy Firebase (se connecter avec son compte google) : 
- npm install -g firebase-tools
- firebase login
- firebase init
- npm run build && firebase deploy
- Après le déploiement, modifier l'URL de redirection dans le fichier spotify.js (Ex : "https://spotify-project-ef6g6.web.app/")
- npm run build && firebase deploy
