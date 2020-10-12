# HTML : les bases.

## Définitions

**HTML** : L’HyperText Markup Language, généralement abrégé HTML, est le format de données conçu pour représenter les pages web. C’est un langage de balisage permettant d’écrire de l’hypertexte. (source wikipedia)

**W3C** : Le World Wide Web Consortium, abrégé par le sigle W3C, est un organisme de standardisation à but non lucratif, fondé en octobre 1994 chargé de promouvoir la compatibilité des technologies du World Wide Web telles que HTML5, HTML, XHTML, XML, RDF, SPARQL, CSS, XSL, PNG, SVG et SOAP.

**HTML DOM** (Document Object Model) : représente la page HTML sous forme d’une arborescence d’objet (sous forme d’un arbre).

![html dom](assets_html/dom.png)

## Structure d'une page HTML

![html structure](assets_html/structure_html.png)

## Balises principales

### Structures

```html
<meta />   : Métadonnées de la page web : charset, viewport, description, auteur, mots-clés
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>   : Code JavaScript
<script src="javascript.js"></script>
<script>document.getElementById("demo").innerHTML = "Hello JavaScript!";</script>

<link />   : Liaison avec une feuille de style
<link rel="stylesheet" type="text/css" href="theme.css">

<style>    : Code CSS
<style>p{font-size:2em;}</style>

<title>    : Titre de la page
<title>Hello HTML</title>
```

### Format / Style

```html
<h/>        : Titres
<p/>        : Paragraphe
<br/>       : Passage à la ligne
<hr/>       : Dessiner une Ligne horizontale ou verticale
<b/>        : Gras
<i/>        : Italic
<u/>        : Souligné
<cite/>     : Citation
<pre/>      : Texte pré formaté
<code/>     : Code source
```

### Lien

```html
<a/>        : Lien

<a href="http://www.capgemini.com">Click !</a>
<a href="mailto:anthony@capgemini.com">Me contacter !</a>
<a href="#encre">Téléportation !</a>
<a name="encre">Téléportation !</a>

Target :
_blank (nouvel onglet)
_self (page en cours)
_top (lien vers la page principale à partir d’une frame)
_parent (page parent d’une popup par exemple)
framename (dans la frame associée au nom)
```

### Positionnement

```html
<div/>      : Objet rectangulaire
<div>
	1er bloc
	<div>2ème bloc</div>
	3ème block
</div>

<span/>     : Objet inline (plutôt pour l'agencement de texte)

<span>
    1er bloc
    <span>2ème bloc</span>
    3ème bloc
</span>
```

### Liste / Tableau

```html
<ul/><li/>          : Listes (à plusieurs niveau si nécessaire)

<ul>
  <li>Plip</li>
  <li>Plop</li>
  <li>plup</li>
</ul>


<table/><tr/><td/> : Tableaux

<table>
  <tr>
    <th>Nom</th>
    <th>Prénom</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jean</td>
    <td>Dupond</td>
    <td>50</td>
  </tr>
</table>
```

### Formulaire

```html
<forms/>    : Formulaire

<form 	name="mon-premier-form"
	target="_self"
	action="html-forms-send.html"
	method="POST"
>
	<!-- mes champs -->
</form>
```

Type de champs de saisie :
- button
- checkbox
- color
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- text
- time
- url
- week

```html
<input/>    : Champs de saisie
```

Exemple de formulaire : 

```html
<label for="prenom">Prénom</label>
<input 	type="text"
	name="prenom"
	id="prenom"
	value="Momo"
>

<textarea/>     : Champs texte
<textarea 	name="blabla" id="blabla"
		placeholder="ton bla bla"
		rows="4" cols="50"
>
</textarea>

<select/>       : Liste de sélection
<label for="statisfaction">Satisfait</label>
<select name="statisfaction">
    <option value="0">Pas du tout</option>
    <option value="1">Un peu</option>
    <option value="2">Beaucoup</option>
    <option value="3">Complètement</option>
</select>
```

### Média

```html
<img/>          : Affiche une image
<img
    src="plop.jpeg"
    alt="plop"
    height="100"
    width="100"
>

<videos/>       : Affiche une vidéo
<video width="320" height="240" controls>
	<source
		src="hello.mp4">
	</source>
</video>

<audio/>        : Lit un flux audio
<audio
	src="super.mp3"
	type="audio/mpeg"
	controls>
</audio>
```

### Frame

```html
<frame/>        : Intègre une page Web dans le DOM
<iframe width="300" height="100" src="./ma-frame.html">
	Pas de frame dispo
</iframe>
```

### Canvas :

```html
<canvas/>       : Permet de dessiner à l'aide d'API Javascript (dessin, 2d, 3d)
<canvas id="canvas" width="800" height="600"></canvas>
```
