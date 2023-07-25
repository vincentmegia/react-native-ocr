export type Info = {
  idValue: string;
  idType: string;
  fullName: string;
  birthDate: string;
};

export const createInfo = (): Info => ({
  idValue: '',
  idType: '',
  fullName: '',
  birthDate: '',
});
