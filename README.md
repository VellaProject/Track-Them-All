# Track-Them-All

##Comment utiliser Track-Them-All?

##Pré-Installation
###"git clone https://github.com/VellaProject/Track-Them-All.git" ou "Download ZIP depuis github"
###Modifiez le Hashtag si besoin dans le fichier de configuration JSON : "hashtag": "#MonHashtag"
##Installation / Lancement

###-Installez Node JS si vous ne l'avez pas; pour cela, allez sur ce lien: https://nodejs.org/

###-Lancez le "Node.js command prompt" et placez-vous à la racine du dossier Track-Them-All
###(Vous devriez y voir un fichier "track-them-all.js", déplacez-vous avec la commande "cd" exemple: "cd Desktop/Track-Them-All")

###-Entrez dans le "Node.js command prompt" la commande suivante : node track-them-all.js
###Le serveur est maintenant en marche

###-Ouvrez votre navigateur préféré(chrome ou firefox de préférence) et rentrez dans la barre de recherche:
### http://localhost:8080/

###Vous voila maintenant sur l'application Track-Them-All

##Gameplay / Objectif
###Dans Track-Them-All, votre objectif est simple, Cliquer sur le plus de tweets possible.
###Cliquer sur un tweet augmente votre barre de progression et la rapidité de rotation des cubes qui composent le drapeau.
###Une fois la barre de progression remplie, le drapeau se stabilise et monte pendant quelques secondes. Pendant ce laps de temps, votre barre de progression est figée, ensuite le drapeau revient comme au départ et votre barre de progression est réinitialisée.
###A chaque barre de progression remplie, les tweets montent de plus en plus vite.
###Le score final est calculé de la manière suivante: (Nb_Tweet_Cliquer  - (All_Tweet - Nb_Tweet_Cliquer)) x Nb_Barre_Remplie
###Il est judicieux de ne pas cliquer sur des tweets pendant que votre barre de progression est figée, pour les cliquer plus tard et donc remplir la barre. Mais attention vous n'avez pas toujours le temps avant qu'ils ne disparaissent.
##Difficulté?
###Avec Track-Them-All la difficulté, c'est vous qui la choisissez; allez sur twitter regarder les Hashtags en Top Tendance et mettez en un dans le fichier de configuration.
###Plus le Hashtag est tendance, plus il y aura de tweet affiché sur Track-Them-All.
###Bonne Chance !