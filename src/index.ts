export { NBaseInteger } from './n-base/integer';

export class A {
  private dendelion = 10;
  #dendelion = 10;
  #dendelion1 = 10;

  private func() {
    this.dendelion = 20;
    return this.dendelion;
  }
}
