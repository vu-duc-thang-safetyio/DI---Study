export class Injector {
  resolve<T>(factory: new () => T): T {
    return new factory();
  }
}
