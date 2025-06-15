# Guide d'intégration Shopify

## Structure recommandée pour Shopify Hydrogen

```
src/
├── components/
│   ├── Header.tsx (votre composant existant)
│   ├── ProductShowcase.tsx (adapté pour Shopify)
│   └── Cart.tsx (utiliser Shopify Cart API)
├── routes/
│   ├── index.tsx (page d'accueil)
│   └── products/[handle].tsx (pages produits)
└── lib/
    └── shopify.ts (configuration API)
```

## Configuration Shopify API

```typescript
// lib/shopify.ts
import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export const shopify = createStorefrontApiClient({
  storeDomain: 'votre-store.myshopify.com',
  apiVersion: '2024-01',
  publicAccessToken: 'votre-token-public',
});
```

## Adapter ProductShowcase pour Shopify

```typescript
// components/ProductShowcase.tsx
import {useLoaderData} from '@remix-run/react';

export default function ProductShowcase() {
  const {product} = useLoaderData();
  
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          {product.title}
        </h2>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Utiliser les vraies données produit Shopify */}
          <div>
            <img 
              src={product.featuredImage.url} 
              alt={product.title}
              className="w-full rounded-2xl"
            />
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">
              {product.priceRange.minVariantPrice.amount} €
            </p>
            {/* Vos composants existants adaptés */}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Utiliser le panier Shopify

```typescript
// hooks/useCart.ts
import {useCart} from '@shopify/hydrogen';

export function useShopifyCart() {
  const {lines, cost, checkoutUrl} = useCart();
  
  return {
    cartItems: lines,
    total: cost.totalAmount.amount,
    checkoutUrl
  };
}
```

## Déploiement automatique

1. **GitHub Actions** pour déploiement automatique :

```yaml
# .github/workflows/deploy.yml
name: Deploy to Shopify
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Shopify
        env:
          SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.SHOPIFY_CLI_THEME_TOKEN }}
        run: shopify theme push
```

## Variables d'environnement requises

```env
SHOPIFY_STORE_DOMAIN=votre-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=votre-token
SHOPIFY_ADMIN_ACCESS_TOKEN=votre-admin-token
```