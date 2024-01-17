import { FC, useEffect, useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import MenuItem from "../../models/MenuItem";
import services from "../../calls/services";
import MenuCategory from "../../models/MenuCategory";

const Restaurant: FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [unmodifiedMenuItems, setUnmodifiedMenuItems] = useState<MenuItem[]>(
    []
  );

  useEffect(() => {
    retrieveMenuItems();
    retrieveMenuCategories();
  }, []);

  const retrieveMenuCategories = () => {
    services
      .getMenuCategories()
      .then((response: any) => {
        let mc = response.data as MenuCategory[];
        setCategories(mc);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const retrieveMenuItems = () => {
    services
      .getMenuItems()
      .then((response: any) => {
        let mi = response.data as MenuItem[];
        setMenuItems(mi);
        setUnmodifiedMenuItems(mi);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const filterItems = (categoryId: number): void => {
    if (categoryId === 1) {
      setMenuItems(menuItems);
      return;
    }

    const newItems = unmodifiedMenuItems.filter(
      (item: MenuItem) => item.categoryId === categoryId
    );
    if (newItems !== undefined) setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Меню</h2>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Restaurant;
