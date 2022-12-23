import { Category } from "../../entities/Category";

export interface CategoryRepository {
    getAll(): Promise<Category[]>
    exists(code: string): Promise<boolean>
    getByCode(code: string): Promise<Category | null>
}