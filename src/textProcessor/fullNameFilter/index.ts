import { ITextFilter } from '..';
import { Info } from '../../models/info';

/**
 * full name filter is very tricky since there is no special regex
 * to identify it
 * @param info
 * @returns
 */
export const fullNameFilter = (info: Info): ITextFilter => {
  return {
    name: 'fullNameFilter',
    process: (text: string) => {
      const t = text.toLowerCase();
      if (info.fullName) {
        return info;
      }
      if (!info.idType || !info.idValue) {
        return info;
      }
      if (t.includes('fin') || t.includes('nri') || t.includes('nric')) {
        return info;
      }
      if (t.includes('nam') || t.includes('name')) {
        info.fullName = t.replace('name', '').replace('nam', '');
      } else {
        info.fullName = text;
      }

      return info;
    },
  };
};
