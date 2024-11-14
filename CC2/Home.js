import React from "react";
import './Home.css'; 

const foods = [
  { id: 1, name: "Pizza", price: 12, description: "Cheesy pizza with a crispy crust and fresh toppings." },
  { id: 2, name: "Burger", price: 8, description: "Juicy burger with lettuce, tomato, and a sesame bun." },
  { id: 3, name: "Pasta", price: 10, description: "Classic Italian pasta with a rich marinara sauce." },
  { id: 4, name: "Sushi", price: 15, description: "Fresh sushi rolls with salmon, avocado, and rice." },
  { id: 5, name: "Salad", price: 7, description: "Healthy salad with mixed greens and a light vinaigrette." },
];

const Dashboard = ({ setPage, setSelectedFood }) => {
  const handleOrderNow = (food) => {
    setSelectedFood(food);
    setPage("thankYou"); // Navigate to thank-you page
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Available Food Items</h2>

      <div className="food-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <h3 className="food-name">{food.name}</h3>
            <p className="food-price">${food.price}</p>
            <p className="food-description">{food.description}</p>
            <button
              className="order-button"
              onClick={() => handleOrderNow(food)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      <button
        className="logout-button"
        onClick={() => setPage("login")}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
