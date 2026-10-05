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

  switch (texte) {
    case 'salut':
    case 'bonjour':
      return 'Bonjour ! Bienvenue dans votre restaurant de quartier. Que puis-je faire pour vous ?';
    case 'aide':
      return "Je peux vous renseigner sur le 'menu', la 'reservation', le plat du jour ou nos événements. Tapez 'test' pour vérifier.";
    case 'test':
      return 'Test réussi : le moteur de règles de Cap Web répond correctement.';
    case 'menu':
      return "Au menu aujourd'hui : Pavé de saumon rôti ou Boeuf bourguignon maison (14,50€), suivi d'une tarte tatin.";
    case 'reservation':
      return 'Réservations ouvertes du mardi au dimanche : midi (12h-14h) et soir (19h30-22h). Téléphone : 01 23 45 67 89.';
    default:
      return "Je ne suis pas sûr de comprendre. Tapez 'aide' pour voir les sujets disponibles ou demandez le menu !";
  }
}
