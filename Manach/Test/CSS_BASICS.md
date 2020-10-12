# CSS : les bases.

![css-wtf](assets_css/giphy-css.gif)

## Définitions

**CSS** : Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.

## Sélecteurs

```javascript
p{}	                    : Sélection par balise : s’applique à toutes les balises <p/>
p,h{}	                : Sélection par balise : s’applique à toutes les balises <p/> et <h/>
#xx{} 	                : Sélection par Id : s’applique à toutes les balises d’id « xx »
.xx{} 	                : Sélection par classe : s’applique à toutes les balises de classe « xx »
div > p 	            : Cascade : s’applique à toutes les balises <p/> dans un <div/>
p[attribute=value]      : Sélection par attribut
nth-child(x)            : Pointe sur l’enfant à la positon X du parent
```

## Dimensions

En pixel : 10px;<br/>
Relatif : 80%;<br/>
Calculé : calc(100% - 80px);<br/>
Taille de police :<br/>
1em : relatif à la taille de la police du parent<br/>
1rem : relatif à la taille de la police du root <HTML/><br/>

```javascript
<div style="font-size: 20px;">
  <p style="font-size: 2rem">PLOP</p>
  <p style="font-size: 2em">PLOP</p>
</div>
```

## Couleurs

Nom de la couleur : pink;
Code couleur : #ff00bf;
RGB : rgb(255, 0, 191);
RGB + Alpha : rgba(255, 0, 191, 0.863);

```javascript
p[align="right"]{
	color :rgba(255, 0, 191, 0.863);
}
```

## Propriétés principales

### Tailles

```javascript
#mon-div{
    min-width : 40px;
    min-height : 100px;
    max-width : 300px;
    max-height : 200px;
    width : 80%;
    height : 50%;
}
```

### Fonds

```javascript
#mon-div{
    background-color : #0066ff;
    background-image : url('assets/bg.jpeg');
    background-repeat : no-repeat;
    background-size : 80px 100px;
}
```

### Bordures

```javascript
#mon-div{
    border: 1px solid black;
    border-left: 2px;
    border-right: 2px;
    border-top: 2px;
    border-bottom: 2px;
    border-radius: 5px;
}
```

### Marges

```javascript
#mon-div{
	margin: 5px 5px 10px 10px; // top/right/bottom/left
}
```

### Padding

```javascript
#mon-div{
	padding: 5px 5px 10px 10px; // top/right/bottom/left
}
```

### Polices de caractère / styles

```javascript
@font-face {
    font-family: "Arial";
    src: url("/fonts/Arial.woff2");
}
#mon-div{
    font-family: 'Arial';
    font-size: 15px;
    font-weight:bold;
    font-style: italic;
    text-decoration: underline;
    text-transform : capitalize;
    letter-spacing: 2px;
    line-height: 200%;
    text-align: center;
    vertical-align: top;
}
```

### Positionnement

#### Positionnement de base

Attribut : position <br/>
Valeurs possibles :

- static : par défaut, à la suite du prédécesseur.
- relative : relatif au prédécesseur, contrainte top, bottom, right, left
- fixed : positionnement relativement à la fenêtre
- absolute : relatif à l’ancêtre ayant une position absolute, sinon relatif au body, avec contrainte top, bottom, right, left,

```javascript
div{
    position: static;
    width: 300px;
    height: 100px;
    background-color: #EDEDED;
    margin: 5px;
}
```

#### Flexbox

- Principales propriétés

```javascript
/* layout flexbox*/
display: flex;

/* Direction du layout */
flex-direction: row | row-reverse | column | column-reverse;

/* Tout sur une ligne ou passage à la ligne quand plus de place */
flex-wrap: nowrap | wrap | wrap-reverse;

/* Alignement horizontal des objets par rapport au parent */
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;

/* Alignement vertical des objets par rapport au parent */
align-items: flex-start | flex-end | center | baseline | stretch;

/* Comme justify-content mais pour les multi lignes */
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

[Tutoriaux](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### GridLayout

Flexbox ou Gridlayout ?

CSS Grid est idéale pour construire l’image plus grande. il permet de gérer très facilement la disposition de la page entière et peut gérer plus de modèles peu orthodoxes et asymétriques.
FlexBox quant à lui, est idéal pour aligner le contenu dans les éléments. Utilisez FlexBox pour positionner les petits détails de la conception.
Utilisez CSS Grid pour les mises en page 2D (lignes et colonnes).
FlexBox fonctionne mieux dans une seule dimension (lignes ou colonnes)

![html structure](assets_css/gridlayout.png)

Attention au Can I Use : [Can I Use](https://caniuse.com/#search=grid%20layout)

- Principales propriétés

```javascript
/* layout grid */
display: grid | inline-grid | subgrid;
/* disposition des colonnes */
grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
/* disposition des lignes */
grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
/* définition de la grille sous forme d'une matrice */
grid-template-areas:
"<grid-area-name> | . | none | ..."
"...";
/* espace horizontal entre les items */
grid-column-gap: <line-size>;
/* espace vertical entre les items */
grid-row-gap: <line-size>;
/* centrage horizontal des items dans un bloc de la grille */
justify-items: start | end | center | stretch;
/* centrage vertical des items dans un bloc de la grille */
align-items: start | end | center | stretch;
/* longueur explicite d'un item dans un parent gris */
grid-column: <start-line> / <end-line> | <start-line> / span <value>;
/* hauteur explicite d'un item dans un parent grid */
grid-row: <start-line> / <end-line> | <start-line> / span <value>;
```

[Tutoriaux](https://css-tricks.com/snippets/css/complete-guide-grid/)

#### Animations

> Définition d’une animation : @keyframes
>
> définir sur quelles propriétés CSS va influer l’animation,
>
> définir le comportement de l’animation

- Principales propriétés:

```javascript
/* nom de l'animation qui sera lancé sur cette une balise de cette classe */
animation-name: mon-animation-3;
/* durée de l'animation en sec ou ms */
animation-duration: 3s;
/* effet appliqué sur l'animation sous forme d'une fonction d'une courbe de bézier */
animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
/* délais avant que l'animation ne démarre */
animation-delay: 0s;
/* défini le sens de lectur de l'animation */
animation-direction: alternate; /* or: normal */
/* joue en boucle ou non */
animation-iteration-count: none;
/* défini si les propriétés CSS appliquées lors de l'animation sont conservée à la fin */
animation-fill-mode: forwards; /* or: backwards, both, none */
/* animation en pause ou play */
animation-play-state: running;
```

- Exemple

```javascript
// définition de l'animation
@keyframes mon-animation {
    0% {background-color: red;}
    25% {background-color: yellow;}
    50% {background-color: blue;}
    100% {background-color: green;}
}

// cible de l'animation
.element {
    height: 250px;
    width: 250px;
    animation-name: mon-animation;
    animation-duration: 3s;
    animation-timing-function: linear;
}
```

- Simplification de la définition de l'animation

> animation: [animation-name][animation-duration] [animation-timing-function][animation-delay] [animation-iteration-count][animation-direction] [animation-fill-mode][animation-play-state];

- Exemple

```javascript
.element3{
    height: 250px;
    width: 250px;
    margin: 0 auto;
    animation: mon-animation 3s ease-out 0s infinite alternate forwards running;
}
```

#### Responsive Design

> Viewport : désigne schématiquement la surface de la fenêtre du navigateur.

```javascript
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- width : largeur de fenêtre viewport (par exemple width="device-width")
- height : hauteur de fenêtre viewport (par exemple height="device-height")
- initial-scale : niveau de zoom initial (par exemple initial-scale="1.0")
- minimum-scale : niveau de zoom minimal (par exemple minimum-scale="0.5")
- maximum-scale : niveau de zoom maximal (par exemple maximum-scale="3.0"). Attention, la valeur "1.0" interdit le zoom et peut rendre vos pages inaccessibles
- user-scalable : possibilité à l'utilisateur de zoomer (par exemple user-scalable="yes"). Attention, la valeur "no" interdit le zoom et peut rendre vos pages inaccessibles
- target-densitydpi : choix de résolution, en dpi, de l'affichage général (spécifique Webkit et semble avoir été abandonné)

> @media : appliquer un style en fonction du périphérique qui consulte la page HTML : all, screen, print, speech

```javascript
body{
	background-color: #ffcc00;
}
@media screen and (max-width: 1280px){
	body{
		background-color: #ff0000;
	}
}

@media screen and (min-width: 200px) and (max-width: 640px){}
@media screen and (min-height: 768px) {}
@media screen and (min-resolution: 120dpi){}
@media screen and (min-device-aspect-ratio: 16/9){}
@media (min-width: 700px) and (orientation: landscape) {}
```
