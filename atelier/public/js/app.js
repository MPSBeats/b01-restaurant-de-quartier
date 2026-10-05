const formulaire = document.querySelector('#chat-form');
const champ = document.querySelector('#message');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const suggestions = document.querySelectorAll('#suggestions button');

// J1-07 : Un clic sur une suggestion copie la question, donne le focus et informe dans le statut sans soumettre
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

// Interface seule : on bloque l’envoi (la page ne se recharge pas) et on le dit dans le statut ; les réponses arrivent en J1-09.
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (statut) {
    statut.textContent = 'Interface prête.';
  }
});

// Version du serveur local, échec discret si indisponible.
fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => {});
