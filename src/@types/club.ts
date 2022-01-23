import Category from "./category";

export default interface Club{
  id:number;
  name:string;
  description:string;
  additionalDetails:string;
  category: Category;
  status: string;
  locality: string;
  subCategories: Category[];
  coverImage:string;
  logo: string;
}

export type CreateClubInterface  = {
  name: string;
  description: string;
  categoryId?: number;
  subCategories?: number[];
  locality: string;
}
