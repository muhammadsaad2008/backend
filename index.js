import express from "express";
const app = express();

app.use(express.json());

let product = [
  {
    id: 1,
    name: "HP HS45 Headphpone",
    price: 4500,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv_bD3U1nbLOeyGWYrrgKsxJHapIrzcWfXpZ4Xob6QWu_S6933CM50fI&s=10",
    dec: "A confortable and high quality gaming headset",
  },
  {
    id: 2,
    name: "RTX3060",
    price: 93000,
    imgUrl:
      "https://www.pakbyte.pk/cdn/shop/files/ASUS-TUF-Gaming-NVIDIA-GeForce-RTX-3060-V2-OC-Edition-Graphics-Card-PakByte-Computers-24397702070339.webp?v=1753680086",
    dec: "A powerful graphics card from nvidia ",
  },
];
app.get("/product", (req, res) => {
  try {
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something Went wrong" });
  }
});

app.post("/product", (req, res) => {
  const newProduct = req.body;
  product.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  product = product.filter((product) => product.id !== parseInt(id));
  res.status(204).send();
});

app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const UpdateProduct = req.body;
  const index = product.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    product[index] = { ...product[index], ...UpdateProduct };
    res.json(product[index]);
  } else {
    res.status(404).json({ message: "Product not Found" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/weather", (req, res) => {
  res.status(200).json({
    city: "Lahore",
    temp_c: 30,
  });
});
app.listen(5050, () => {
  console.log("server is running on port 5050");
});
