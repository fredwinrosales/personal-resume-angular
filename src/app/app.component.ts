import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = {
    name: environment.name,
    title: environment.title,
    linkedinUrl: environment.linkedinUrl
  };

  constructor(private titleService: Title, private metaService: Meta) {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle(environment.title);

    this.metaService.updateTag({ property: 'og:title', content: environment.title });
    this.metaService.updateTag({ property: 'og:description', content: environment.description });
    this.metaService.updateTag({ property: 'og:image', content: environment.image });
    this.metaService.updateTag({ property: 'og:url', content: environment.url });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });    
  }
}
