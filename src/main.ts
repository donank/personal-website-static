import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import { AppModule } from './app/app.module';

const bootstrapPromise =  platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapPromise.then(success => console.log(`Bootstrap Success`))
  .catch(err => console.error(`Bootstrap error : ${err}`));