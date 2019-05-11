const db = require("../models");
const mongoose = require("mongoose");

// Connect to mongoose
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cookie-store"
);

const productSeed = [
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Chocolate Chip",
    description: "Decadently rich and unbelievably sensational. With twice as many semisweet gourmet chocolate chunks!",
    price: 2,
    nuts: false,
    gluten: true 
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Double Fudge Chocolate Chip",
    description: "Devastatingly sinful. Premium cocoa blended with gourmet semisweet chocolate chunks make this a chocolate lovers dream.",
    price: 2,
    nuts: false,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Oatmeal Chocolate Chip",
    description: "An old-fashioned favorite with something extra. The perfect blend of freshly rolled oats and semisweet gourmet chocolate chunks",
    price: 2,
    nuts: false,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Snickerdoodle",
    description: "A wonderful blend of sweet, creamy butter, cinnamon and sugar creates this delightful taste sensation",
    price: 2,
    nuts: false,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Peanut Butter",
    description: "Made with pure gourmet peanut butter and premium freshly chopped peanuts, this tastes like the real thing - because it is",
    price: 2,
    nuts: true,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "White Chocolate Macadamia Nut",
    description: "Premium white chocolate chips and freshly chopped fancy macadamia nuts make this cookie an outstanding exotic taste sensation",
    price: 2,
    nuts: true,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Caramel Pecan",
    description: "Premium caramel blended with fancy freshly chopped pecans that mimic the taste of a freshly baked pecan pie",
    price: 2,
    nuts: true,
    gluten: false
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Sugar",
    description: "The sweetest, creamiset butter, premium sugars and the freshest ingredients make this an outstanding melt in you mouth cookie",
    price: 2,
    nuts: false,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Toffee",
    description: "Premium toffee, gourmet semi sweet chocolate, fresh creamy butter makes for an exceptional taste sensation",
    price: 2,
    nuts: true,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Oatmeal Rasin",
    description: "An old-fashioned favorite. The perfect blend of freshly rolled oats and plump, juicy raisins. Deliciously chewy and hard to resist",
    price: 2,
    nuts: false,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Peanut Butter Chocolate Chip",
    description: "Made with pure gourmet peanut butter and premium freshly chopped peanuts, we add loads of gourmet semi sweet chocolate chunks to create this outstanding combination!",
    price: 2,
    nuts: true,
    gluten: true
  },
  {
    imagePath: "https://www.meals.com/imagesrecipes/146208lrg.jpg",
    flavor: "Double Fudge Hazelnut",
    description: "Devastatingly sinful. Premium cocoa blended with gourmet semesweet chocolate chunks, fancy freshly chopped hazelnuts and a sprinkling of confectioners sugar. Perfection!",
    price: 2,
    nuts: true,
    gluten: true
  }
]

// Add the seeds to the database
db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
