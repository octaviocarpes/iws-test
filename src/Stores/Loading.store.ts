import { observable } from 'mobx';

export class LoadingStore {
  @observable public isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }
}
