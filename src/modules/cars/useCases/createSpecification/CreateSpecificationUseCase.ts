import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

/**
 * O SERVICE NUNCA DEVE CONHECER A BASE DADOS
 */
interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private SpecificationRepository: ISpecificationRepository
    ) {}

    execute({ name, description }: IRequest) {
        const specificationAlreadyExists =
            this.SpecificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error(`Specification ${name} already exists!`);
        }

        this.SpecificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
