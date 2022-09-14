import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-search-patients',
  templateUrl: './search-patients.component.html',
  styleUrls: ['./search-patients.component.scss']
})
export class SearchPatientsComponent implements OnInit {
  showContent: boolean = true;

  constructor(private sidebarService: NbSidebarService, private layoutService: LayoutService) { }

  ngOnInit(): void {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'patients-sidebar');
    this.showContent = !this.showContent;
    this.layoutService.changeLayoutSize();
    return false;
  }
}
