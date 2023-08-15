import Clipboard from "@react-native-clipboard/clipboard"

export type Info = {
   idValue: string
   idType: string
   fullName: string
   birthDate: string
}

export const createInfo = (): Info => ({
   idValue: "",
   idType: "",
   fullName: "",
   birthDate: "",
})

export const clipboardCopyInfo = (info: Info) => {
   const text = `id: ${info.idValue} \n
  type: ${info.idType} \n
  full name: ${info.fullName} \n
  birth date: ${info.birthDate}`
   Clipboard.setString(text)
}
