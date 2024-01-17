import { useState, FC } from 'react';
import MenuCategory from '../../models/MenuCategory';

interface CategoriesProps {
  categories: MenuCategory[];
  filterItems: (category: number) => void;
}

const Categories: FC<CategoriesProps> = ({ categories, filterItems }) => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);

  const handleCategoryClick = (categoryIndex: number, categoryId: number): void => {
    filterItems(categoryId);
    setCurrentCategory(categoryIndex);
  };

  return (
    <div className="btn-container">
      {categories.map((category: MenuCategory, index: number) => {
        return (
          <button
            type="button"
            className={`filter-btn ${index === currentCategory ? 'active' : ''}`}
            key={index}
            onClick={() => handleCategoryClick(index, category.categoryId)}
          >
            {category.category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;