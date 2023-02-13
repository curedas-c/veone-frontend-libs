---
sidebar_position: 2
---

## Observables et souscriptions

- Les souscriptions doivent en prorité être faites via le pipe `async`, au travers d'un objet `state`.

``` html title="terminals-wrapper.component.ts"

<section *ngIf="{
    violations: violations$ | async,
    terminals: terminals$ | async
  } as State" class="terminals-wrapper">
  
</section>
```

## Sémantique et lisibilité

- Le code CSS doit respecter les spécifications [BEM](https://getbem.com/naming/), peux importe le framework CSS utilisé.
- Le code CSS des composants doit toujours être encapsulé dans un sélecteur `:host`, en veillant à utiliser des sélecteurs SASS.

``` scss title="terminals-wrapper.component.scss"
:host {
  .terminals-wrapper {
    &__list {
      @apply grid grid-cols-3 gap-4;

      &__item {
        @apply p-2 rounded;
      }
    }
  }
}
```


- Le contenu des composants doit toujours être **encapsulé**, c-a-d avoir un élément qui englobe tout son contenu.

``` html title="terminals-wrapper.component.html"
<section class="terminals-wrapper">
  <!-- CONTENU ICI -->
</section>
```


- Le Html doit être sémantique, et doit éviter les chevauchements pour maximiser la lisibbilité:

Exemple de mauvais code:

``` html
<div class="row">
  <div class="item">
  </div>
</div>
```

``` html
<article class="magazine">
  <article class="magazine__header">
  </article>

  <article class="magazine__body">
  </article>
</article>
```

- Ce qu'on préfère:

``` html
<section class="row">
  <div class="item">
  </div>
</section>
```

``` html
<article class="magazine">
  <header class="magazine__header">
  </header>

  <section class="magazine__body">
  </section>
</article>
```

## Code partagé

Lorsque plusieurs composants partagent un même style, le code CSS doit être factorisé, et figurer dans le fichier de styles partagés,
généralement sous `themes/modules/_shared.scss`;
