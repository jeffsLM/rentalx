import { Category } from "../model/Category";

// dto => data transfer object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}
interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
