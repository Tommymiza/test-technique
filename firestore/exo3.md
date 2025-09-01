## 1ère question:

Voici la requête efficace et scalable :
db.collection("conversations")
.where("participants", "array-contains", currentUserId)
.orderBy("lastMessage.timestamp", "desc")

Créer une collection conversations.
Dans chaque conversation, avoir :
-Une sous-collection messages (tous les messages).
-Un champ lastMessage mis à jour à chaque nouvel envoi.

## 2e question:

Il faut créer un index sur :
-participants (array-contains)
-lastMessage.timestamp (orderBy).

## 3e question justification:

-Efficacité : on évite de charger tous les messages pour chaque conversation.
-Scalable : la collection messages peut contenir des millions d’entrées, mais seule la métadonnée lastMessage dans conversations est interrogée. Ainsi avec cette structure, tout peut fonctionner comme message de groupe ou seulement entre deux personnes, grâce à la table conversation et le champ participants
