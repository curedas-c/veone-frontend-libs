---
sidebar_position: 1
---

Les règles et recommandations à suivre des les projets frontend à VEONE.

:::caution

Assurez vous de toujours lire le **readme** de l'espace de travail avant de commencer à coder.

Les détails sur les outils à utiliser, les commandes à lancer ou les règles à respecter y sont souvent détaillés.

:::

## 1 - ROADMAP is our road

*<https://roadmap.sh>* fournit une excellente roadmap pour les développeurs, que nous suivons à VEONE.

Assurez vous de visiter régulièrement le site pour connaître votre niveau et savoir sur quoi vous concentrer.

Il s'agit notamment des roadmaps `frontend` et `angular`.


## 2 - Style de programmation

Les développemnets frontend, sont basés principalement sur des outils comme RxJS, NGRX, REDUX et équivalents, pour garantir une certaine conformité entre les projets peu importe le framework principal utilisé (Angular, React, Vue, etc).

La maîtrise de ses outils est donc primordiale.

## 3 - CSS

Tailwind CSS, SASS(SCSS) et BEM sont utilisés principalement pour écrire les styles CSS.

Il est recommandé de séparer Structure HTML, de styles CSS autant que possible.
Les règles tailwind doivent être appliqués via `@apply` et non pas directement dans l'attribut `class`.

- Exemple de mauvais code:

``` HTML
<div class="example container-fluid px-4 text-black">
</div>
```

- Ce qu'on préfère:

``` SCSS
.example {
    @apply px-4 text-black w-full;
}
```