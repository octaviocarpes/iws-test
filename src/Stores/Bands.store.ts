import { observable, computed } from 'mobx';
import { Band } from '../Models/Band';

export class BandStore {
  @observable public bands: Band[] = [];

  public setBands(bands: Band[]): void {
    this.bands = bands;
  }

  public filterBandsByName(bandName: string): Band[] {
    return this.bands.filter(band => band.name.startsWith(bandName));
  }

  @computed get filterBandsByRank(): Band[] {
    return this.bands.sort(band => band.numPlays);
  }
}
