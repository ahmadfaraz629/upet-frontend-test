export const API_TYPE = (action: string) => ({
  STARTED: `${action}_STARTED`,
  FULLFILLED: `${action}_FULLFILLED`,
  REJECTED: `${action}_REJECTED`
});

export const SUBMIITED_FORM = API_TYPE('SUBMIITED_FORM');
