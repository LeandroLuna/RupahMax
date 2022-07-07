import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with <span style="color: red;">♥</span> by <b><a href="https://github.com/LeandroLuna" target="_blank">Leandro Luna</a></b>, 2022
    </span>
    <div class="socials">
      <a href="https://www.linkedin.com/in/luna-leandro/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
