import { KVNamespace } from '@cloudflare/workers-types';

declare global {
  namespace App {
    interface Platform {
      env: {
        MY_KV: KVNamespace;
      };
      context: {
        waitUntil(promise: Promise<any>): void;
      };
      caches: CacheStorage & { default: Cache };
    }
  }
}

export {};
