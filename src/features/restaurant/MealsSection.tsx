import { FC, useEffect, useState } from "react";
import MealTypes from "../../models/MealTypes";
import "./menu.css";
import DailyMenu from "../../models/DailyMenu";

interface MealsSectionProps {
    mealTypes: MealTypes[];
    dailyMenus: DailyMenu[];
}

const MealsSection: FC<MealsSectionProps> = ({mealTypes, dailyMenus}) => {
    const [menuItems, setMenuItems] = useState<DailyMenu[]>([]);

    useEffect(() => {
        setMenuItems(dailyMenus);
    });

    const handleOnAddElement = (itemId: number | null) => {
        const currentItems = [...menuItems];

        if (itemId !== null && itemId !== undefined)
        {
            const currentItem = currentItems.find(c => c.menuItemId === itemId);

            if (currentItem?.menuItemQuantity === null || currentItem?.menuItemQuantity === undefined)
                currentItem!.menuItemQuantity = 1; 
            else 
                currentItem.menuItemQuantity += 1;
        } 
           
        setMenuItems(currentItems); 
    }

    const handleOnRemoveElement = (itemId: number | null) => {
        const currentItems = [...menuItems];

        if (itemId !== null && itemId !== undefined)
        {
            const currentItem = currentItems.find(c => c.menuItemId === itemId);

            if (currentItem?.menuItemQuantity === null || currentItem?.menuItemQuantity === undefined)
                currentItem!.menuItemQuantity = 0; 
            else {
                if (currentItem.menuItemQuantity === 0)
                    return;

                currentItem.menuItemQuantity -= 1;
            }   
        }   
        setMenuItems(currentItems); 
    }

    return (
        <div>
        {mealTypes.map((mealType: MealTypes) => {
            return (
                <><section className="menu section">
                <div className="section-title">{mealType.name}</div>
                <div className="section-center">
                    {menuItems.filter(d => d.mealTypeId === mealType.mealTypeId).map((dailyMenu: DailyMenu) => {
                        return (
                            <div>
                                <article key={dailyMenu.menuItemId} className="menu-item">
                                    <img src={require(`../../images/${dailyMenu.image}.jpg`)}
                                     alt={dailyMenu.title} className="photo"/>
                                        <div className="item-info">
                                            <header>
                                                <h4>{dailyMenu.title}</h4>
                                                <h4 className="price">{dailyMenu.price} лв.</h4>
                                            </header>
                                        </div>
                                        <div className="btn-container-add-remove">
                                            <button type="button" 
                                                className="btn-add-remove" 
                                                onClick={() => handleOnAddElement(dailyMenu.menuItemId)}>+</button>
                                            <div className="textarea">
                                                {dailyMenu.menuItemQuantity ?
                                                 dailyMenu.menuItemQuantity?.toString() : "0"}
                                                </div>
                                            <button type="button" 
                                                className="btn-add-remove"
                                                onClick={() => handleOnRemoveElement(dailyMenu.menuItemId)}>-</button>
                                        </div>
                                </article>
                            </div>                          
                        );
                    })}
                </div>
                </section>
              </>
            )
        })}
        </div>
    );
};

export default MealsSection;