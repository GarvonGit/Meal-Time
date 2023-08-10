//we created our own API having data of our food items
//we created an object 'Menu' that consists of id, image, name, category, price, description of food item

const Menu = [
  {
    id: 1,
    image: "images/maggi.jpg",
    name: "maggi",
    category: "breakfast",
    price: "12₹",
    description:
      "Indulge in the timeless delight of our expertly crafted Maggi noodles. Perfectly cooked and tossed with our special blend of spices, our Maggi dish is a warm and satisfying experience that brings back cherished memories. Whether you're seeking a quick pick-me-up or a flavorful snack, our Maggi creation offers the perfect balance of familiarity and culinary innovation.",
  },

  {
    id: 2,
    image: "images/allupakoida.jpg",
    name: "allu pakoida",
    category: "evening",
    price: "20₹",
    description:
      "Discover the ultimate crispy indulgence with our Allu Pakoda. Meticulously prepared, each slice of potato is coated in a flavorful blend of spices and deep-fried to golden perfection. These bite-sized delights offer a nostalgic taste of home, making them a perfect snack to relish and share. With their satisfying crunch and delightful taste, our Allu Pakodas are an irresistible choice, whether you're enjoying them as a quick treat or a hearty appetizer. ",
  },
  {
    id: 3,
    image: "images/corn.jpg",
    name: "corn",
    category: "breakfast",
    price: "10₹",
    description:
      "Embark on a journey of smoky-sweet flavors with our Roasted Corn. Freshly plucked corn kernels are expertly roasted to achieve that perfect charred essence. Each bite is a harmonious blend of natural sweetness and a hint of smokiness, creating a taste that's both nostalgic and contemporary. Whether you're reminiscing about summer fairs or simply seeking a delectable snack, our Roasted Corn is a heartwarming choice that captures the essence of comfort in every kernel. ",
  },
  {
    id: 4,
    image: "../images/chola.jpg",
    name: "chola",
    category: "lunch",
    price: "50₹",
    description:
      "Dive into a burst of tangy and spicy flavors with our Chola Chaat. Meticulously crafted, this beloved street food classic features tender chickpeas infused with zesty spices, crisp vegetables, and a medley of chutneys. The result is a symphony of tastes that tantalize your palate with every bite. Whether you're a fan of traditional treats or looking to explore new flavors, our Chola Chaat offers an explosion of sensations that will transport you to the bustling streets of India. Enjoy it as a satisfying snack or a vibrant appetizer that promises a journey through layers of deliciousness.",
  },
  {
    id: 5,
    image: "../images/pizza.jpg",
    name: "pizza",
    category: "evening",
    price: "80₹",
    description:
      "Experience the epitome of culinary craftsmanship with our Artisanal Pizza. Each pizza is meticulously handcrafted, from kneading the dough to layering the finest ingredients. The result is a masterpiece of flavors, where the rich tomato sauce blends harmoniously with premium cheeses and a variety of meticulously selected toppings. Whether you're a traditionalist or an adventurous eater, our Artisanal Pizza caters to every palate, delivering a symphony of tastes that ignites the senses. Indulge in this timeless classic that celebrates the art of pizza-making, whether for a satisfying meal or a shared moment of pure gastronomic delight.",
  },
  {
    id: 6,
    image: "../images/nonvegthali.jpg",
    name: "Non-Veg Thali",
    category: "dinner",
    price: "180₹",
    description:
      "Embark on a culinary journey that celebrates the rich tapestry of Indian flavors with our Exquisite Non-Veg Thali. Carefully curated and thoughtfully presented, this traditional platter features an ensemble of succulent non-vegetarian delights that pay homage to the diverse regional cuisines of India. From tender tandoori kebabs to aromatic curries, each component of the thali is a masterpiece that showcases the intricate blend of spices and techniques that define Indian cooking. Whether you're a connoisseur of Indian cuisine or a first-time explorer, our Non-Veg Thali offers an immersive experience that captures the essence of a complete meal. Revel in the symphony of tastes and textures, and savor the cultural heritage that each bite brings forth. ",
  },
  {
    id: 7,
    image: "../images/sweet.jpg",
    name: "Sweets",
    category: "dinner",
    price: "60₹",
    description:
      "Delve into the realm of sweetness with our Divine Indian Ladoo collection. These exquisite confections are a celebration of tradition and taste, meticulously handcrafted to perfection. Each bite-sized sphere is a masterpiece, blending premium ingredients, aromatic spices, and a touch of culinary artistry. From the velvety richness of motichoor ladoo to the nutty charm of besan ladoo, our collection encapsulates the essence of Indian dessert culture. Whether you're seeking a moment of indulgence or sharing the joy of festivities, our Ladoos offer a symphony of flavors that transport you to the heart of India's sweet traditions. Revel in the divine pleasure of these timeless treats, where every mouthful is a reminder of the richness of Indian culinary heritage.",
  },
  {
    id: 8,
    image: "../images/rajmarice.jpg",
    name: "Rajma Rice",
    category: "lunch",
    price: "60₹",
    description:
      "Embark on a gastronomic journey to the heart of North Indian cuisine with our Authentic Rajma Chawal. This iconic dish features tender kidney beans cooked in a rich and aromatic tomato gravy, paired perfectly with fluffy basmati rice. A cherished comfort food, our Rajma Chawal brings together the warmth of home-cooked flavors and the distinct blend of spices that define Indian cooking. Whether you're craving a hearty meal or seeking a taste of tradition, our Rajma Chawal offers a wholesome and satisfying experience. Revel in the harmony of textures and tastes, and let the nostalgia of every bite transport you to the vibrant streets of India.",
  },
  {
    id: 9,
    image: "../images/samosa.jpg",
    name: "samaso",
    category: "evening",
    price: "10₹",
    description:
      "Embark on a journey of crispy delight with our Timeless Indian Samosa. A culinary masterpiece that has stood the test of time, each samosa is a work of art, meticulously handcrafted to perfection. Encased in a golden, flaky crust, the filling bursts with a harmonious blend of aromatic spices and a medley of flavors. Whether you're savoring it as a snack or relishing it as an appetizer, our Samosa captures the essence of Indian street food culture. Embrace the crispy exterior and the savory interior that tell a tale of tradition, innovation, and the joy of good food. Let each bite transport you to the bustling streets of India, where the aroma of spices fills the air, and every samosa is a treasure trove of taste. ",
  },
];

export default Menu;
