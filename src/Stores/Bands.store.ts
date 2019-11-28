import { observable, computed } from 'mobx';
import { Band } from '../Models/Band';

export class BandStore {
  @observable public bands: Band[] = [];

  public setBands(bands: Band[]): void {
    this.bands = bands;
  }

  private buildBandName(name: string): string {
    return `${name.charAt(0).toUpperCase()}${name.substr(1, name.length)}`;
  }

  public filterBandsByName(bandName: string): Band[] {
    return this.bands.filter(band => band.name.startsWith(this.buildBandName(bandName)));
  }

  @computed get filterBandsByRank(): Band[] {
    return this.bands.sort(band => band.numPlays);
  }
}
