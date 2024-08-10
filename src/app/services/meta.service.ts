import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta, private titleService: Title) { }
  updateMetaTags(title: string, description: string, keywords: string, ogTitle: string | null | null, ogDescription: string | null, ogUrl: string | null): void {
    if (environment.production) {
      if (title !== null) {
        this.titleService.setTitle(title);
        this.meta.updateTag({ name: 'title', content: title });
      }
      if (description !== null) {
        this.meta.updateTag({ property: 'description', content: description });
      }
      if (keywords !== null) {
        this.meta.updateTag({ name: 'keywords', content: keywords });
      }
      if (ogTitle !== null) {
        this.meta.updateTag({ property: 'og:title', content: ogTitle });
      }
      this.meta.updateTag({ property: 'og:image', content: 'https://res.cloudinary.com/dmdawjgs8/image/upload/v1717159976/new/Subtraction_26_yypjq7.webp' });
      if (ogDescription !== null) {
        this.meta.updateTag({ property: 'og:description', content: ogDescription });
      }
      if (ogUrl !== null) {
        this.meta.updateTag({ property: 'og:url', content: ogUrl });
      }
      this.meta.updateTag({ name: 'theme-color', content: '#317EFB' });
    }
  }
}
