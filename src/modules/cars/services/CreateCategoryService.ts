import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 *[x] definir o tipo de retorno
 *[x] alterar o retorno de error
 *[x] acessar o repositorio
 */
class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error(`Category ${name} already exists!`);
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };