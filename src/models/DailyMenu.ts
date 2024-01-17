interface DailyMenu {
    menuItemId: number | null;
    title: string;
    price: number;
    image: string;
    dayId: number;
    mealTypeId: number;
    menuItemQuantity: number | null;
}

export default DailyMenu;