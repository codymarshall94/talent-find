interface ContactInformation {
  email: string;
  phone: string;
}

interface Location {
  city: string;
  province_state: string;
  country: string;
}

interface Links {
  website: string;
  imdb: string;
  instagram: string;
  youtube: string;
}

interface Attributes {
  gender: string;
  ethnicity: string;
  age_range: string;
  hair_color: string;
  eye_color: string;
  height: string;
  weight: string;
  physique: string;
}

interface Measurements {
  waist: string;
  inseam: string;
  chest: string;
  neck: string;
  shoe: string;
}

interface Skills {
  aquatic: string[];
  combat: string[];
  fire: string[];
  sport: string[];
  vehicle: string[];
}

interface Representation {
  agency_name: string;
  agent_name: string;
}

interface Credit {
  media: string;
  role: string;
  reference: string;
}

interface Credits {
  film: Credit[];
  tv: Credit[];
  commercial: Credit[];
}

export interface User {
  user_id: string;
  user_title: string;
  first_name: string;
  avatar: string;
  last_name: string;
  bio: string;
  photos: string[];
  contact_information: ContactInformation;
  location: Location;
  links: Links;
  attributes: Attributes;
  measurements: Measurements;
  skills: Skills;
  representation: Representation;
  credits: Credits;
  union_affiliations: string;
  driver_license: boolean;
}