---
sidebar_position: 3
---

Nous utilisons des librairies tels que `NgRx` et `NgXs` pour la gestion d'états.
Les fichiers de gestion d'états sont régroupés dans un dossier `@store` ou `~store`, selon les projets.

## NgXs

Pour **NgXs** un state est définit par les fichiers suivants:

- `@store/actions/NOM_STATE.actions.ts` pour les actions,
- `@store/states/NOM_STATE.state.ts` pour le state lui-même,
- `@store/facades/NOM_STATE.facade.ts` --> plus d'infos ici [https://blog.nrwl.io/nrwl...](https://blog.nrwl.io/nrwl-nx-6-2-angular-6-1-and-better-state-management-e139da2cd074).
