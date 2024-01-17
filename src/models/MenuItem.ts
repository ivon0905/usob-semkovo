interface MenuItem {
    id: number | null;
    title: string;
    image: string;
    category: string | null;
    categoryId: number | null;
    price: number;
}

export default MenuItem;