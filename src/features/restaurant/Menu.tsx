import { FC } from 'react';
import MenuItem from '../../models/MenuItem';
import './menu.css';

interface MenuProps {
  items: MenuItem[];
}

const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem: MenuItem) => {
        return (
            <div>
              <article key={menuItem.id} className="menu-item">
                <img src={require(`../../images/${menuItem.image}.jpg`)} alt={menuItem.title} className="photo" />
                  <div className="item-info">
                    <header>
                      <h4>{menuItem.title}</h4>
                      <h4 className="price">{menuItem.price} лв.</h4>
                    </header>
                  </div>
              </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;