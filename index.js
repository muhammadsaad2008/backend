import express from "express";
const app =express()

app.use(express.json())

let product =[
      {
            id:1,
            name:"HP HS45 Headphpone",
            price:4500,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv_bD3U1nbLOeyGWYrrgKsxJHapIrzcWfXpZ4Xob6QWu_S6933CM50fI&s=10",
            dec:"A confortable and high quality gaming headset"
      },
      {
            id:2,
            name:"RTX3060",
            price:93000,
            imgUrl:"https://www.pakbyte.pk/cdn/shop/files/ASUS-TUF-Gaming-NVIDIA-GeForce-RTX-3060-V2-OC-Edition-Graphics-Card-PakByte-Computers-24397702070339.webp?v=1753680086",
            dec:"A powerful graphics card from nvidia "
      }
]
 app.get("/product",(req,res)=>{
      try {
            res.status(200).json(product);
      } catch (error) {
            res.status(500).json({message:"Something Went wrong"})
      }
      
 });

 app.post("/product",(req,res)=>{
      const newProduct =req.body;
      product.push(newProduct);
      res.status(201).json(newProduct);
 });

app.get("/",(req,res)=>{
      res.send("Hello World")
})

app.get("/weather",(req,res)=>{
      res.status(200).json({
        city:"Lahore",
        temp_c:30,
      })
})
app.listen(5050,()=>{
    console.log("server is running on port 5050")
})