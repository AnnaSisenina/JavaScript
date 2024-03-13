const data = JSON.parse(dataInfo);
const container = document.querySelector("div.container");
data.forEach(element => {
  const productInfo = document.createElement("div");
  productInfo.classList.add(element.class);
  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");
  const productAttr = document.createElement("div");
  productAttr.classList.add("product-attr");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const price = document.createElement("p");
  const img = document.createElement("img");
  img.style.width = "195px";
  img.style.height = "130px";
  title.textContent = element.title;
  text.textContent = element.text;
  price.textContent = element.price;
  img.src = element.url;
  
  productAttr.appendChild(title);
  productAttr.appendChild(text);
  productDetails.appendChild(productAttr);
  productDetails.appendChild(price);

  productInfo.appendChild(img);
  productInfo.appendChild(productDetails);

  container.appendChild(productInfo);
});
