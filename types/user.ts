interface Stunt {
  media: string;
  role: string;
  reference: string;
}

interface User {
  name: string;
  title: string;
  ageRange: number;
  contact: {
    mobile: string;
    address: string;
    email: string;
  };
  links: {
    website: string;
    imdb: string;
    instagram: string;
    youtube: string;
  };
  body: {
    height: number;
    weight: number;
    hairColor: string;
    eyeColor: string;
    waist: number;
    inseam: number;
    chest: number;
    neck: number;
    shoe: number;
    physique: string;
  };
  photos: string[];
  skills: {
    aquatic?: string[];
    firearms?: string[];
    combat?: string[];
    sports?: string[];
    extreme?: string[];
    vehicles?: string[];
  };
  credits: {
    film?: Stunt[];
    tv?: Stunt[];
    commercial?: Stunt[];
  };
  unionStatus: string;
  affiliation: string;
}
