// Vite's `define` replaces __APP_VERSION__ in standalone mode.
// When loaded cross-origin from the shell, the replacement doesn't apply,
// so set it on globalThis before any method that references it runs.
(globalThis as any).__APP_VERSION__ = (globalThis as any).__APP_VERSION__ || 'dev';

import './styles/base-layer.css';
import './styles/happy-theme.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { App } from './App';

let appInstance: App | null = null;

class WorldMonitorElement extends HTMLElement {
  connectedCallback() {
    const container = document.createElement('div');
    container.id = 'app';
    this.appendChild(container);

    appInstance = new App('app');
    appInstance.init().catch(console.error);
  }

  disconnectedCallback() {
    appInstance?.destroy();
    appInstance = null;
    this.innerHTML = '';
  }
}

customElements.define('worldmonitor-app', WorldMonitorElement);
