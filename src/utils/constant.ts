import { COUNTRY } from './enums';

export const ImageBaseUrl = `${process.env.PUBLIC_URL}/svgs/`;
export const COUNTRIES = [
  {
    name: COUNTRY.USA,
    label: '+1 - United States'
  },
  {
    name: COUNTRY.AUS,
    label: '+61 - Australia'
  }
];

export const COUNTRIES_MASK = {
  [COUNTRY.USA]: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  [COUNTRY.AUS]: [/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]
};

export const COLORS = {
  GREEN: '#02E0B1',
  RED: '#F44336',
  GREY: '#DFDFDF'
};
