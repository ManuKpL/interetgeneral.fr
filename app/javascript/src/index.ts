import './polyfills.ts';

import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule                  from './app/app.module';

document.addEventListener('DOMContentLoaded', () => {
  if (NODE_ENV === 'production') {
    enableProdMode();
  }
  console.info('%cApp version', 'color:magenta', APP_VERSION);
  platformBrowserDynamic().bootstrapModule(AppModule);
});
