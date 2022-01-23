export interface CreateClubInterface {
  name: string;
  description: string;
  categoryId?: number;
  subCategories?: number[];
  locality: string;
}
