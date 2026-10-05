// Module pur de logique métier (aucune dépendance au DOM, document ou window)
const MAX_LONGUEUR = 200;

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être une chaîne de caractères.' };
  }
  const value = raw.trim();
  if (value.length === 0) {
    return { ok: false, error: 'Le message ne peut pas être vide.' };
  }
  if (value.length > MAX_LONGUEUR) {
    return { ok: false, error: `Le message dépasse la limite autorisée de ${MAX_LONGUEUR} caractères.` };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = (typeof message === 'string' ? message : '').trim().toLowerCase();

  // Salutations exactes
  if (texte === 'salut' || texte === 'bonjour') {
    return 'Bonjour ! Bienvenue dans votre restaurant de quartier. Que puis-je faire pour vous ?';
  }
  if (texte === 'aide') {
    return "Je peux vous renseigner sur le 'menu', la 'reservation', le plat du jour ou nos événements. Tapez 'test' pour vérifier.";
  }
  // Règle stricte pour 'test' (le mot 'tester' ne doit pas déclencher 'test')
  if (texte === 'test') {
    return 'Test réussi : le moteur de règles de Cap Web répond correctement.';
  }

  // Question 1 ou mot clé menu / plat du jour
  if (
    texte === 'menu' ||
    texte.includes('plat') ||
    texte.includes('carte') ||
    texte.includes("aujourd'hui")
  ) {
    return "Au menu aujourd'hui : Pavé de saumon rôti ou Boeuf bourguignon maison (14,50€), suivi d'une tarte tatin.";
  }

  // Question 2 ou mot clé reservation / horaires
  if (
    texte === 'reservation' ||
    texte === 'réservation' ||
    texte.includes('réserver') ||
    texte.includes('reserver') ||
    texte.includes('horaire') ||
    texte.includes('table')
  ) {
    return 'Réservations ouvertes du mardi au dimanche : midi (12h-14h) et soir (19h30-22h). Téléphone : 01 23 45 67 89.';
  }

  // Question 3 ou mot clé événement
  if (
    texte.includes('événement') ||
    texte.includes('evenement') ||
    texte.includes('soirée') ||
    texte.includes('animation')
  ) {
    return 'Prochains événements : Soirée dégustation de vins du terroir ce vendredi à 20h, et Brunch musical dimanche dès 11h30 !';
  }

  return "Je ne suis pas sûr de comprendre. Tapez 'aide' pour voir les sujets disponibles ou demandez le menu !";
}
