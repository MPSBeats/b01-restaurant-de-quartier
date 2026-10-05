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

- [x] Validé
- Le prompt de référence (identique aux trois essais) :
  `Fais-moi un chatbot pour un restaurant de quartier qui permet aux habitants de découvrir un plat, choisir un horaire de réservation et s'informer des derniers événements, dans une seule page HTML que j'ouvre dans mon navigateur.`
- Le tableau des écarts (trois colonnes A, B, C ; au moins quatre critères ; des faits, pas des impressions) :

  | Critère | A (`essai-A.html`) | B (`essai-B.html`) | C (`essai-C.html`) |
  |---|---|---|---|
  | Structure du code (fichiers, longueur, place du script) | 71 lignes, style épuré clair, script placé en bas du `body` avec `addEventListener('submit')` sur le formulaire. | 86 lignes, style thème sombre (dark mode), script placé dans le `<head>` avec écouteur `DOMContentLoaded`. | 68 lignes, style rétro Georgia avec bordure violette, script en bas du `body` avec gestionnaire inline `onclick="talk()"`. |
  | Comportement à l'envoi (que répond le bot, sur quel thème) | Envoi par formulaire (clic ou Entrée). Réponses sur 'plat' (boeuf bourguignon), 'horaire' (12h-14h30/19h-22h30) et 'événement' (quiz musical). Délai de 400ms. | Envoi par clic bouton ou touche Entrée. Propose 3 boutons de suggestions rapides (chips). Répond plat (magret), horaires et soirée cocktails. Délai de 300ms. | Envoi uniquement au clic sur "Demander" (Entrée ne fait rien). Moteur basé sur un tableau `KNOWLEDGE_BASE`. Répond plat (risotto), horaires et brunch musical. |
  | Ce qui manque (message vide, mémoire, bouton effacer…) | Pas de message d'accueil au chargement, pas de mémoire, pas de bouton effacer. Refuse le message vide avec `if (!val) return;`. | Pas de mémoire, pas de bouton effacer. Accepte l'envoi de messages vides (affiche une bulle vide à l'écran). | Pas de mémoire, pas de bouton effacer, pas d'envoi avec la touche Entrée. Utilise `innerHTML +=` dangereux. |
  | Ce qui diffère (noms, textes, réponses, ton) | Nom : « Le Petit Zinc ». Ton neutre et direct. Identifiants et classes : `#chat-form`, `#entry`, `.msg-bot`, `.msg-user`. | Nom : « Bistrot Gourmet 🍷 ». Ton élégant et moderne. Identifiants et classes : `.chips`, `.b-user`, `.b-bot`. | Nom : « La Table Voisine ». Ton chaleureux de voisinage (« Voisin », « Chers voisins »). Classes `.client` et `.resto`. |

- Une phrase de conclusion (ce que ces écarts autorisent, ce qu'ils interdisent de supposer) :
  Ces écarts nous autorisent à nous inspirer de l'IA pour prototyper rapidement des styles ou des idées d'interface, mais ils nous interdisent formellement de supposer une stabilité dans l'architecture technique, l'accessibilité au clavier ou la sécurité du code généré.
- Difficulté qui reste :
  Constater qu'à prompt identique, l'IA produit trois structures et logiques de code radicalement différentes, ce qui rend le niveau N0 ("subir") dangereux en production.

## L'agent (N1 Demander)

### J1-05 · 🛠 dsh en main — [fiche](checkpoints/J1-05-dsh-en-main.md)

- [x] Validé
- Preuve (`dsh --version`, mode Read Only, modèle `capweb-ia`, `git status -- atelier` propre ; **jamais la clé**) :
  `dsh --version` répond `0.1.5-rc.2`. Session lancée dans `atelier` avec le preset `read-only` et le modèle `capweb-ia`. `git status -- atelier` confirme "nothing to commit, working tree clean" : aucun fichier modifié par l'agent.
- La consigne exacte envoyée à l'agent et sa réponse :
  Consigne : « Liste les fichiers de ce dossier et dis ce que fait chacun. Donne le chemin de chaque fichier. Si tu ne sais pas ce que fait un fichier, écris « je ne sais pas ». N'écris rien et ne modifie rien. »
  Réponse de l'agent :
  1. `package.json` : Définit la configuration du projet Node.js, la version requise de Node (>=24.20.0) et les scripts `start`, `test`, `lint`.
  2. `public/index.html` : Structure HTML minimale contenant le repère `<main>`, le titre `<h1>Cap Web</h1>` et un paragraphe vide `<p id="status">`.
  3. `public/styles.css` : Feuille de style CSS pour la mise en page de départ.
  4. `public/js/app.js` : Script JavaScript client qui écrit la phrase de bienvenue dans `<p id="status">`.
  5. `server/app.js` : Serveur HTTP natif avec liste blanche restrictive qui ne sert que les fichiers publics autorisés.
  6. `server/start.js` : Script qui démarre l'écoute du serveur sur le port 3000.
  7. `tests/server.test.js` : Tests de sécurité et de conformité du serveur HTTP.
- Pour chaque fichier cité : existe ou non, description juste ou fausse, pourquoi ; et un fichier qu'il n'a pas cité :
  - `package.json` : Existe. Description juste : contient bien les métadonnées et scripts npm.
  - `public/index.html` : Existe. Description juste : contient le squelette minimal avec `main`, `h1` et `p#status`.
  - `public/styles.css` : Existe. Description juste : définit le CSS global.
  - `public/js/app.js` : Existe. Description juste : modifie bien `#status`.
  - `server/app.js` : Existe. Description juste : contient l'objet `FICHIERS` qui restreint les chemins servis.
  - `server/start.js` : Existe. Description juste : lance `createApp().listen(3000)`.
  - `tests/server.test.js` : Existe. Description juste : exécute 9 tests Node.
  - Fichier non cité par l'agent : `atelier/eslint.config.js` (ou `atelier/browser/depart.spec.js`) qu'il a omis de lister.
- Difficulté qui reste :
  Vérifier rigoureusement que l'agent reste bridé en lecture seule et ne touche à aucun fichier sans confirmation explicite.

### J1-06 · 🧱 Anatomie d'un prompt — [fiche](checkpoints/J1-06-anatomie-dun-prompt.md)

- [x] Validé
- Preuve (deux prompts, deux résultats, grille remplie, commit du squelette) : Squelette généré dans `atelier/public/`, `git status -- atelier` ne montre que les trois fichiers autorisés, `npm test` est vert (9/9 pass), commit enregistré.
- Prompt vague et ce que montre la page (trois lignes, fichiers touchés) :
  Prompt envoyé : « Écris la page de Cap Web : un formulaire, une liste de messages et un statut. »
  Résultat : L'agent a généré un formulaire sans `<main>` ni `<label>` associé, a inventé ses propres identifiants (`#form`, `#chat`, `#msg`), et a créé un fichier `public/js/script.js` non servi par la liste blanche du serveur HTTP, provoquant une erreur 404 dans la console du navigateur. Fichiers touchés : `index.html`, `styles.css`, `app.js` et création de `script.js`.
- Prompt structuré, en six parties, tel qu'envoyé :
  ```text
  RÔLE : Tu es développeur web. Tu écris du HTML, du CSS et du JavaScript sans bibliothèque, pour des débutants.
  TÂCHE : Écris le squelette de la page de « Cap Web », un assistant sur le restaurant de quartier : un formulaire, une liste de messages, une ligne de statut.
  CONTRAINTES :
  - Modifie uniquement public/index.html, public/styles.css et public/js/app.js. Le serveur ne sert que ces trois fichiers : n'en crée aucun autre.
  - Garde ces identifiants : form#chat-form, textarea#message, ul#messages, p#status.
  - Le champ #message est limité à 200 caractères (maxlength).
  - Le contenu de la page est dans un main. Un seul h1 (« Cap Web »), un label lié au champ, un bouton « Envoyer », p#status avec role="status", html lang="fr". Aucune bibliothèque, aucune adresse https://.
  FORMAT DE SORTIE : d'abord la liste de tes hypothèses (cinq au plus), puis tu t'arrêtes. Après mon « ok », tu écris les trois fichiers, puis tu réponds par la liste des fichiers écrits.
  EXEMPLES ET CONTRE-EXEMPLES : voulu : <button type="submit">Envoyer</button>. Refusé : <div onclick="envoyer()">Envoyer</div> (ce n'est pas un bouton) ; un fichier script.js à côté de app.js (le serveur répondrait 404).
  CRITÈRE D'ARRÊT : app.js empêche seulement le rechargement de la page à l'envoi et écrit alors « Interface prête. » dans le statut ; il n'ajoute aucun message à la liste. Quand les trois fichiers sont écrits, tu t'arrêtes.
  ```
- Les hypothèses de l'agent, et ma réponse :
  Hypothèses de l'agent :
  1. Je dois modifier exclusivement `public/index.html`, `public/styles.css` et `public/js/app.js` sans créer d'autre fichier.
  2. Le champ de texte sera un `textarea` avec `id="message"` et `maxlength="200"`, associé à son `<label for="message">`.
  3. Les éléments respecteront strictement les identifiants : `form#chat-form`, `ul#messages` et `p#status`.
  4. L'événement `submit` bloquera le rechargement de page et affichera "Interface prête." sans ajouter de message.
  5. Aucun style distant ni CDN ne sera utilisé.
  Ma réponse : « ok »
- La grille (✔ ou ✘ et un mot, pour « vague » puis « structuré ») :

  | Critère | Prompt vague | Prompt structuré |
  |---|---|---|
  | La page s'affiche sans erreur (F12, onglet Console) | ✘ (erreur 404 sur script.js) | ✔ (console vierge d'erreur) |
  | Formulaire, liste et statut sont là, avec les quatre identifiants | ✘ (identifiants non respectés) | ✔ (identifiants exacts) |
  | Seuls les trois fichiers autorisés ont changé (`git status -- atelier`) | ✘ (tentative d'ajout de script.js) | ✔ (uniquement index, styles, app) |
  | `npm test` reste vert | ✘ (régression structurelle) | ✔ (9/9 tests réussis) |
  | Aucune bibliothèque, aucune adresse `https://` | ✘ (import d'une police Google Fonts) | ✔ (CSS système 100% autonome) |
  | Vous savez expliquer chaque partie de la page en une phrase | ✘ (code dispersé et peu clair) | ✔ (découpage sémantique clair) |

- Une phrase : entre les deux résultats, ce qui a le plus changé, c'est l'adéquation technique exacte avec le serveur local et le respect des identifiants nécessaires pour les tests, parce que la partie CONTRAINTES et EXEMPLES ET CONTRE-EXEMPLES de mon prompt interdisait formellement les fichiers tiers hors liste blanche et exigeait les quatre identifiants précis.
- Difficulté qui reste :
  Veiller à toujours imposer à l'agent de formuler ses hypothèses avant d'écrire du code pour prévenir tout écart prématuré.

### J1-07 · 👣 Petits pas — [fiche](checkpoints/J1-07-petits-pas.md)

- [x] Validé
- Preuve (découpage écrit avant la première demande, trois diffs relus, un refus écrit, un commit par étape acceptée, trois boutons de questions qui fonctionnent) : Trois boutons fonctionnels sous le formulaire, clic copie la question dans le textarea sans soumettre, focus activé, statut mis à jour, refus d'un onclick consigné, commits enregistrés.
- La tâche, mes trois questions et mon découpage en trois étapes (écrit avant la première demande d'écriture) :
  - Tâche : Afficher sous le formulaire nos 3 questions de J1-01 en boutons ; un clic sur un bouton copie la question dans le champ `#message` sans l'envoyer, donne le focus au champ et affiche un statut explicatif.
  - Nos trois questions :
    1. « Quel est le plat du jour aujourd'hui ? »
    2. « Quels sont les horaires pour réserver une table ? »
    3. « Quels sont les prochains événements prévus ? »
  - Découpage en 3 étapes :
    - Étape 1 : Dans `public/index.html` seulement, ajout de `ul#suggestions` avec 3 boutons `type="button"`.
    - Étape 2 : Dans `public/js/app.js` seulement, écouteur de clic pour copier le texte dans le champ `#message` sans soumission.
    - Étape 3 : Dans `public/js/app.js`, ajout du focus sur `#message` et mise à jour de `#status` avec le message "Question copiée : modifiez-la ou envoyez-la.".
- Ce que l'agent a proposé comme découpage, ce que j'ai gardé, pourquoi :
  L'agent a proposé de tout faire en une seule demande avec injection de scripts inline et soumission directe. Nous avons conservé notre découpage en 3 petites étapes distinctes pour garantir que chaque diff soit inférieur à 15 lignes et parfaitement testable de manière isolée.
- Mon refus écrit : ce que l'agent avait fait, pourquoi je le refuse, ce que j'ai demandé à la place :
  L'agent avait inséré un attribut `onclick="submitQuestion(...)"` directement dans le HTML de l'étape 1, ce qui envoyait immédiatement le formulaire. Nous l'avons refusé car la consigne exige explicitement que le clic copie la question sans l'envoyer pour permettre la relecture/modification, et nous avons exigé des balises `<button type="button">` pures sans JavaScript inline.
- Difficulté qui reste :
  Maintenir la discipline des petits pas face à la tendance de l'agent à anticiper et en faire trop d'un coup.

**Journal des décisions.** Une ligne par demande faite à l'agent, de J1-07 à J1-09 (les trois étapes de J1-07, puis la correction de J1-08, puis les six demandes de J1-09) : la demande copiée, le diff relu (fichiers, nombre de lignes, une chose que je n'avais pas demandée ?), le verdict et pourquoi.

| N° | Demande | Diff relu | Verdict et pourquoi |
|---|---|---|---|
| 1 | Étape 1 : Dans public/index.html, ajouter ul#suggestions avec 3 boutons type="button" pour nos 3 questions, sans JS ni autre fichier. | +8 lignes dans index.html. L'agent avait ajouté un onclick non demandé. | Refusé puis corrigé : rejet du onclick inline, conservation des boutons purs. |
| 2 | Étape 2 : Dans public/js/app.js, ajouter l'écouteur de clic pour copier le texte du bouton dans textarea#message sans soumettre. | +12 lignes dans app.js. Écouteur forEach sur les boutons de suggestions. | Accepté : le texte est copié fidèlement sans déclencher l'envoi du formulaire. |
| 3 | Étape 3 : Dans public/js/app.js, ajouter le focus sur le champ et la mise à jour du statut après copie. | +5 lignes dans app.js (appel de focus() et statut textContent). | Accepté : l'utilisateur est guidé et peut immédiatement éditer le texte. |
| 4 | Correction J1-08 : Dans styles.css, autoriser le retour à la ligne des boutons suggestions et focus visible. | +6 lignes dans styles.css (white-space, text-align, max-width, outline focus). | Accepté : supprime tout débordement horizontal à 360 px et renforce l'accessibilité clavier. |
| 5 | J1-09 Étape 1 : Dans app.js, interception du submit, affichage "Vous : ...", refus du vide avec statut, et textContent. | +16 lignes dans app.js. Gestion propre des formulaires sans innerHTML. | Accepté : message vide refusé, chevrons préservés. |
| 6 | J1-09 Étape 2 : Créer public/js/brain.js avec validateMessage et replyTo (salut, aide, test, repli). Déclarer dans server/app.js. | +30 lignes dans brain.js, +2 lignes dans server/app.js. Module pur sans DOM. | Accepté : fonctions pures isolées et testables, route servie en 200. |
| 7 | J1-09 Étape 3 : Dans app.js, importer brain.js et ajouter la réponse "Cap Web : ...". | +8 lignes dans app.js. Import propre et affichage de la réponse du bot. | Accepté : le dialogue alterné utilisateur / bot s'affiche parfaitement. |
| 8 | J1-09 Étape 4 : Dans brain.js, intégrer la limite N=200 et les deux mots du cahier (menu et reservation). | +14 lignes dans brain.js. Ajout de MAX_LONGUEUR = 200 et des cas dans replyTo. | Accepté : respect scrupuleux du cahier personnel du binôme b01. |
| 9 | J1-09 Étape 5 : Créer public/js/view.js avec renderMessages. Migrer l'historique dans app.js et déclarer dans server/app.js. | +12 lignes dans view.js, +2 lignes dans server/app.js, nettoyage de app.js. | Accepté : séparation MVC propre, suppression des createElement de app.js. |
| 10 | J1-09 Étape 6 : Dans app.js et index.html, persistance localStorage protégée par try/catch et bouton #effacer avec confirm(). | +24 lignes dans app.js, +1 ligne dans index.html, +12 lignes dans styles.css. | Accepté : persistance robuste aux corruptions et réinitialisation complète. |

### J1-08 · 🔎 Revue de la page — [fiche](checkpoints/J1-08-revue-de-la-page.md)

- [x] Validé
- Preuve (trois défauts, un corrigé avec son avant et son après, diff relu, revue adverse vérifiée) : 3 défauts identifiés sur les 3 lentilles, revue adverse vérifiée avec références précises, correction ciblée dans `styles.css` avec mesure avant (14 px de débordement) et après (0 px).
- Mes défauts, un par ligne :

  | Lentille (structure, clavier, écrans) | Où (élément ou fichier) | Comment je l'ai vu |
  |---|---|---|
  | Structure | `index.html` (ligne 19) | Le `<label for="message">` indique la limite de caractères mais ne signale pas visuellement le caractère obligatoire du champ alors que le textarea a l'attribut `required`. |
  | Clavier | `styles.css` (ligne 64) | En naviguant à la touche Tab, les boutons `#suggestions button` manquaient d'un contour de focus bien contrasté (outline) distinct de l'état survolé. |
  | Écrans | `styles.css` (ligne 62) | À 360 px de large en mode mobile, les boutons de questions avec un intitulé long forçaient une seule ligne (`white-space: nowrap` par défaut) et causaient un débordement horizontal de 14 px. |

- La revue adverse : trois affirmations de l'agent, la référence qu'il a donnée (fichier, ligne), mon verdict (vrai, faux, rejeté sans référence) et comment j'ai vérifié :
  1. « Dans `index.html` ligne 23, la liste `ul#suggestions` n'a pas d'attribut `aria-label`, ce qui réduit l'accessibilité aux lecteurs d'écran. » — Fichier `atelier/public/index.html:23`. **Verdict : Vrai**. Vérifié dans l'arbre d'accessibilité DevTools.
  2. « Dans `styles.css` ligne 48, `#messages li` utilise `overflow-wrap: break-word` qui protège la mise en page en cas de message contenant un mot très long sans espace. » — Fichier `atelier/public/styles.css:48`. **Verdict : Vrai**. Vérifié en simulant un mot de 60 caractères (`aaaa...`).
  3. « Dans `app.js` ligne 14, l'application appelle une API distante externe non sécurisée sans timeout. » — Fichier `atelier/public/js/app.js:14`. **Verdict : Faux** (hallucination de l'agent). La requête est un fetch local vers `/version.json` servi en interne avec un `.catch(() => {})`.
- Le défaut corrigé : l'avant (capture ou valeur), ma demande ciblée (copiée), le diff relu (fichiers, lignes, changement non demandé ?), l'après (même geste, même mesure) :
  - Avant : À 360 px, `document.documentElement.scrollWidth - document.documentElement.clientWidth` valait `14` (débordement horizontal causé par la longueur des boutons de questions).
  - Demande ciblée : « RÔLE : Développeur CSS. TÂCHE : Dans public/styles.css, assure que #suggestions button accepte le retour à la ligne automatique (white-space: normal, text-align: left, max-width: 100%) et possède un focus-visible distinct avec outline: 2px solid var(--accent). Ne touche à aucun autre fichier. »
  - Diff relu : 1 seul fichier (`styles.css`), 6 lignes ajoutées, aucun changement hors sujet. Verdict : Accepté.
  - Après : À 360 px, `document.documentElement.scrollWidth - document.documentElement.clientWidth` vaut exactement `0`. Les boutons de questions s'empilent et s'adaptent parfaitement sans aucun défilement horizontal.
- Difficulté qui reste :
  Toujours croiser les affirmations de l'agent avec une vérification manuelle dans le code et les DevTools pour débusquer les hallucinations.

### J1-09 · 🧠 Un cerveau à règles, par prompts — [fiche](checkpoints/J1-09-cerveau-a-regles.md)

- [x] Validé
- Preuve (comportements vérifiés : « Vous : … », message vide, `<b>gras</b>`, mes deux mots, ma limite ; `/js/brain.js` et `/js/view.js` affichés ; F5 ; « Effacer ») :
  Tous les comportements vérifiés : "Vous : ..." et "Cap Web : ..." s'ajoutent à chaque envoi ; message vide rejeté avec statut explicite et focus conservé ; `<b>gras</b>` s'affiche avec ses chevrons sans injection HTML ; nos mots `menu` et `reservation` ont leurs réponses dédiées du restaurant ; la limite de 200 caractères valide 200 caractères et rejette 201 ; `brain.js` et `view.js` sont servis en 200 ; F5 conserve la conversation ; bouton "Effacer la conversation" demande confirmation et réinitialise tout.
- Mes six demandes et leurs verdicts : dans le journal des décisions ci-dessus (lignes 5 à 10).
- Le rôle de chaque fichier, en une phrase chacun :
  - `app.js` : Contrôleur principal qui écoute les événements de l'interface, manipule l'état global (`historique`), fait le pont entre la logique métier et la vue, et gère la persistance dans `localStorage`.
  - `brain.js` : Module de logique métier pure sans accès au DOM ni à window, responsable de la validation des chaînes de caractères (limite de 200 caractères) et du calcul des réponses selon les règles prédéfinies.
  - `view.js` : Module de vue responsable du rendu sécurisé des messages dans le conteneur DOM en utilisant `textContent` et `replaceChildren` pour prévenir toute faille XSS.
- Ce que j'ai vu quand j'ai mis `{pas du json` dans la mémoire :
  Le bloc `try / catch` a intercepté l'erreur de décodage JSON sans faire planter l'application : l'historique a été réinitialisé à un tableau vide et le statut a affiché "Mémoire locale réinitialisée.".
- Difficulté qui reste :
  Penser à toujours synchroniser la liste blanche du serveur HTTP natif lors de l'ajout d'un nouveau fichier JS client.

### J1-10 · 🧪 Épreuve de l'explication — [fiche](checkpoints/J1-10-epreuve-explication.md)

- [x] Validé
- Preuve (`npm test` vert avec cinq tests dont ma limite, commit de sauvegarde, remise faite) :
  `npm test` exécute avec succès 15 tests au vert (6 tests unitaires sur `brain.js` incluant le test de la limite exacte de 200 caractères et les deux mots du cahier `menu` et `reservation`, ainsi que les 9 tests du serveur HTTP). Test vu rouge puis réparé au vert.
- Le test rouge : son nom, son message exact, et ce qu'il m'a appris :
  - Nom du test : `applique la limite exacte du cahier personnel (200 caractères max)`
  - Message exact :
    ```text
    not ok 3 - applique la limite exacte du cahier personnel (200 caractères max)
      AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
      false !== true
      location: tests/brain.test.js:18:5
    ```
  - Ce qu'il m'a appris : Un test qui n'a jamais échoué n'offre aucune garantie de fiabilité. En modifiant temporairement la constante `MAX_LONGUEUR` à 190 dans `brain.js`, nous avons vérifié que notre test détecte immédiatement toute déviation du cahier des charges et protège réellement le contrat.
- Épreuve de l'explication, éditeur fermé :
  - Ce que je (Sacha) n'ai pas su expliquer : Au départ, l'intérêt précis de `container.replaceChildren(...elements)` dans `view.js` plutôt que `innerHTML = ''` ou des `appendChild` successifs, avant de comprendre que `replaceChildren` vide et réinsère en une seule opération atomique sans faille de sécurité.
  - Ce que mon binôme (Dorian) n'a pas su expliquer : Pourquoi le bloc `try / catch` est indispensable dans `app.js` lors de la relecture de `localStorage.getItem` même si la clé existe (protection contre un JSON malformé injecté ou corrompu).
- Difficulté qui reste :
  Être capable de restituer à l'oral et avec assurance la chaîne complète des événements du navigateur jusqu'au moteur de règles sans support visuel du code.

## Quatre questions pour finir

1. Pourquoi `textContent` et pas `innerHTML` ?
   Parce que `textContent` traite la chaîne insérée strictement comme du texte brut, ce qui neutralise complètement les failles de sécurité XSS (Cross-Site Scripting). Si un utilisateur ou une réponse injecte du code HTML ou une balise `<script>`, `textContent` affiche les caractères textuels bruts sans les interpréter ni les exécuter, alors que `innerHTML` parserait le code et exécuterait d'éventuels scripts malveillants.

2. Pourquoi trois fichiers plutôt qu'un seul ?
   Pour découper l'application selon le principe de séparation des responsabilités (architecture inspirée de MVC) :
   - `brain.js` : logique métier pure (validation et règles de réponse), sans aucune dépendance au DOM ni à window, ce qui permet de le tester de façon isolée sous Node.js (`npm test`).
   - `view.js` : module de vue chargé uniquement d'afficher les éléments dans le DOM de manière sécurisée.
   - `app.js` : contrôleur qui orchestre les interactions utilisateurs, écoute les événements, interroge le cerveau, met à jour la vue et sauvegarde l'état dans `localStorage`.

3. L'agent a écrit le code : comment savez-vous qu'il est juste, et qu'est-ce qui l'a vu échouer ?
   Nous le savons parce que nous n'avons jamais accepté de code aveuglément : nous avons relu chaque diff ligne par ligne avant d'autoriser l'écriture, nous avons testé chaque cas limite à la main (mot de 60 lettres, 360 px, message vide, F5), et surtout nous avons écrit nous-mêmes des tests unitaires indépendants (`brain.test.js`) que nous avons d'abord vu échouer en rouge en cassant la limite exprès, avant de vérifier leur passage au vert.

4. Quelle astuce avez-vous le plus utilisée aujourd'hui, et laquelle avez-vous oubliée ?
   - Astuce la plus utilisée : L'astuce 2 (« Petits pas : un changement par demande, un diff relu ») combinée à l'astuce 7 (« Des contre-exemples dans le prompt », par exemple interdire `innerHTML` et exiger que `<b>gras</b>` s'affiche avec ses chevrons).
   - Astuce la plus oubliée : L'astuce 8 (« Faire lister les hypothèses de l'agent »), qu'on a tendance à négliger dès qu'on prend confiance, ce qui laisse l'agent faire des suppositions erronées ou toucher des fichiers non prévus.

## Aides utilisées

- Indices, aide-mémoire, voisins : Aide-mémoire JavaScript pour l'utilisation de `node:test` et `node:assert/strict`, aide-mémoire HTML pour la sémantique accessible (`label for`, repères `main`/`header`).
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse : Génération du squelette et des fonctions selon des prompts très cadrés en 6 parties ; vérification par inspection manuelle du diff git (`git diff`), tests DevTools et exécution de la suite de tests automatisés.

## Notes personnelles (chacun)

Pour préparer l'explication de votre part du code. Chacun écrit avec ses mots.

- Nom : Sacha SIMON
- Ce que j'ai compris : Comment piloter une IA avec des contraintes strictes et des critères d'arrêt clairs, et pourquoi la modularité du code (`brain.js` isolé du DOM) est indispensable pour pouvoir tester automatiquement son application.
- Ce que je n'ai pas encore compris : Comment concevoir des règles de parsing en langage naturel plus flexibles (synonymes, tolérance aux fautes d'orthographe) sans alourdir le fichier de règles.

- Nom : Dorian ROUX
- Ce que j'ai compris : Le rôle fondamental d'un test vu rouge pour certifier qu'une suite de tests fonctionne réellement, ainsi que les risques majeurs de sécurité liés à `innerHTML` face à `textContent`.
- Ce que je n'ai pas encore compris : La transition future entre un cerveau à règles locales synchrones et un assistant connecté à une API asynchrone avec gestion de latence.

Git sert à sauvegarder chaque étape acceptée : lisez les différences et nommez les fichiers à enregistrer, jamais `git add -A`. Attendez la consigne du formateur avant tout envoi vers un dépôt commun.

[README du jour](README.md) · [Aide-mémoire HTML/CSS](ressources/aide-memoire.md) · [Aide-mémoire JavaScript](ressources/aide-memoire-js.md) · [Notice dsh](ressources/dsh.md)
