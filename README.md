C'est sur opendata.swiss que j'ai cherché mes données car je voulais des statistiques proches de moi, j'ai rapidement tapé "médias" dans la barre de recherche, influencé par ma formation en cours.  

https://opendata.swiss/fr/dataset/medienokonomische-aspekte-haushaltsausgaben-fur-massenmedien/resource/9ed97f88-9b75-4a26-832d-479ff57eb92c

Les données concernent les dépenses des suisses envers les médias. Les statistiques sont initialement reportées sur un fichier Excel et comprenait énormément d'informations. Ma première tâche a donc été de trier les chiffres importants pour ce que je voulais démontrer, dans mon cas, les dépenses des suisses pour chacun des médias. 

Une fois le tableau propre, j'ai enregistré le fichier en SVG afin de préparer mes données. J'ai créer un premier script "Prepare data" qui s'occupait de transformer mon SVG en JSon. Malheureusement pour moi, les données étaient encore peu compréhensible par le navigateur. Mon enseignant m'a donc montré la voie avec une nouvelle préparation des données, catégorisées par année. 

Une fois les données prêtes, j'ai décidé d'utiliser la librairie Billboard.js. J'ai fait ce choix car l'interface et la documentation m'a beaucoup plu. 

La visualisation retenue est un graphique en bâtons, premièrement car c'est un que je maitrise. Deuxièmement, l'idée était de transformer les batons en pile de pièce de monnaie, pour représenter les dépenses. N'ayant pas les compétences nécessaires, je ne l'ai pas mis en place et me suis concentré sur le graphique, cependant, un développeur pourra sans autre appliquer la texture souhaitée si le besoin était là. J'ai ensuite décidé d'enchainer le chargement des données, avec un setTimeOut, afin de montrer l'évolution et surtout la forte progression des dépenses Internet. Au final, on retrouve un graphique représentant chaque année avec les boutons en dessous, permettant d'avoir une vision globale mais aussi de pouvoir comparer les années entre elles. 

Le but premier est de montrer que la population suisse, depuis 2006, ne cesse d'augmenter ses dépenses pour les services Internet. De ce fait, on remarque la puissance des fournisseurs réseaux. Les suisses, malgré la hausse des prix et la multiplication des objets connectés, sont prêt à payer pour leur service Internet. 

Dès lors, cette visualisation peut interesser plusieurs cibles : 

- Les ingénieurs des médias, notamment dans le cours d'"Evolution des médias", pour démontrer la puissance d'Internet, mais également le potentiel des métiers dans le secteur.
- Les investisseurs sur le marché suisse, qui considéreront investir plutôt sur des fournisseurs d'infrastructure réseaux ou les fournisseurs même tel que Swisscom et Sunrise par exemple, plutôt que d'autres médias. 
- Les fournisseurs d'internet eux mêmes, car cela démontre la fidélité de leur clients. 

L'avantage final de ce jeu de donnée est que, par la suite, il est automatisé. Dès qu'il y aura de nouvelle données, il suffira de les rentrer dans le script Prepare afin d'augmenter le Json. Ainsi il pourra être régulièrement mis-à-jour. 
