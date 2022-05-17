import logo from '../assets/companyLogo.jpg';
import { IOffers, IOfferData, IFiltersData } from './models';

// endpoint get:  /api/v1/offers
export const offersData: IOffers[] = [
  {
    id: 1,
    jobType: 'Zdalna',
    jobTitle: 'Junior Developer',
    companyTitle: 'Devire',
    buttonTitle: '10000-15000 zł',
    languageTitle: 'javascript',
    logo: logo,
  },
  {
    id: 2,
    jobType: 'Warszawa',
    jobTitle: 'Junior Backend Developer',
    companyTitle: 'SoftServe',
    buttonTitle: '5000-10000 zł',
    languageTitle: 'java',
    logo: 'https://static.nofluffjobs.com/companies/logos/original/softserve_20220328_140653_20220328_165558.webp',
  },
  {
    id: 3,
    jobType: 'Łódź',
    jobTitle: 'Junior Frontend Developer',
    companyTitle: 'Netguru',
    buttonTitle: '7000-10000 zł',
    languageTitle: 'python',
    logo: 'https://nofluffjobs.com/upload/listing/Netguru_20161004_141842.png',
  },
  {
    id: 4,
    jobType: 'Wrocław',
    jobTitle: 'Junior Web Developer',
    companyTitle: 'LiveChat',
    buttonTitle: '7000-10000 zł',
    languageTitle: 'node',
    logo: 'https://static.nofluffjobs.com/companies/logos/original/logo_rgb_orange_20220420_142843.png',
  },
];

// endpoint get:  /api/v1/offers/:id
export const offerData: IOfferData = {
  id: 1,
  date: '2022-01-01',
  logo: 'https://static.nofluffjobs.com/companies/logos/original/softserve_20220328_140653_20220328_165558.webp',
  jobTitle: 'Junior Developer',
  jobType: 'Zdalna',
  salary: '10000-15000 zł',
  companyTitle: 'Devire',
  languageTitle: 'javascript',
  category: 'Javascript',
  level: 'Junior',
  languages: ['angielski', 'polski'],
  offerDescription:
    'We are Unikie- Finnish technology powerhouse.\n' +
    '\n' +
    'We develop technology for secure realtime processes and offer consulting for related demand. Our services meet at the heart of three global macro trends - IoE, 5G and AI.\n' +
    'And yes, we have our own products and R&D.\n' +
    '\n' +
    'We are looking for Data Engineers with a strong background in engineering to our fast growing #UnikieAllStars team.\n' +
    '\n' +
    'The main responsibilities are:\n' +
    '\n' +
    '· Perform Data Engineering tasks required to analyse data from CDIT+D clusters. This includes setting-up data pipelines, storing data in our customer premises and transforming collected data to data structures optimized for efficient browsing\n' +
    '· Execute testing, perform troubleshooting of delivered data pipelines',
  dailyTasks: [
    {
      id: 1,
      exercise:
        'Tworzenie aplikacji w nowych i istniejących projektach oprogramowania w C# / Visual Studio',
    },
    {
      id: 2,
      exercise:
        'Zapewnienie właściwej jakości wytwarzanego oprogramowania i zgodności ze standardami oraz dobrymi praktykami',
    },
    {
      id: 3,
      exercise: 'Praca z dokumentacją techniczną',
    },
    {
      id: 4,
      exercise: 'Udział w testach',
    },
  ],
  coreRequirements: [
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'angular',
    },
    {
      id: 3,
      name: 'react',
    },
    {
      id: 4,
      name: 'php',
    },
    {
      id: 5,
      name: 'node',
    },
    {
      id: 6,
      name: 'c#',
    },
    {
      id: 7,
      name: 'c',
    },
  ],
  additionalRequirements: [
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'angular',
    },
    {
      id: 3,
      name: 'react',
    },
    {
      id: 4,
      name: 'php',
    },
    {
      id: 5,
      name: 'node',
    },
    {
      id: 6,
      name: 'c#',
    },
    {
      id: 7,
      name: 'c',
    },
  ],
};

export const filtersData: IFiltersData[] = [
  {
    id: 1,
    category: 'Technologie',
    options: [
      {
        id: 1,
        name: 'java',
      },
      {
        id: 2,
        name: 'angular',
      },
      {
        id: 3,
        name: 'react',
      },
      {
        id: 4,
        name: 'php',
      },
      {
        id: 5,
        name: 'node',
      },
      {
        id: 6,
        name: 'c#',
      },
      {
        id: 7,
        name: 'c',
      },
      {
        id: 8,
        name: 'c++',
      },
    ],
  },
  {
    id: 2,
    category: 'Lokalizacje',
    options: [
      {
        id: 1,
        name: 'Warszawa',
      },
      {
        id: 2,
        name: 'Lublin',
      },
      {
        id: 3,
        name: 'Białystok',
      },
      {
        id: 4,
        name: 'Wrocław',
      },
      {
        id: 5,
        name: 'Łódź',
      },
      {
        id: 6,
        name: 'Zakopane',
      },
      {
        id: 7,
        name: 'Gdańsk',
      },
      {
        id: 8,
        name: 'Kraków',
      },
    ],
  },
  {
    id: 3,
    category: 'Typ umowy',
    options: [
      {
        id: 1,
        name: 'Umowa o pracę',
      },
      {
        id: 2,
        name: 'Umowa zlecenie',
      },
      {
        id: 3,
        name: 'B2B',
      },
      {
        id: 4,
        name: 'Umowa o dzieło',
      },
      {
        id: 5,
        name: 'Bezpłatny staż',
      },
    ],
  },
  {
    id: 4,
    category: 'Doświadczenie',
    options: [
      {
        id: 1,
        name: 'Stażysta',
      },
      {
        id: 2,
        name: 'Junior',
      },
      {
        id: 3,
        name: 'Mid',
      },
      {
        id: 4,
        name: 'Senior',
      },
      {
        id: 5,
        name: 'Expert',
      },
    ],
  },
  {
    id: 5,
    category: 'Język pracy',
    options: [
      {
        id: 1,
        name: 'polski',
      },
      {
        id: 2,
        name: 'angielski',
      },
      {
        id: 3,
        name: 'ukraiński',
      },
      {
        id: 4,
        name: 'rosyjski',
      },
      {
        id: 5,
        name: 'węgierski',
      },
      {
        id: 6,
        name: 'słowacki',
      },
      {
        id: 7,
        name: 'białoruski',
      },
      {
        id: 8,
        name: 'czeski',
      },
    ],
  },
];
