# Dossier 34-106402

Site d'analyse interactif sur l'« Innovation Exemption » de la SEC — l'ordre `34-106402`
du 17 septembre 2026, qui autorise pour cinq ans la négociation d'actions américaines
tokenisées dans des pools AMM permissionnés sur blockchain publique.

**Site publié :** https://claude.ai/artifact/HByZmoY4nnSBA3tmySXmrV

## Ce que contient le dossier

| § | Section | Contenu |
|---|---------|---------|
| 01 | L'ordre | Les 9 conditions cumulatives de l'exemption, en cartes dépliables |
| 02 | Les plafonds | Niveaux LULD Tier 1 / Tier 2 + calculateur de plafond de volume |
| 03 | Le marché | Capitalisation onchain, parts par chaîne, émetteurs, place des actions dans le RWA |
| 04 | Simulateur | 8 questions tirées de l'ordre → verdict d'éligibilité, avec 3 produits réels en préréglage |
| 05 | Les 5 acteurs | Coinbase, Robinhood, Ondo, Uniswap, Hyperliquid — thèse, correctifs, risques |
| 06 | Classement | Scoring pondéré à 6 critères, curseurs réglables, matrice opportunité/risque |
| 07 | Autres bénéficiaires | 4 analyses détaillées (Dinari, Chainlink, Solana, Securitize) + 8 positions courtes |
| 08 | La dynamique | Échec du CLARITY Act, bascule vers les régulateurs, 12 chantiers en cours |
| 09 | Risques | Veto émetteur, trou d'information du week-end, fragmentation, fragilité juridique |
| 10 | Chronologie | De xStocks (juillet 2025) à l'expiration de l'exemption (septembre 2031) |
| — | Offre | Giveaway : les 10 premiers DM sur Instagram reçoivent 30 € en crypto |

La thèse du dossier : l'exemption ne récompense pas la décentralisation, elle récompense
la conformité — ce qui inverse le classement des gagnants par rapport à la réaction des prix.

## Bloc offre

Le bloc en fin de page est un giveaway sans contrepartie : les dix premiers messages reçus
sur Instagram (`@crypto_comiks`) reçoivent 30 € en crypto. Aucune inscription, aucun dépôt,
aucun lien avec une plateforme ou un courtier — et la mention le dit explicitement.

Pour changer le compte, cherchez `INSTAGRAM_HANDLE` dans `src/page.html`, puis relancez
`node build.mjs`.

## Structure du projet

```
src/page.html    Source unique — fragment au contrat Artifact (pas de <html>/<head>/<body>)
build.mjs        Enveloppe le fragment pour produire un index.html autonome
index.html       Généré. Ouvrable directement, déployable tel quel (GitHub Pages…)
```

Aucune dépendance, aucun build step au sens classique : du HTML, du CSS et du JavaScript
sans framework. Les polices viennent de Google Fonts, tout le reste est inline.

## Développement

```bash
node build.mjs            # régénère index.html depuis src/page.html
npx http-server . -p 8080 # ou n'importe quel serveur statique
```

Modifiez toujours `src/page.html`, jamais `index.html` directement.

## Sources

Toutes les données sont sourcées et datées en pied de page du site : communiqué SEC 2026-90,
ordre 34-106402, déclaration du président Atkins, analyses Sullivan & Cromwell et
National Law Review, données de marché Cointelegraph / rwa.xyz / Kraken, et la couverture
CoinDesk, CNBC, Forbes et Benzinga du 17 au 22 septembre 2026.

## Avertissement

Travail d'analyse et de vulgarisation, à jour au 22 septembre 2026. Ne constitue ni un
conseil en investissement, ni un conseil juridique. Les notes attribuées aux acteurs sont
des jugements éditoriaux argumentés, pas des mesures.
