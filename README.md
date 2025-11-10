# Ustream Movies - React Hooks & Firebase

Application realisee par **Melvin, Developpeur Full Stack Junior**, pour illustrer la manipulation des hooks React autour d'un catalogue de films connecte a Firebase.

---

## Apercu
Ustream Movies est une mini plateforme permettant de consulter, publier et administrer des films ou series favoris. Le projet combine `useState`, `useEffect`, `useRef`, `useSWR` et un store Zustand pour la gestion d'etat, tandis qu'Axios dialogue avec Firebase Realtime Database. L'interface s'appuie sur Tailwind CSS 4, DaisyUI et Swiper pour livrer une experience moderne et responsive.

---

## Couverture de l'exercice
- **Carte de cinema** : cartes interactives (`components/CalalogueListMovie.jsx` et `src/page/Movies.jsx`) affichent affiche, categorie, resume et actions.
- **Liste de films** : la page Movies consomme l'API Firebase via SWR (`controllers/GetAllMovies.js`) et affiche dynamiquement le catalogue.
- **Filtres (titre / note)** : `components/Search.jsx` filtre instantanement par titre. Le store `MovieStore` expose deja un statut pret pour etendre facilement le filtrage (ex. note) decrit dans la roadmap.
- **Ajout et edition** : `components/AddMovieinput.jsx` permet d'enregistrer un film (titre, descriptions, image, categorie, statut) et `controllers/updateStatus.js` pilote la publication publique/privee.

---

## Fonctionnalites principales
- Catalogue public synchronise en temps reel avec Firebase (SWR + Axios).
- Authentification et persistance utilisateurs (Firebase Auth + `controllers/Save_user.js`).
- Gestion CRUD : ajout, modification, suppression, bascule `public/private`.
- Navigation protege (middleware `LoginMilldewers`) et affichage detaille via `ShowDetailsMovie`.
- Recherche instantanee par titre avec composant `Search`.
- UI moderne : Navbar responsive, carousel Swiper, cartes animees, modals pour creation et edition.

---

## Architecture
```
React-Hooks/
|-- components/           # UI reutilisable (Navbar, Search, Catalogue, Swiper, etc.)
|-- controllers/          # Couche services (Axios + Firebase)
|-- firebase/firebase-config.js
|-- src/page/Movies.jsx   # Page principale et integration des hooks
|-- store/MovieStore.js   # Zustand store pour liste et film courant
`-- public/               # Assets Vite
```

---

## Stack technique
- **Front** : React 19 + Vite 7, React Router, React Icons, SWR, Swiper.
- **State** : Hooks natifs + Zustand.
- **Back/Services** : Firebase (Auth + Realtime Database) et Axios.
- **UI** : Tailwind CSS 4, DaisyUI, gradients personnalises.
- **Qualite** : ESLint 9, plugin React Hooks, PostCSS.

---

## Variables d'environnement
Creer un fichier `.env` (deja ignore par Git) et y copier vos secrets Firebase :
```
VITE_DATABASE_URL="https://<project>.firebasedatabase.app/Ustream"
VITE_APIKEY=""
VITE_AUTHDOMAIN=""
VITE_DATABASEURL="https://<project>.firebasedatabase.app"
VITE_PROJECTID=""
VITE_STORAGEBUCKET=""
VITE_MESSAGINGSENDERID=""
VITE_APPID=""
```
`VITE_DATABASE_URL` pointe vers la branche publique utilisee par SWR, tandis que `VITE_DATABASEURL` sert a initialiser le SDK Firebase.

---

## Installation et demarrage
1. Cloner le depot : `git clone git@github.com:<user>/react-hooks.git`
2. Installer les dependances : `npm install`
3. Renseigner le fichier `.env`
4. Lancer le mode developpement : `npm run dev`

---


## Flux utilisateur
1. Connexion (email ou Google) pour enregistrer l'utilisateur dans Firebase.
2. Lecture du catalogue public via SWR (rafraichi toutes les secondes).
3. Ajout d'un film via le modal `AddMovieinput` puis ecriture sous `Movies/<userId>/<movieId>`.
4. Publication ou privatisation via `controllers/updateStatus.js`.
5. Recherche instantanee cote client avec `components/Search.jsx`.
6. Consultation detaillee dans un modal via `ShowMovie` et Zustand.


---

## Auteur
**Melvin** - Developpeur Full Stack Junior
[LinkedIn](https://www.linkedin.com/in/melvin-akou/) | [GitHub](https://github.com/melvin-phyllis)

Merci pour votre visite et vos retours !
