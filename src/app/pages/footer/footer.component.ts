import { Component } from '@angular/core';
import { FOOTER_CONFIG } from './footer.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    config = FOOTER_CONFIG;
     whatsappLink = 'https://wa.me/' + this.config.whatsapp.replace(/[^0-9]/g, '')
}
