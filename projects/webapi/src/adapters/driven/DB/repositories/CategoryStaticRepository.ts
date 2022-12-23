import { Category } from "../../../../domain/entities/Category";
import { CategoryRepository } from "../../../../domain/ports/driven/CategoryRepository";

const categories = [
    new Category('AUTH', 'Authenticate')
]

export class CategoryStaticRepository implements CategoryRepository {
    async getByCode(code: string): Promise<Category> {
        return categories.find(x => x.code === code)
    }
    async exists(code: string): Promise<boolean> {
        return categories.some(x => x.code === code)
    }
    async getAll(): Promise<Category[]> {
        return categories
    }
}