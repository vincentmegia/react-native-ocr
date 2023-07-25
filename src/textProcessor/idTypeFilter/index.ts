import { ITextFilter } from './../index';
import { Info } from '../../models/info';
// NOTE: not a big fan of functions return object literals, simply bcoz it re-creates the obj
// everytime

/**
 *
 * @param info
 * @returns
 */
export const idTypeFilter = (info: Info): ITextFilter => {
  return {
    name: 'idTypeFilter',
    process: (text: string) => {
      const t = text.toLocaleLowerCase();
      if (t.includes('fin') || t.includes('fi')) {
        info.idType = 'FIN';
      } else if (t.includes('nr') || t.includes('nri') || t.includes('nric')) {
        info.idType = 'NRIC';
      }
      return info;
    },
  };
};
