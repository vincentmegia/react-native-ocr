import { ITextFilter } from '..';
import { Info } from '../../models/info';

export const idValueFilter = (info: Info): ITextFilter => {
  return {
    name: 'idValueFilter',
    process: (text: string) => {
      const t = text.toUpperCase();
      const pattern = /[STFG]\d{7}[A-Z]$/;
      const matches = t.match(pattern) || [];

      if (matches.length === 0) {
        return info;
      }
      info.idValue = matches[0] || '';
      return info;
    },
  };
};
