import { Info } from './../models/info/index';
import { createInfo } from '../models/info';

export interface ITextFilter {
  name: string;
  process: (text: string) => Info;
}

export const textProcessor = (texts: string[]) => {
  let info = createInfo();
  const filters: ITextFilter[] = [];
  return {
    addFilter: (filter: ITextFilter) => {
      filters.push(filter);
    },
    process: () => {
      for (const text of texts) {
        for (const filter of filters) {
          info = filter.process(text);
        }
      }
      return info;
    },
  };
};
