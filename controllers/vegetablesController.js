const Vegetable = require("./models/vegetable");

router.get("/vegetables", async (req, res) => {
  try {
    const foundVegetable = await Vegetable.find({}); //{} is the filter object, leaving {} empty returns everything
    res.status(200).render("vegetables/Index2", { vegetables: foundVegetable });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New2");
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
