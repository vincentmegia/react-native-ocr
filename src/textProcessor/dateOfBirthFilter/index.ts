import { ITextFilter } from '..';
import { Info } from '../../models/info';

export const dateOfBirthFilter = (info: Info): ITextFilter => {
  return {
    name: 'dateOfBirthFilter',
    process: (text: string) => {
      const t = text.replace('.', '-');
      const pattern = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/;
      try {
        const matches = t.match(pattern);
        if (!matches) {
          return info;
        }
        info.birthDate = matches[0] || '';
      } finally {
        return info;
      }
    },
  };
};
