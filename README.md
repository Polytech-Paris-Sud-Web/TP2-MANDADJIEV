# Application web d'articles

Pour lancer l'application, il faut d'abord lancer le serveur de base de données json, puis installer les dépendances, et enfin, lancer l'application.
Pour ce faire: 

### Lancer le serveur de base de données json

Ecrire ces commandes dans un terminal:

```shell script
cd angular5-articles-app
json-server --watch db.json
```

### Installer les dépendances

Dans un terminal différent du premier, écrire ces commandes:

```shell script
cd angular5-articles-app
npm install
```
### Lancer l'application
```shell script
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Migration Angular 5 -> 8

Voici les commandes que j'ai lancées pour migrer ce projet d'Angular 5 à Angular 8

```shell script
update @angular/cli@6
ng update @angular/core@6
npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json
ng update @angular/cli@7 @angular/core@7
ng update @angular/cli --migrate-only --from=1.7.0 # cette commande a permis de générer le fichier angular.json
ng update @angular/cli@8 @angular/core@8
npm install
```

## Migration Angular 8 -> 9

Voici les commandes que j'ai lancées pour migrer ce projet d'Angular 8 à 9

```shell script
ng update @angular/core@8 @angular/cli@8
ng update @angular/core @angular/cli
npm install
```

## Question sur la migration
La migration est intéressante pour la suite du cours car:
- Cela permet de se heurter à une problématique directement liée au monde de l'entreprise.
En effet, il est chose courant de devoir migrer une application vers des librairies mises à jour.
- Cela permet de bénéficier de la version la plus robuste en termes de sécurité sur l'application
