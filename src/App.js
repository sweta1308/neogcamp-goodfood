import React, { useState } from "react";
import "./styles.css";

const foodDescription = {
  Rajasthan: [
    {
      name: "Dal Baati Churma",
      rating: "4.5/5",
      description:
        "Dal Baati Curma is a 3-in-1 treat typical Rajasthani food. This is a combination of sweet and savoury dishes.",
      image:
        "https://www.cookingpitara.com/wp-content/uploads/2020/09/dal-bati-churma.jpg"
    },
    {
      name: "Gatte ki Sabji",
      rating: "4/5",
      description:
        "Gatte ki Sabji is the authentic Rajasthani curry-based cuisine which is primarily prepared from the gram flour.",
      image:
        "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/06/Gatte-Ki-Sabzi-Recipe-Step-By-Step-Instructions.jpg?fit=2243%2C1908&quality=65&strip=all&ssl=1"
    },
    {
      name: "Ghevar",
      rating: "4/5",
      description:
        "Ghevar is the sweet dish which has crunchy texture and is made from a mould. Various kinds of ghevar are available are plain, mawa ghevar and malai ghevar.",
      image:
        "https://i0.wp.com/mareenasrecipecollections.com/wp-content/uploads/2013/08/ghevarghewar-a-rajasthani-sweet-recipe.1024x1024-3.jpg?fit=1024%2C782&ssl=1"
    }
  ],

  Gujarat: [
    {
      name: "Khaman Dhokla",
      rating: "4.5/5",
      description:
        "Khaman Dhokla with a peppy green chutney is the most famous and mouth-watering Gujarati food in which the primary ingredient is gram-flour.",
      image:
        "https://www.secondrecipe.com/wp-content/uploads/2020/06/instant-dhokla-2.jpg"
    },
    {
      name: "Thepla",
      rating: "4/5",
      description:
        "Faintly bitter, and wonderfully spiced methi thepla are savory flatbreads that are delicious to enjoy as a delicious snack any time of the day.",
      image:
        "https://www.masalakorb.com/wp-content/uploads/2020/09/Gujarati-Methi-Thepla-Recipe-V1-500x500.jpg"
    },
    {
      name: "Fafda Jalebi",
      rating: "3.5/5",
      description:
        "Fafda is a spicy and crunchy snack and Jalebi is sweet, tangy and soft fried sweet dipped in sugar is a very famous combination in Gujarat.",
      image:
        "https://envato-shoebox-0.imgix.net/d310/ddc2-227a-4317-bfc5-5c257717c5c5/DSC_6201_renamed-jalebi.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=d0031a34198f2f9ddf7e7cfd0cea23bd"
    }
  ],

  Kolkata: [
    {
      name: "Rosogulla",
      rating: "4.5/5",
      description:
        "Rosogulla is a syrupy dessert which s made from ball-shaped dumplings of chhena (an Indian cottage cheese) and semolina dough, cooked in light sugar syrup made of sugar.",
      image:
        "https://en-media.thebetterindia.com/uploads/2017/01/rasgulla_625x350_61440575963-1.jpg"
    },
    {
      name: "Aloo posto",
      rating: "4/5",
      description:
        "Aloo Poshto is nothing but a poppy seed preparation. It's a famous Bengali dish which is generally eaten with a Daal/Lentil supplement.",
      image:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/ALOO_POSTO.jpg"
    },
    {
      name: "Shukto",
      rating: "3/5",
      description:
        "Shukto is a popular vegetable dish in Bengali cuisine usually served with rice. It has slightly bitter taste.",
      image:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/admin/Shukto_Recipe__Bengali_Mixed_Vegetable_in_Mustard_and_Poppy_Seed_Gravy.jpg"
    }
  ]
};

var foodLists = Object.keys(foodDescription);

export default function App() {
  const [foodItem, setFoodItem] = useState("Rajasthan");
  function foodClickHandler(dish) {
    setFoodItem(dish);
  }
  return (
    <div className="App">
      <h1>Famous Indian Food</h1>
      <p>
        <strong>
          Checkout the food items recommended by me. Select the state to know
          about its famous food item.
        </strong>
      </p>
      {foodLists.map((dish) => {
        return <button onClick={() => foodClickHandler(dish)}> {dish} </button>;
      })}

      <hr />
      <div id="food container">
        {foodDescription[foodItem].map((item) => {
          return (
            <li key={item}>
              <img alt="food image" src={item.image} />
              <div className="lists">
                <h2>{item.name}</h2>
                <p>Rating - {item.rating}</p>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
