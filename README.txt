****** Ip-grid.js et Intro.js ******

Le but de ce projet est de présenter, et par la même occasion appréhender, 2 plugins JavaScript appelés Intro.js et Ip-grid.js.

Intro.js permet de réaliser une présentation pas à pas.
Je l'ai utilisé ici pour montrer les différents parties de la page web, avec un commentaire associé.
Les parties sont définies dans la structure Html ainsi que leur ordre d'affichage (à l'aide de l'argumet 'data-step'), puis en JavaScript on initialise le plugins.
Il existe des thèmes différents. Il est également possible de les customizer.

Ip-grid.js permet de générer une feuille de calcul comme l'on voit dans Excel ou dans Google Sheet.
Pour cela c'est très simple, il suffit de créer un container en Html, puis initialiser le plugin sur ce container.
On définit à ce moment le nombre de lignes et de colonnes que l'on souhaite ($('selecteur').ip_Grid({ rows: 10000,  cols: 30 })).
Pour le moment j'ai mis 3 fonctionnalités:
	1) 'Annuler'  -> permet d'annuler la dernière opération
	2) 'Afficher' -> permet d'afficher le nom des colonnes
	3) 'Masquer'  -> permet de masquer le nom des colonnes
D'autre fonctionnalité seront ajoutées.