# TP : Méteo

## Présentation

Réaliser une application Vanilla JS permettant de rechercher la météo à partir du nom d'une ville.

L'application utilisera l'API 'openweathermap' pour réaliser les recherches.

Astuce : pour faire tourner simplement un serveur local python sur un dossier :

Python 2.x

> python -m SimpleHTTPServer 8000

Python 3.x

> python3 -m http.server 8000

## Exercice

1. Créer un champ de saisie et un bouton, à la validation du champs ou click sur le bouton, la recherche est lancée.

![champ](assets_meteo/champ.jpg)

2. Exploiter l'API pour réaliser une recherche

```javascript
<!-- https://openweathermap.org/price -->
let API_KEY = "888f70e84a4d7e44f3c0d4870c926e9d";
let METEO_URL = "http://api.openweathermap.org/data/2.5/forecast?q={VILLE},FR&APPID={API_KEY}&units=metric"
```

3. Parser le flux de retour, et indiquer le nom de ville, les coordonnées géographiques, et la population dans une première DIV.

4. Parser le flux de retour, et pour chaque résultats récupérés, afficher une liste item dans une DIV de résultat. Chaque item contiendra :

- la date,
- la température,
- le taux d'humidité,
- un icon fonction du taux d'humidité

![champ](assets_meteo/resultats.jpg)

5. Afficher un loader lors du chargement de l'API afin d'avertir l'utilisateur qu'un chargement est en cours. Pour le loader vous pouvez utiliser les [animations CSS](https://www.w3schools.com/howto/howto_css_loader.asp)

6. Rendez votre application responsive, pour cela utiliser le layout Flexbox pour afficher vos résultats.
   Utiliser les options développeur de Chrome pour visualiser le rendu sur un site mobile. Vous pouvez également, si votre mobile est sur le même réseau que votre ordinateur, lancer l'application depuis votre mobile : http://{ip}:8000.

7. Ajouter un effet d'affichage différé (Fade) sur l'ajout de chaque résultats dans le DOM. Pour cela, utiliser les animations CSS.

![champ](assets_meteo/tout.jpg)

---

Le correctif est disponible [ici](./meteo-vanilla-js/)
