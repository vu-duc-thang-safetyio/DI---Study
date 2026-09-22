import { Engine, Injector } from "framework";

const injector = new Injector();
const engine = injector.resolve(Engine);

engine.start();
