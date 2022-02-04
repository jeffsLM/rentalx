import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 *[x] definir o tipo de retorno
 *[x] alterar o retorno de error
 *[x] acessar o repositorio
 */
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        throw new Error(
            `${categoryAlreadyExists.name} ${categoryAlreadyExists.description}`
        );
        if (categoryAlreadyExists) {
            throw new Error(`Category ${name} already exists!`);
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
