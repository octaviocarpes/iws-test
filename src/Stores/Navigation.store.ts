import { observable, computed, autorun } from 'mobx';

export class NavigationStore {
  @observable public location = '';

  public setLocation(location: string): void {
    this.location = location;
  }
}
