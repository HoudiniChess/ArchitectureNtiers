# Javascript : les bases.

## Définitions

**Javascript** : JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l'utilisation de NodeJS. (source wikipedia)

**ECMAScript** : ECMAScript est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International dans le cadre de la spécification ECMA-262. Il s'agit donc d'un standard, dont les spécifications sont mises en œuvre dans différents langages de script, comme JavaScript ou ActionScript, ainsi qu'en C++ (norme 2011). C'est un langage de programmation orienté prototype.

![html dom](assets_js/ecmascript.png)

## Fonctionnalités de bases

### Type de base (typage dynamique)

```javascript
var index = 10;

index = 'plop';
var test = true;
var nom = 'toto';
var prenom = 'dupond';
var invites = ['Jean', 'Paul', 'Pierre'];
var now = new Date();
var mapAttribut = { id: 1, alias: 'Plop', valeur: [1, 2, 3] };
```

### Debug dans la console

```javascript
console.log('hello log');
console.info('hello info');
console.warn('hello warn');
console.error('hello error');
```

### Les fonctions

```javascript
function maFonction(param1, param2) {
  return param1 + ' ' + param2;
}
//identique à (mais anonyme)
var maFct = function(param1, param2) {
  return param1 + ' ' + param2;
};
```

### Expressions régulières

```javascript
var phraseLambda = 'Bonjour Plop, comment ça va ?';
// Exploitation via chaîne de caractère => trouvé
var mot = 'Plop';
console.info('trouvé : ' + phraseLambda.search(mot));

// Exploitation via Regex => trouvé
var regEx = new RegExp(/Plop/);
regEx = /Plop/;
console.info('trouvé : ' + phraseLambda.search(regEx));

// Exploitation via Regex (case sensitive) => non trouvé
regEx = /plop/;
console.info('non trouvé : ' + phraseLambda.search(regEx));

// Exploitation via Regex (case insensitive => trouvé
regEx = /plop/i;
console.info('trouvé : ' + phraseLambda.search(regEx));
```

### Conditions

#### if / esle

```javascript
function hello() {
  var date = new Date();
  if (date.getHours <= 20) {
    return 'bonjour CEZI';
  } else {
    return 'bonsoir CEZI';
  }
}
```

#### switch

```javascript
function voyage() {
  var date = new Date();
  var rvlf = '';
  switch (date.getFullYear()) {
    case 2017:
      rvlf = "T'es dans le passé";
      break;
    case 2018:
      rvlf = "T'es dans le présent";
      break;
    default:
      rvlf = 'Tu voyages dans le temps !';
      break;
  }
  return rvlf;
}
```

#### Opérateur ternaire '?'

```javascript
function coupDeBol() {
  var date = new Date();
  var milieu = date.getMinutes === 30 ? true : false;
  return milieu;
}
```

#### Comparaison

```javascript
var a = '1';
var b = 1;
console.info('a == b : ' + (a == b));
console.info('a === b : ' + (a === b));

a == b; // true
a === b; // false

//JS tente le cast pour comparer !
```

#### Boucles

##### For

```javascript
// boucle avec index sur un tableau
function cherche(value, caractere) {
  for (var index = 0; index < value.length; index++) {
    if (value.charAt(index) === caractere) {
      return index;
    }
  }
  return -1;
}

// boucle avec valeur sur un tableau
function cherche(value, caractere) {
  let index = 0;
  for (const char of value) {
    if (char === caractere) {
      return index;
    }
    index++;
  }
  return -1;
}

// boucle sur un objet
function parcours(objet) {
  for (const property of object) {
    // property : nom de l'attribut
    // valeur : object[property]
  }
}
```

##### While

```javascript
function cherche(value, caractere) {
  var index = 0;
  while (index < value.length) {
    if (value.charAt(index) === caractere) {
      return index;
    }
    index++;
  }
  return -1;
}

// même logique pour do{}while(test)
```

#### Prototype

La quasi-totalité des objets JavaScript descendent de Object ; un objet classique héritera donc des méthodes et propriétés de Object.prototype.
Lorsque l'on fait appel à une propriété sur un objet, le JavaScript va chercher si la propriété est présente sur l'objet puis sur son prototype, puis sur le prototype de son prototype (et ainsi de suite...). C'est ce système qui est utilisé en interne pour faire fonctionner les variables de bases.

```javascript
Personne.prototype.toStringDrole = function() {
  return this.toString() + ' est drôle';
};

// instancier un objet d'un prototype
var proto = {
  toStringPasDrole: function() {
    return this.prenom + " n'est pas drôle.";
  }
};
pLambda = Object.create(nouveauProto);
pLambda.prenom = 'Bob';
console.info('pLambda 2 : ' + pLambda.toStringPasDrole());
```

## Manipulation du DOM

### Sélecteurs

- document.getElementById("id") : Accéder à un élément depuis son identifiant (attribut « id »). Renvoi un élément du DOM

```javascript
var pBalise = document.getElementById('pId');
pBalise.innerHTML = 'Hello World en Javascript !';
```

- document.getElementsByName('monNom'); : Accéder à tout les éléments du DOM avec ce nom. Renvoi un tableau d’éléments.

```javascript
var divs = document.getElementsByTagName('div');
for (var i = 0; i < 3; i++) {
  divs[i].innerHTML = 'je suis le ' + i + ' div !';
}
```

- document.getElementsByTagName('div'); : Accéder à tout les éléments du DOM de type <div/>. Renvoi un tableau d’éléments

```javascript
var pNames = document.getElementsByName('pName');
pNames[0].innerHTML = 'Hello World en Javascript par le nom!';
```

- document.querySelector(".maClass"); : Remplace getElementById, mais avec beaucoup plus de fonctionnalités.<br/>
  Exemple : accéder à un élément depuis sa classe CSS.

```javascript
var pBalise = document.querySelector('.maClass');
pBalise.innerHTML = 'Hello Ma Classe avec Query Selector';

// querySelector avancé

// par id
document.querySelector('#pId').style.backgroundColor = '#ededed';

// par type + classe
document.querySelector('p.maClass').style.backgroundColor = '#ffcc00';

// par positionnement relatif
document.querySelector('p, div').style.backgroundColor = '#00ff00';

// par positionnement enfant / parent
document.querySelector('div > p').style['font-size'] = '50px';

// par valeur d'attribut
document.querySelector('p[align]').style['background-color'] = '#0000ff';
```

- document.querySelectorAll(".maClass"); : Accéder à tous les éléments depuis une classe CSS. <br/>
  Exemple : accéder à un élément depuis sa classe CSS.

```javascript
var pBalises = document.querySelectorAll('.maClass');
for (var i = 0; i < pBalises.length; i++) {
  pBalises[i].innerHTML = 'je suis le ' + i + ' p !';
}
```

### Création de noeuds

- createElement("P"); : Créer un élément dont le type est défini en paramètre de la méthode.

- createTextNode("Du contenu."); : Créer un élément textuel.

- appendChild(child) : Ajouter un nœud (élément) au parent appelant.

```javascript
<!-- création -->
<div id="createurDuJs"></div>

function creerDuContenuAvecJS(){
	var bebeP = document.createElement("P");
	var texteP = document.createTextNode("Je suis un <p> généré par du Javascript");
	bebeP.appendChild(texteP);
	var createurDuJs = document.querySelector('#createurDuJs');
	createurDuJs.appendChild(bebeP);
}
```

### Attributs

```javascript
var aLink = document.querySelector('#aLink');

// Récupérer l’attribut d’une balise.
aLink.getAttribute('href');

// Modifier l’attribut d’une balise.
aLink.setAttribute('href', 'http://www.google.fr');
```

### Styles

```javascript
<p
  id="pCouleur"
  onmouseover="pMouseInteract(true)"
  onmouseout="pMouseInteract(false)"
>
  La vie en couleur !
</p>;

function pMouseInteract(value) {
  var pCouleur = document.querySelector('#pCouleur');
  pCouleur.className = value ? 'class1' : 'class2';
}
```

## Intéraction & Evènements

### Evènements sur le DOM

![html dom](assets_js/dom_event.png)

```javascript
<body onload="bodyLoadHandler(event);" />;
function bodyLoadHandler(event) {
  console.info('Je suis prêt !');
}
```

### Evènements clavier

![html dom](assets_js/keyboard_event.png)

```javascript
<input type="text" onkeydown="keyDownHandler(event)" />;
function keyDownHandler(event) {
  console.info('Tu as appuyé sur la touche : ', event.key);
}
```

### Evènements souris

![html dom](assets_js/mouse_event.png)

```javascript
<input type="button" onclick="clickHandler()" value="HELLO" />;
function clickHandler(event) {
  console.info('Tu as appuyé sur le bouton HELLO ! ');
}
```

### Evènements touch

![html dom](assets_js/touch_event.png)

```javascript
<canvas id="monCanvasDeDessin" width="500" height="500" />;
function init() {
  var monCanvas = document.getElementById('monCanvasDeDessin');
  monCanvas.addEventListener('touchmove', dessine, false);
  monCanvas.addEventListener('touchend', arreteDeDessiner, false);
  ctx = monCanvas.getContext('2d');
}
```

## Requêtes HTTP

On utilise  XMLHttpRequest pour récupérer facilement des données via HTTP. En dépit de son nom, il a d'autres usages que de seuls documents XML.

```javascript
const req = new XMLHttpRequest();
req.onreadystatechange = function(event) {
  if (this.readyState === XMLHttpRequest.DONE) {
    if (this.status === 200) {
      console.log('Réponse reçu: %s', this.responseText);
    } else {
      console.log(
        'Status de la réponse: %d (%s)',
        this.status,
        this.statusText
      );
    }
  }
};
req.open('GET', 'personnes.json', true);
req.send(null);
```

## ES6

### Classe en ES5

```javascript
function PersonneES5(nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
  this.toString = function() {
    return this.prenom + ' ' + this.nom;
  };
}
var pES5 = new Personne('Gaga', 'Lady');
console.info('personne ES5 : ', pES5.toString());
```

### Classe en ES6

```javascript
class PersonneES6 {
  constructor(nom, prenom) {
    this.prenom = prenom;
    this.nom = nom;
  }

  toString() {
    return `${this.prenom} ${this.nom}`;
  }
}

var pES6 = new PersonneES6('Gaga', 'Lady');
console.info('personne ES6 : ', pES6.toString());
```

### Fonctions fléchées

Les fonctions fléchées permettent de résoudre tout les problèmes de scope liés au javascript. En effet, la fonction fléchée permet de garder le garder le scope de l'objet dans une méthode imbriqué. Ici l'occurence 'this' reste la même dans le callback du setTimeout.

```javascript
class Personne {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.reveille = false;

    console.info(this.toString());
    setTimeout(() => {
      this.reveilleToi(true);
      console.info(this.toString());
    }, 2000);
  }
  reveilleToi(value) {
    this.reveille = value;
  }
  toString() {
    return this.prenom + ' ' + this.nom + ' ' + this.reveille;
  }
}
```

### ES6 : Les Promesses (Promise)

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais. Une promesse peut être résolu (resolve) en cas de succès d'un traitement, ou rejetée (reject) en cas d'échec d'un traitement.
Le chaînage d'une promesse permet de ne pas à avoir à orchestrer une exécution asynchone d'un traitement : on utilise pour cela then / catch.

```javascript
// résolution d'une promesse
reveilleToiTranquillement() {
	let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            this.reveille = true;
            return resolve(this.reveille);
        }, 3000);
	});
	return promise;
}

// chaînage d'execution
let personne = new Personne("Dupond", "Jean");
personne.reveilleToiTranquillement().then(result => {
	console.info("je suis reveillé !");
}).then(() => {
	personne.partirCourir();
}).catch(error => {
	console.info("Laisse moi dormir");
})
```

### ES7 : Async / Await

Les mots clés 'async' et 'await' permettent de traiter les appels asynchrones de la même façon que les promesses.

```javascript
// résolution d'une promesse par le biais de async/await
async asyncReveilleToiTranquillement() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.reveille = true;
        return resolve(this.reveille);
      }, 3000);
    });
    let result = await promise;

    return result;
  }


async function traiterReveil() {
  let reveil = await personne.asyncReveilleToiTranquillement();
  console.info('je suis reveillé : ', reveil);
  personne.partirCourir();
}

traiterReveil();
```
