import { Info } from "./../models/info/index"
import { createInfo } from "../models/info"
import { idTypeFilter } from "./idTypeFilter"
import { idValueFilter } from "./idValueFilter"
import { dateOfBirthFilter } from "./dateOfBirthFilter"
import { fullNameFilter } from "./fullNameFilter"

export interface ITextFilter {
   name: string
   process: (text: string) => Info
}

export const textProcessor = (texts: string[]) => {
   let info = createInfo()
   const filters: ITextFilter[] = []
   return {
      addFilter: (filter: ITextFilter) => {
         filters.push(filter)
      },
      process: () => {
         for (const text of texts) {
            for (const filter of filters) {
               info = filter.process(text)
            }
         }
         return info
      },
   }
}

export const createTextProcessor = (texts: string[]) => {
   const info = createInfo()
   const textProcessorInstance = textProcessor(texts)

   // add filters
   textProcessorInstance.addFilter(idTypeFilter(info))
   textProcessorInstance.addFilter(idValueFilter(info))
   textProcessorInstance.addFilter(dateOfBirthFilter(info))
   textProcessorInstance.addFilter(fullNameFilter(info))
   return textProcessorInstance
}
