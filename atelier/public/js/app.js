import { validateMessage, replyTo } from './brain.js';
import { renderMessages } from './view.js';

const formulaire = document.querySelector('#chat-form');
const champ = document.querySelector('#message');
const messagesListe = document.querySelector('#messages');
const statut = document.querySelector('#status');
const effacerBtn = document.querySelector('#effacer');
const versionElt = document.querySelector('#version');
const suggestions = document.querySelectorAll('#suggestions button');

const STORAGE_KEY = 'capweb.historique';
let historique = [];

// Relecture sécurisée de la mémoire locale au démarrage
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      historique = parsed;
    }
  }
} catch {
  historique = [];
  if (statut) {
    statut.textContent = 'Mémoire locale réinitialisée.';
  }
}

// Rendu initial de l'historique
renderMessages(historique, messagesListe);

// Clic sur une suggestion : copie sans envoi
suggestions.forEach((bouton) => {
  bouton.addEventListener('click', () => {
    if (champ) {
      champ.value = bouton.textContent?.trim() ?? '';
      champ.focus();
    }
    if (statut) {
      statut.textContent = 'Question copiée : modifiez-la ou envoyez-la.';
    }
  });
});

// Traitement de l'envoi du formulaire
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!champ) return;

  const validation = validateMessage(champ.value);
  if (!validation.ok) {
    if (statut) {
      statut.textContent = validation.error;
    }
    champ.focus();
    return;
  }

  // Efface le statut et vide le champ
  if (statut) statut.textContent = '';
  const messageUtilisateur = validation.value;
  champ.value = '';

  // Ajout du message utilisateur
  historique.push({ role: 'user', text: messageUtilisateur });

  // Calcul et ajout de la réponse de Cap Web
  const reponseBot = replyTo(messageUtilisateur);
  historique.push({ role: 'assistant', text: reponseBot });

  // Sauvegarde dans la mémoire locale
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(historique));
  } catch {}

  // Mise à jour de l'affichage via view.js
  renderMessages(historique, messagesListe);
  champ.focus();
});

// Effacement de la conversation avec confirmation
effacerBtn?.addEventListener('click', () => {
  const confirme = window.confirm('Voulez-vous vraiment effacer la conversation ?');
  if (confirme) {
    historique = [];
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    renderMessages(historique, messagesListe);
    if (statut) {
      statut.textContent = 'Conversation effacée.';
    }
    if (champ) {
      champ.focus();
    }
  }
});

// Récupération de la version du serveur local
fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => {});
