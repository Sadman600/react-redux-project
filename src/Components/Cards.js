import React, { useEffect, useState } from "react";

import { Card } from "primereact/card";

const Cards = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);
  return (
    <div className="grid gap-1 mt-5 w-full mx-auto">
      {meals.map((meal) => (
        <Card className="col-4" title={meal.strCategory} subTitle="SubTitle">
          {meal.strCategoryDescription}
        </Card>
      ))}
    </div>
  );
};

export default Cards;
