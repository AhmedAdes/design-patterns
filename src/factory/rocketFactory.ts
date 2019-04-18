class Payload {
  constructor(weight: number) {
    this.weight = weight;
  }
  weight: number;
}
class Engine {
  constructor(thrust: number) {
    this.thrust = thrust;
  }
  thrust: number;
}
class Stage {
  constructor(engines: Engine[]) {
    this.engines = engines;
  }
  engines: Engine[];
}

class Rocket {
  payload: Payload
  stages: Stage[];
}

class RocketFactory {
  buildRocket(): Rocket {
    let rocket = new Rocket();
    let payload = this.createPayload();
    let stages = this.createStages();
    rocket.payload = payload;
    rocket.stages = stages;
    return rocket;
  }
  createPayload(): Payload {
    return new Payload(0);
  }
  createStages(): Stage[] {
    let engine = new Engine(1000);
    let stage = new Stage([engine]);
    return [stage];
  }
}

class Satellite extends Payload {
  constructor(
    public id: number) {
    super(200);
  }
}
class FirstStage extends Stage {
  constructor() {
    super([
      new Engine(1000),
      new Engine(1000),
      new Engine(1000),
      new Engine(1000)
    ]);
  }
}
class SecondStage extends Stage {
  constructor() {
    super([
      new Engine(1000)
    ]);
  }
}
type FreightRocketStages = [FirstStage, SecondStage];

class FreightRocket extends Rocket {

}

class FreightRocketFactory extends RocketFactory {
  nextSatelliteId = 0;
  createPayload(): Satellite { return new Satellite(this.nextSatelliteId++); }
  createStages(): FreightRocketStages {
    return [
      new FirstStage(),
      new SecondStage()
    ];
  };
  buildRocket(): FreightRocket {
    let rocket = this.createRocket();
    let payload = this.createPayload();
    let stages = this.createStages();
    rocket.payload = payload;
    rocket.stages = stages;
    return rocket;
  }
  createRocket(): Rocket {
    return new Rocket();
  }
}

let freightFactory = new FreightRocketFactory()
let satelliteRocket = freightFactory.buildRocket();
console.log(satelliteRocket);