export class CategoryData{
    id: number;
    name: String;
    subcategory: CategoryData[];
    parentCategory: CategoryData;
}
