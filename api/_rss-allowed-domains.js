// ESM wrapper for shared RSS allowed domains (Vercel edge functions).
// Source of truth: shared/rss-allowed-domains.cjs (CJS).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
export default require('../shared/rss-allowed-domains.cjs');
