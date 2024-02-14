export interface ResponseAPI {
  results: Results[];
  info: {}
}

export interface Results {
  gender: string;
  name: NamePerson;
  location: LocationPerson;
  email: string,
  login: Login,
  dob: Dob,
  registered: Registered,
  phone: string,
  cell: string,
  id: PersonID,
  picture: Picture,
  nat: string
}

interface NamePerson {
  title: string,
  first: string,
  last: string
}

interface LocationPerson {
  street: Street,
  city: string,
  state: string,
  country: string,
  postcode: string,
  coordinates: Coordinates;
  timezone: TimeZone;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string,
  longitude: string
}

interface TimeZone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string,
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string
}

interface Dob {
  date: string,
  age: number
}

interface Registered {
  date: string,
  age: number
}

interface PersonID {
  name: string,
  value: string
}

interface Picture {
  large: string,
  medium: string,
  thumbnail: string
}
