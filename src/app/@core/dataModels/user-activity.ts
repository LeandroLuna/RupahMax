import { Observable } from 'rxjs';

export interface UserActive {
  date: string;
  pagesVisitCount: string;
  deltaUp: boolean;
  newVisits: number;
}

export abstract class UserActivityData {
  abstract getUserActivityData(period: string): Observable<UserActive[]>;
}
