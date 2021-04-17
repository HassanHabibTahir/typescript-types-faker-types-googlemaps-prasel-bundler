import faker from "faker";
export class Comopany {
  companyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
