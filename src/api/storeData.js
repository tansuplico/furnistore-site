const products = [
  {
    id: 1,
    brand: "Common Good",
    sku: "SMI4",
    name: "Asian Arts Andrew ",
    price: 3299,
    desc: "This Asian Arts Andrew Sofa is the perfect addition to any modern or traditional home. The elegant design and comfortable seating make it a great choice for both relaxation and entertaining. The sofa is upholstered in a soft, durable fabric that is easy to care for. It is also available in a variety of colors to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/111/382/5__50197.1541556632.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: true,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 2,
    brand: "Common Good",
    sku: "SMI5",
    name: "Calascio ",
    price: 3399,
    desc: "This Calascio Chair is a stunning piece of furniture that will add a touch of elegance to any room. The chair is made from solid wood and upholstered in a soft, luxurious fabric. It features a curved back and armrests for added comfort. The Calascio Chair is available in a variety of colors to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/111/381/1__30179.1541556587.jpg?c=2",
    isNew: false,
    onSale: false,
    onDeals: false,
    isPopular: true,
    quantity: 1,
  },
  {
    id: 3,
    brand: "Common Good",
    sku: "SM13",
    name: "Evergreen Swan ",
    price: 3499,
    desc: "This Evergreen Swan Chair is the perfect addition to any elegant or whimsical home. The curved design and plush cushions make it a great choice for both comfort and style. The chair is upholstered in a soft, durable fabric that is easy to care for. It is also available in a variety of colors to match any décoration",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/111/383/3__88304.1541556559.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: true,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 4,
    brand: "Rockwell",
    sku: "DBP",
    name: "Rockwell Brickwood Lamp",
    price: 2500,
    desc: "This Rockwell Brickwood Lamp is the perfect addition to any bohemian or coastal home. The natural materials and airy design make it a great choice for creating a relaxed and inviting atmosphere. The lamp is also equipped with a dimmer switch, so you can adjust the light to create the perfect mood.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/107/384/2__94225.1541556721.jpg?c=2",
    isNew: false,
    onSale: true,
    onDeals: true,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 5,
    brand: "OFS",
    sku: "TWA",
    name: "Vantatrim Wooden ",
    price: 5499.5,
    desc: "This Vantatrim Wooden Chair with wooden legs is the perfect addition to any modern or industrial home. The sleek design and comfortable seating make it a great choice for both relaxation and entertaining. The chair is made from durable materials that are easy to clean and maintain. It is also available in a variety of colors to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/97/399/15__41467.1541557431.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: false,
    isPopular: true,
    quantity: 1,
  },
  {
    id: 6,
    brand: "OFS",
    sku: "TWB",
    name: "Orange Comfort ",
    price: 5999.0,
    desc: "This Orange Comfort Chair with brown legs is the perfect addition to any modern or contemporary home. The bold color and comfortable seating make it a great choice for both dining and relaxing. The chair is made from durable materials that are easy to clean and maintain.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/97/397/14__81011.1541556919.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: false,
    isPopular: true,
    quantity: 1,
  },
  {
    id: 7,
    brand: "OFS",
    sku: "TWC",
    name: "Green Comfort",
    price: 4999.95,
    desc: "This Green Comfort Chair is the perfect addition to any stylish home. The luxurious velvet upholstery and comfortable design make it a great choice for both relaxing and entertaining. The armchair is made from durable materials that are easy to care for.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/97/398/11__46616.1541556919.jpg?c=2",
    isNew: false,
    onSale: true,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 8,
    brand: "Rockwell",
    sku: "DPC",
    name: "Offi Mag Table",
    price: 6500.99,
    desc: "This Offi Mag Table is the perfect addition to any modern or contemporary home. The sleek design and spacious tabletop make it a great choice for both work and play. The table is made from durable materials that are easy to clean and maintain.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/107/385/4__66605.1541556717.jpg?c=2",
    isNew: true,
    onSale: true,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 9,
    brand: "Rockwell",
    sku: "DPA",
    name: "Turquoise Ceramic Table Lamp",
    price: 5890.5,
    desc: "This turquoise ceramic table lamp is the perfect addition to any bohemian or coastal home. The unique shape and earthy tones make it a great choice for creating a relaxed and inviting atmosphere. The lamp is made from durable materials that are easy to clean and maintain.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/107/386/6__21226.1541556717.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 10,
    brand: "Audrey",
    sku: "OFSUC",
    name: "Zuo Umea ",
    price: 7499.5,
    desc: "This Zuo Umea Chair is a stylish and comfortable piece of furniture that will add a touch of modern style to any room. The chair is made from high-quality materials and features a sleek, minimalist design. It is upholstered in soft, luxurious fabric and has a comfortable padded seat and back. The Zuo Umea Chair is available in a variety of colors to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/104/388/8__97685.1541556785.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 11,
    brand: "OFS",
    sku: "CLC",
    name: "Ding3000 Coffee Table",
    price: 11499.5,
    desc: "This Ding3000 Coffee Table is a stylish and modern piece of furniture that will add a touch of personality to any room. The table is made from high-quality materials and features a unique, star-shaped design. It is made from tempered glass and has a solid wood base. The Ding3000 Coffee Table is available in a variety of colors to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/103/391/10__71407.1541556842.jpg?c=2",
    isNew: false,
    onSale: true,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 12,
    brand: "OFS",
    sku: "CLA",
    name: "Wooden End Table with Shelf",
    price: 15999.99,
    desc: "This wooden end table with shelf is the perfect addition to any living room or bedroom. It's made of high-quality wood and has a simple, yet elegant design. The table has a spacious shelf that is perfect for storing books, magazines, or other items. The table is also available in a variety of finishes to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/103/392/7__10234.1541556842.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 13,
    brand: "Rockwell",
    sku: "TWD",
    name: "Plain White Living Room",
    price: 2500.5,
    desc: "This Plain White Living Room Chair is the perfect addition to any modern or contemporary home. The sleek design and comfortable seating make it a great choice for both relaxation and entertaining. The chair is made from durable materials that are easy to clean and maintain.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/98/395/13__76758.1541556874.jpg?c=2",
    isNew: false,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 14,
    brand: "Rockwell",
    sku: "TWE",
    name: "Hans Wegner CH07 Shell ",
    price: 7499.5,
    desc: "This Hans Wegner CH07 Shell Chair is a classic piece of Danish design that will add a touch of timeless elegance to any room. The chair is made from solid wood and upholstered in soft, luxurious fabric. It features a shell-shaped seat and back that provides comfortable seating for hours on end. The Hans Wegner CH07 Shell Chair is available in a variety of finishes to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/94/402/16__15709.1541557074.jpg?c=2",
    isNew: false,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 15,
    brand: "Rockwell",
    sku: "TWW",
    name: "Bookshelf",
    price: 17700.5,
    desc: "This bookshelf is the perfect addition to any home library or study. It is made from solid wood and has three spacious shelves that are perfect for storing books, magazines, and other items. The bookshelf is also available in a variety of finishes to match any décor.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/94/401/12__40856.1541557074.jpg?c=2",
    isNew: true,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 16,
    brand: "Rockwell",
    sku: "TON",
    name: "Stockholm Barstool ",
    price: 4999.0,
    desc: "This Stockholm Barstool by TON is the perfect addition to any modern or contemporary home. The sleek design and comfortable seating make it a great choice for both relaxation and entertaining. The barstool is made from solid wood and has a black cushioned seat.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/88/408/37__24003.1541557163.jpg?c=2",
    isNew: false,
    onSale: true,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
  {
    id: 17,
    brand: "Rockwell",
    sku: "TIN",
    name: "Merano Chair Beech Frame",
    price: 6500.5,
    desc: "This Merano Chair Beech Frame is a versatile piece of furniture that can be used in a variety of settings. It is made from solid beech wood and has a timeless design that will look great in any home. The chair is upholstered in a soft, grey fabric that is comfortable and stylish.",
    image:
      "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/400x400/products/88/407/36__25577.1541557408.jpg?c=2",
    isNew: false,
    onSale: false,
    onDeals: false,
    isPopular: false,
    quantity: 1,
  },
];

export default products;