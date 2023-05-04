const express = require("express");
const router = express.Router();
const Fruit = require("./models/fruit");

// Seed Route
router.get("/seed", async (req, res) => {
  try {
    await Fruit.create([
      {
        name: "grapefruit",
        color: "purple",
        readyToEat: false,
      },
      { name: "grape", color: "purple", readyToEat: false },
      {
        name: "avocado",
        color: "green",
        readyToEat: true,
      },
    ]);
    res.redirect("/fruits");
  } catch (err) {
    res.status(400).send(err);
  }
});

// I.N.D.U.C.E.S
// ==============
// Index //
router.get("/", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundFruit = await Fruit.find({}); //{} is the filter object, leaving {} empty returns everything
    res.status(200).render("/fruits/Index", { fruits: foundFruit });
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/vegetables", async (req, res) => {
  try {
    const foundVegetable = await Vegetable.find({}); //{} is the filter object, leaving {} empty returns everything
    res.status(200).render("vegetables/Index2", { vegetables: foundVegetable });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Delete // receives the id of the fruit document and deletes it
// after that it will redirect back to the Index page.
router.delete("/:id", async (req, res) => {
  try {
    await Fruit.findByIdAndDelete(req.params.id);
    //grabs _id from params, it is given value on the Index.jsx file
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update/PUT
router.put("/:id", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on";
    const updatedFruit = await Fruit.findByIdAndUpdate(
      // id grabbed from the url
      req.params.id,
      // data from the edit form
      req.body,
      { new: true } //shows new doc after updating it
    );
    res.redirect(`/${req.params.id}`); //goes to show page
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new fruit
router.get("/new", (req, res) => {
  res.render("/New");
});
router.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New2");
});

// Create // recieves info from new route to then create a new fruit w/ it
router.post("/", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on";
    const newFruit = await Fruit.create(req.body);
    console.log(newFruit);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/vegetables", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on";
    const newFruit = await Fruit.create(req.body);
    console.log(newFruit);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit ///
router.get("/:id/edit", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("/Edit", {
      fruit: foundFruit,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show ///
router.get("/:id", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("/Show", {
      //second param must be an object
      fruit: foundFruit,
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
