import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

describe('Tests unitaires du cerveau de Cap Web (brain.js)', () => {
  describe('validateMessage', () => {
    it('refuse une chaîne vide ou faite uniquement d’espaces', () => {
      const res = validateMessage('   ');
      assert.equal(res.ok, false);
      assert.ok(typeof res.error === 'string' && res.error.length > 0);
    });

    it('accepte et nettoie les espaces autour d’un message valide', () => {
      const res = validateMessage('  salut  ');
      assert.deepEqual(res, { ok: true, value: 'salut' });
    });

    it('applique la limite exacte du cahier personnel (200 caractères max)', () => {
      const maxExact = 'a'.repeat(200);
      assert.equal(validateMessage(maxExact).ok, true);

      const tropLong = 'a'.repeat(201);
      const resTropLong = validateMessage(tropLong);
      assert.equal(resTropLong.ok, false);
      assert.ok(resTropLong.error.includes('200'));
    });
  });

  describe('replyTo', () => {
    it('traite les majuscules et espaces de la même façon pour les salutations', () => {
      const repMinuscule = replyTo('salut');
      const repMajuscule = replyTo('  SALUT  ');
      const repBonjour = replyTo('bonjour');
      assert.equal(repMinuscule, repMajuscule);
      assert.equal(repMinuscule, repBonjour);
    });

    it('reconnaît le mot clé "menu" du cahier avec une réponse distincte du repli', () => {
      const repMenu = replyTo('menu');
      const repInconnu = replyTo('une phrase quelconque jamais vue');
      assert.notEqual(repMenu, repInconnu);
      assert.ok(repMenu.toLowerCase().includes('saumon') || repMenu.toLowerCase().includes('menu'));
    });

    it('reconnaît le mot clé "reservation" du cahier avec une réponse distincte du repli', () => {
      const repReservation = replyTo('reservation');
      const repInconnu = replyTo('une phrase quelconque jamais vue');
      assert.notEqual(repReservation, repInconnu);
      assert.ok(repReservation.toLowerCase().includes('réservation') || repReservation.toLowerCase().includes('midi'));
    });
  });
});
