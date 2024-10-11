import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Zodiac"]);

  const onAddCategory = (category) => {
    setCategories(list => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        categories.map(
          (category, key) => 
          {
            return <Gifgrid category={category} key={key} />;
          }
        )
      }
    </>
  );
};
