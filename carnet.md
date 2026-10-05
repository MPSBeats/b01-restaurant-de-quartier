# Carnet de bord J1 · Appareillage


Un carnet par binôme, rempli au fil de l'eau avec vos propres mots. Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») vaut mieux qu'une phrase parfaite recopiée. Aucune donnée personnelle, aucune clé ni jeton, ni l'adresse complète que `dsh web` affiche (elle contient un jeton). C'est aussi votre journal de décisions (astuce 13) : ce que vous avez demandé, ce qui a cassé, ce que vous avez refusé, et pourquoi.

Binôme : b01 — Sacha SIMON et Dorian ROUX

Dépôt GitHub : https://github.com/MPSBeats/b01-restaurant-de-quartier

Thème provisoire et public visé :
Pour les habitants du quartier : un assistant de restaurant de quartier pour découvrir un plat, choisir un horaire de réservation et s'informer des derniers événements.

Trois questions auxquelles l'assistant pourrait répondre :
1. Quel est le plat du jour aujourd'hui ?
2. Quels sont les horaires pour réserver une table ?
3. Quels sont les prochains événements prévus ?

Rôles de départ et moments d'échange :
Sacha manipule au clavier, Dorian vérifie, challenge et note dans le carnet. Échange prévu toutes les 20 minutes (premier échange après le lancement du serveur).

## Cahier personnel (remis par le formateur en J1-01)

Recopiez les valeurs telles que le formateur vous les a remises. Ne les changez pas, ne les échangez pas avec un autre binôme.

- Limite de caractères d'un message (le nombre N) : 200
- Premier mot reconnu, en plus de « salut », « aide » et « test » : menu
- Second mot reconnu : reservation 

## Commandes essayées

Notez le dossier de lancement, la commande et sa sortie exacte, surtout quand un outil a bloqué.

- Dossier : atelier
- Commande et résultat : `npm start` -> Serveur démarré sur http://127.0.0.1:3000

Pour chaque checkpoint : cochez la case quand toute la preuve de la fiche est réunie, collez la preuve (texte, commande ou phrase), puis notez ce que vous avez prédit, essayé, observé, et une difficulté qui reste.

## Le chat web (N0 Subir)

### J1-01 · 🧭 Équipage — [fiche](checkpoints/J1-01-equipage.md)

- [x] Validé
- Preuve (page de départ affichée sur votre poste, cahier personnel recopié ci-dessus) : Le serveur tourne sur http://127.0.0.1:3000, la page d'accueil affiche "Cap Web" avec le statut "Votre point de départ est prêt.".
- Le `p#status` est-il vide dans le HTML ? Qui écrit sa phrase ? Le p#status est vide dans atelier/public/index.html (ligne 13). C'est le script client atelier/public/js/app.js (ligne 1) qui écrit son texte au chargement avec document.querySelector('#status').textContent = 'Votre point de départ est prêt.'.
- Décision prise ensemble : Choix du thème "Restaurant de quartier" et formulation des trois questions sans le mot "envoyer".
- Difficulté qui reste : Aucune, serveur opérationnel et tests verts.

### J1-02 · 💬 Premier prompt — [fiche](checkpoints/J1-02-premier-prompt.md)

- [x] Validé
- Preuve : `essais-n0/chatbot-v1.html` s'ouvre ; le prompt et la première réponse sont collés ci-dessous, en entier, sans donnée personnelle.
- Mon prompt, tel quel : Fais-moi un chatbot pour un restaurant de quartier qui permet aux habitants de découvrir un plat, choisir un horaire de réservation et s'informer des derniers événements, dans une seule page HTML que j'ouvre dans mon navigateur.
- La première réponse du chat (texte et code), telle quelle :
Voici le code complet d'une page HTML autonome contenant le chatbot pour votre restaurant de quartier :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Le Bistrot du Coin - Assistant Virtuel</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      box-sizing: border-box;
    }
    .chat-container {
      width: 100%;
      max-width: 500px;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 600px;
    }
    .chat-header {
      background-color: #d35400;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .chat-messages {
      flex: 1;
      padding: 15px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .message {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 15px;
      font-size: 0.95rem;
      line-height: 1.4;
    }
    .message.bot {
      background-color: #f1f0f0;
      color: #333;
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }
    .message.user {
      background-color: #d35400;
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }
    .chat-input-area {
      display: flex;
      padding: 10px;
      border-top: 1px solid #ddd;
      background: #fafafa;
    }
    .chat-input-area input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 20px;
      outline: none;
      font-size: 0.95rem;
    }
    .chat-input-area button {
      margin-left: 10px;
      padding: 10px 20px;
      background-color: #d35400;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
    }
    .chat-input-area button:hover {
      background-color: #b94600;
    }
  </style>
</head>
<body>

  <div class="chat-container">
    <div class="chat-header">Le Bistrot du Coin 🍽️</div>
    <div class="chat-messages" id="chat-messages">
      <div class="message bot">Bonjour ! Bienvenue au Bistrot du Coin. Je peux vous aider à découvrir notre plat du jour, réserver une table ou vous renseigner sur nos événements. Que souhaitez-vous savoir ?</div>
    </div>
    <div class="chat-input-area">
      <input type="text" id="user-input" placeholder="Écrivez votre message..." onkeydown="handleKey(event)">
      <button onclick="sendMessage()">Envoyer</button>
    </div>
  </div>

  <script>
    const messagesContainer = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');

    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'message ' + sender;
      msgDiv.textContent = text;
      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleKey(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    }

    function sendMessage() {
      const text = userInput.value.trim();
      if (!text) return;

      appendMessage('user', text);
      userInput.value = '';

      setTimeout(() => {
        botReply(text);
      }, 500);
    }

    function botReply(input) {
      const lower = input.toLowerCase();
      let reply = "Désolé, je n'ai pas compris votre demande. Vous pouvez me poser une question sur le menu, les réservations ou nos événements !";

      if (lower.includes('plat') || lower.includes('menu') || lower.includes('manger') || lower.includes('carte')) {
        reply = "Aujourd'hui, notre chef propose : Pavé de saumon rôti et son écrasé de pommes de terre aux herbes (16,50€), suivi d'une tarte tatin maison !";
      } else if (lower.includes('reserve') || lower.includes('réserv') || lower.includes('table') || lower.includes('horaire')) {
        reply = "Nous prenons les réservations du mardi au dimanche pour le déjeuner (12h-14h) et le dîner (19h30-22h). Vous pouvez appeler le 01 23 45 67 89.";
      } else if (lower.includes('event') || lower.includes('événe') || lower.includes('concert') || lower.includes('soirée')) {
        reply = "Ce vendredi à 20h : concert de jazz acoustique avec dégustation de vins du terroir. Pensez à réserver à l'avance !";
      } else if (lower.includes('bonjour') || lower.includes('salut')) {
        reply = "Bonjour ! Comment puis-je vous aider aujourd'hui au restaurant ?";
      }

      appendMessage('bot', reply);
    }
  </script>
</body>
</html>
```
Pour tester ce chatbot, enregistrez ce fichier et double-cliquez dessus pour l'ouvrir directement dans n'importe quel navigateur web.
- Trois lignes d'observation (ce que j'ai vu en utilisant la page) :
  1. L'interface s'affiche bien centrée avec une boîte de dialogue, des bulles de messages stylisées et des couleurs chaleureuses de bistrot.
  2. Les questions sur le plat, la réservation ou les événements déclenchent des réponses adaptées programmées avec `includes()`, mais une formulation imprévue ou une faute de frappe déclenche immédiatement le message de repli.
  3. L'envoi fonctionne avec le bouton ou la touche Entrée, mais si on recharge la page (F5), tout l'historique de discussion disparaît instantanément.
- Difficulté qui reste : Aucune mémoire persistante après rechargement et règles de reconnaissance très rigides.

### J1-03 · 💥 Ça marche… jusqu'à quand — [fiche](checkpoints/J1-03-jusqua-quand.md)

- [x] Validé
- Liste de contrôle de la version 1 (cinq à huit comportements essayés) :
  1. Affichage du message d'accueil du bot dès l'ouverture de la page.
  2. Envoi du message par clic sur le bouton "Envoyer".
  3. Envoi du message avec la touche "Entrée" du clavier.
  4. Réponse adaptée aux mots-clés du restaurant ("plat", "menu", "reservation", "event").
  5. Réponse de repli générale en cas de message inconnu.
  6. Vidage du champ de saisie après l'envoi.
  7. Défilement automatique vers le bas lors de l'ajout d'un message.
- Journal des régressions, une entrée par modification : ce que j'ai demandé · ce qui marche maintenant · ce qui marchait et ne marche plus · ce que je n'avais pas vu, et comment je l'ai trouvé.
  - Modification 1 :
    - Ce que j'ai demandé : « Ajoute un bouton 'Effacer' qui vide la conversation. » (sauvegardé dans `essais-n0/chatbot-v2.html`)
    - Ce qui marche maintenant : Un bouton "Effacer" est présent et vide les messages visibles à l'écran.
    - Ce qui marchait et ne marche plus : La fonction `clearChat()` vide brutalement tout le conteneur avec `innerHTML = ''`, supprimant également le message de bienvenue initial du bot.
    - Ce que je n'avais pas vu, et comment je l'ai trouvé : Le focus n'est pas redonné au champ de texte après le clic (constaté en essayant d'écrire immédiatement après avoir effacé).
  - Modification 2 :
    - Ce que j'ai demandé : « Fais en sorte que les messages restent affichés même si on recharge la page avec F5. » (sauvegardé dans `essais-n0/chatbot-v3.html`)
    - Ce qui marche maintenant : Les messages sont persistés dans `localStorage` sous la clé `bistrot_chat` et réaffichés au rechargement.
    - Ce qui marchait et ne marche plus : L'appui sur la touche "Entrée" ne soumet plus le message car l'IA a supprimé l'attribut `onkeydown` dans le HTML lors de sa réécriture. De plus, après avoir cliqué sur "Effacer", un rafraîchissement (F5) fait réapparaître tous les anciens messages car `clearChat()` n'a pas purgé le `localStorage`.
    - Ce que je n'avais pas vu, et comment je l'ai trouvé : Constaté en retestant systématiquement la liste de contrôle (ligne 3 pour la touche Entrée, et en testant le cas combiné Effacer + F5).
  - Modification 3 :
    - Ce que j'ai demandé : « Empêche d'envoyer un message vide et affiche les balises comme <b>gras</b> en gras. » (sauvegardé dans `essais-n0/chatbot-v4.html`)
    - Ce qui marche maintenant : L'envoi à vide est bloqué et le texte entre balises `<b>` apparaît en gras.
    - Ce qui marchait et ne marche plus : L'alerte native `alert()` bloque le navigateur de manière agressive. Surtout, pour interpréter le gras, l'IA est passée de `textContent` à `innerHTML`, ouvrant une vulnérabilité critique aux attaques XSS (Cross-Site Scripting) et déformant l'affichage des caractères `<` et `>`.
    - Ce que je n'avais pas vu, et comment je l'ai trouvé : Constaté en saisissant `<img src=x onerror=alert(1)>`, qui exécute du code Javascript arbitraire dans la page.
- Chasse à l'angle mort (ce qui a été trouvé, et par qui) :
  - Trouvé par Dorian : En envoyant un message contenant une balise HTML non fermée (`<div style="color:red">`), l'affichage complet du chatbot est cassé.
  - Trouvé par Sacha : Un mot de plus de 80 caractères sans espace débordait complètement du cadre sur mobile (360 px) avant l'ajout de `word-break: break-word`.
- Deux phrases de conclusion :
  La modification 3 a introduit la régression la plus grave en basculant sur `innerHTML`, rendant la page vulnérable au vol de données et aux failles XSS tout en bloquant l'expérience utilisateur par un `alert()`. Sans une liste de contrôle rigoureuse retestée à chaque itération, la perte de la touche Entrée sur la v3 et la réapparition des messages après F5 nous auraient complètement échappé.
- Difficulté qui reste :
  Sécuriser l'affichage des messages en évitant `innerHTML` tout en assurant une persistance sans duplication après rechargement.

### J1-04 · 🎲 Même prompt, autre réponse — [fiche](checkpoints/J1-04-meme-prompt.md)

- [ ] Validé
- Le prompt de référence (identique aux trois essais) :
- Le tableau des écarts (trois colonnes A, B, C ; au moins quatre critères ; des faits, pas des impressions) :
- Une phrase de conclusion (ce que ces écarts autorisent, ce qu'ils interdisent de supposer) :
- Difficulté qui reste :

## L'agent (N1 Demander)

### J1-05 · 🛠 dsh en main — [fiche](checkpoints/J1-05-dsh-en-main.md)

- [ ] Validé
- Preuve (`dsh --version`, mode Read Only, modèle `capweb-ia`, `git status -- atelier` propre ; **jamais la clé**) :
- La consigne exacte envoyée à l'agent et sa réponse :
- Pour chaque fichier cité : existe ou non, description juste ou fausse, pourquoi ; et un fichier qu'il n'a pas cité :
- Difficulté qui reste :

### J1-06 · 🧱 Anatomie d'un prompt — [fiche](checkpoints/J1-06-anatomie-dun-prompt.md)

- [ ] Validé
- Preuve (deux prompts, deux résultats, grille remplie, commit du squelette) :
- Prompt vague et ce que montre la page (trois lignes, fichiers touchés) :
- Prompt structuré, en six parties, tel qu'envoyé :
- Les hypothèses de l'agent, et ma réponse :
- La grille (✔ ou ✘ et un mot, pour « vague » puis « structuré ») :
- Une phrase : entre les deux résultats, ce qui a le plus changé, c'est… parce que la partie… de mon prompt disait…
- Difficulté qui reste :

### J1-07 · 👣 Petits pas — [fiche](checkpoints/J1-07-petits-pas.md)

- [ ] Validé
- Preuve (découpage écrit avant la première demande, trois diffs relus, un refus écrit, un commit par étape acceptée, trois boutons de questions qui fonctionnent) :
- La tâche, mes trois questions et mon découpage en trois étapes (écrit avant la première demande d'écriture) :
- Ce que l'agent a proposé comme découpage, ce que j'ai gardé, pourquoi :
- Mon refus écrit : ce que l'agent avait fait, pourquoi je le refuse, ce que j'ai demandé à la place :
- Difficulté qui reste :

**Journal des décisions.** Une ligne par demande faite à l'agent, de J1-07 à J1-09 (les trois étapes de J1-07, puis la correction de J1-08, puis les six demandes de J1-09) : la demande copiée, le diff relu (fichiers, nombre de lignes, une chose que je n'avais pas demandée ?), le verdict et pourquoi.

| N° | Demande | Diff relu | Verdict et pourquoi |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |

### J1-08 · 🔎 Revue de la page — [fiche](checkpoints/J1-08-revue-de-la-page.md)

- [ ] Validé
- Preuve (trois défauts, un corrigé avec son avant et son après, diff relu, revue adverse vérifiée) :
- Mes défauts, un par ligne :

  | Lentille (structure, clavier, écrans) | Où (élément ou fichier) | Comment je l'ai vu |
  |---|---|---|
  | | | |
  | | | |
  | | | |

- La revue adverse : trois affirmations de l'agent, la référence qu'il a donnée (fichier, ligne), mon verdict (vrai, faux, rejeté sans référence) et comment j'ai vérifié :
- Le défaut corrigé : l'avant (capture ou valeur), ma demande ciblée (copiée), le diff relu (fichiers, lignes, changement non demandé ?), l'après (même geste, même mesure) :
- Difficulté qui reste :

### J1-09 · 🧠 Un cerveau à règles, par prompts — [fiche](checkpoints/J1-09-cerveau-a-regles.md)

- [ ] Validé
- Preuve (comportements vérifiés : « Vous : … », message vide, `<b>gras</b>`, mes deux mots, ma limite ; `/js/brain.js` et `/js/view.js` affichés ; F5 ; « Effacer ») :
- Mes six demandes et leurs verdicts : dans le journal des décisions ci-dessus.
- Le rôle de chaque fichier, en une phrase chacun :
  - `app.js` :
  - `brain.js` :
  - `view.js` :
- Ce que j'ai vu quand j'ai mis `{pas du json` dans la mémoire :
- Difficulté qui reste :

### J1-10 · 🧪 Épreuve de l'explication — [fiche](checkpoints/J1-10-epreuve-explication.md)

- [ ] Validé
- Preuve (`npm test` vert avec cinq tests dont ma limite, commit de sauvegarde, remise faite) :
- Le test rouge : son nom, son message exact, et ce qu'il m'a appris :
- Épreuve de l'explication, éditeur fermé :
  - Ce que je n'ai pas su expliquer :
  - Ce que mon binôme n'a pas su expliquer :
- Difficulté qui reste :

## Quatre questions pour finir

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. L'agent a écrit le code : comment savez-vous qu'il est juste, et qu'est-ce qui l'a vu échouer ?
4. Quelle astuce avez-vous le plus utilisée aujourd'hui, et laquelle avez-vous oubliée ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :

## Notes personnelles (chacun)

Pour préparer l'explication de votre part du code. Chacun écrit avec ses mots.

- Nom :
- Ce que j'ai compris :
- Ce que je n'ai pas encore compris :

- Nom :
- Ce que j'ai compris :
- Ce que je n'ai pas encore compris :

Git sert à sauvegarder chaque étape acceptée : lisez les différences et nommez les fichiers à enregistrer, jamais `git add -A`. Attendez la consigne du formateur avant tout envoi vers un dépôt commun.

[README du jour](README.md) · [Aide-mémoire HTML/CSS](ressources/aide-memoire.md) · [Aide-mémoire JavaScript](ressources/aide-memoire-js.md) · [Notice dsh](ressources/dsh.md)
