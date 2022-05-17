export interface IOffers {
  id: number;
  jobType: string;
  jobTitle: string;
  companyTitle: string;
  buttonTitle: string;
  languageTitle: string;
  logo: string;
}

export interface IOfferData {
  id: number;
  companyTitle: string;
  languageTitle: string;
  logo: string;
  jobTitle: string;
  jobType: string;
  salary: string;
  category: string;
  level: string;
  languages: string[];
  offerDescription: string;
  dailyTasks: {
    id: number;
    exercise: string;
  }[];
  coreRequirements: {
    id: number;
    name: string;
  }[];
  additionalRequirements: {
    id: number;
    name: string;
  }[];
  date: string;
}

export interface IFiltersData {
  id: number;
  category: string;
  options: {
    id: number;
    name: string;
  }[];
}
