import Man1 from "../components/images/men-1.jpg";
import Man2 from "../components/images/men-2.jpg";
import Man3 from "../components/images/men-3.jpg";
import Man4 from "../components/images/men-4.jpg";
import Man5 from "../components/images/men-5.jpg";
import Man6 from "../components/images/men-6.jpg";
import Man7 from "../components/images/men-7.jpg";
import Man8 from "../components/images/men-8.jpg";
import Man9 from "../components/images/men-9.jpg";
import Man10 from "../components/images/men-10.jpg";
import Woman1 from "../components/images/women-2.jpg";
import Woman2 from "../components/images/women-1.jpg";
import Woman3 from "../components/images/women-3.jpg";
import Woman4 from "../components/images/women-4.jpg";
import Woman5 from "../components/images/women-5.jpg";
import Woman6 from "../components/images/women-6.jpg";
import Woman7 from "../components/images/women-7.jpg";
import Woman8 from "../components/images/women-8.jpg";
import Woman9 from "../components/images/women-9.jpg";
import Woman10 from "../components/images/women-10.jpg";
import Electronic1 from "../components/images/electronics-1.jpg";
import Electronic2 from "../components/images/electronics-2.jpg";
import Electronic3 from "../components/images/electronics-3.jpg";
import Electronic4 from "../components/images/electronics-4.jpg";
import Electronic5 from "../components/images/electronics-5.jpg";
import Electronic6 from "../components/images/electronics-6.jpg";
import Electronic7 from "../components/images/electronics-7.jpg";
import Electronic8 from "../components/images/electronics-8.jpg";
import Electronic9 from "../components/images/electronics-9.jpg";
import Electronic10 from "../components/images/electronics-10.jpg";
import Jewelries1 from "../components/images/jewelries-1.jpg";
import Jewelries2 from "../components/images/jewelries-2.jpg";
import Jewelries3 from "../components/images/jewelries-3.jpg";
import Jewelries4 from "../components/images/jewelries-4.jpg";
import Jewelries5 from "../components/images/jewelries-5.jpg";
import Jewelries6 from "../components/images/jewelries-6.jpg";
import Jewelries7 from "../components/images/jewelries-7.jpg";
import Jewelries8 from "../components/images/jewelries-8.jpg";
import Jewelries9 from "../components/images/jewelries-9.jpg";
import Jewelries10 from "../components/images/jewelries-10.jpg";
import Furniture1 from "../components/images/Asgaard sofa 3.png";
import Furniture1image2 from "../components/images/Maya sofa three seater (1) 1.png";
import Furniture1image3 from "../components/images/Outdoor sofa set 2.png";
import Furniture1image4 from "../components/images/Stuart sofa 1.png";
import Furniture1image5 from "../components/images/Outdoor sofa set_2 1.png";
import FaceBookIcon from "../components/icons/faceBookIcon";
import LinkeIn from "../components/icons/linckeInIcon.jsx";
import TwitterIcon from "../components/icons/TwitterIcon";

export const Data = [
  {
    id: 1,
    image: Furniture1,
    image2: Furniture1image2,
    image3: Furniture1image3,
    image4: Furniture1image4,
    image5: Furniture1image5,
    name: "ASGAARD SOFA",
    category: "Furniture",
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Elevate your space with our Asgaard Sofa – a perfect blend of modern style and comfort. ",
    price: 2500,
    size: "L",
    othersize: "XL",
    color: "bg-blue-500",
    thirdsize: "XS",
    oldPrice: 3500,
    amount: 1,
    SKU: "SS001",
    newCategory: "Furniture",
    initialRating:5,
    Tag: "Sofa",
    secondTag: "Chair",
    thirdTag: "Home",
    shareIconOne: <FaceBookIcon />,
    shareIconTwo: <LinkeIn />,
    shareIconThree: <TwitterIcon />,
    relatedProducts: [
      {
        id: 100,
        detailedDescription:
          "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Crafted with precision, this sofa seamlessly combines luxurious design with cozy relaxation. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
        additionalInformation:
          "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
        reviews: [
          {
            id: 200,
            user: "John Doe",
            rating: 4,
            title: "Good",
            comment:
              "I was pleasantly surprised by the quality of this product. It exceeded my expectations. The design is stylish, and it offers great value for the price. I would highly recommend it! ",
          },
          {
            id: 201,
            user: "Samuel Fisher",
            title: "Excellent",
            rating: 5,
            comment:
              "This product is fantastic! The attention to detail is remarkable, and the craftsmanship is top-notch. It arrived quickly, and I couldn't be happier with my purchase. Definitely worth the investment!",
          },
          {
            id: 202,
            user: "Godwin Bamidele",
            title: "Fair Enough",
            rating: 3,
            comment:
              "I have mixed feelings about this product. While it serves its purpose, I expected a bit more in terms of durability. The design is nice, but I think there's room for improvement.",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    image: Woman1,
    name: "VERSACE SKIRT",
    category: "Women Clothing",
    price: 130,
    oldPrice: 350,
    initialRating:2,
    amount: 1,
  },
  {
    id: 3,
    image: Electronic1,
    name: 'VISION 49" INCH FULL LED TV',
    category: "Electronics",
    price: 1000,
    oldPrice: 2000,
    initialRating:3,
    amount: 1,
  },
  {
    id: 4,
    image: Jewelries1,
    name: "HAND MADE ICEBOX NECKLACE",
    category: "Jewelrey",
    price: 1900,
    initialRating:5,
    oldPrice: 3000,
    amount: 1,
  },

  {
    id: 5,
    image: Man2,
    category: "Men Clothing",
    initialRating:4,
    name: "FULLY PACKED WHITE T-SHIRT",
    price: 150,
    oldPrice: 250,
    amount: 1,
  },
  {
    id: 6,
    image: Woman2,
    name: "WOMENS FLAY SKIRT",
    category: "Women Clothing",
    price: 200,
    initialRating:2,
    oldPrice: 400,
    amount: 1,
  },

  {
    id: 7,
    image: Electronic2,
    name: "SAMSUNG PRESSING IRON",
    category: "Electronics",
    price: 500,
    initialRating:5,
    oldPrice: 700,
    amount: 1,
  },
  {
    id: 8,
    image: Jewelries2,
    initialRating:5,
    name: "WOMENS RING SET",
    category: "Jewelrey",
    price: 40,
    oldPrice: 100,
    amount: 1,
  },

  {
    id: 9,
    image: Man3,
    category: "Men Clothing",
    name: "LOUIS VUITTON FIT",
    initialRating:5,
    price: 800,
    oldPrice: 1000,
    amount: 1,
  },
  {
    id: 10,
    image: Woman3,
    name: "WOMEN OFFICE SKIRT",
    category: "Women Clothing",
    price: 80,
    initialRating:3,
    oldPrice: 120,
    amount: 1,
  },

  {
    id: 11,
    image: Electronic3,
    name: 'HUAWEI 42" INCH FULL LED TV',
    category: "Electronics",
    price: 700,
    initialRating:3,
    oldPrice: 900,
    amount: 1,
  },
  {
    id: 12,
    image: Jewelries3,
    name: "BEAUTIFUL SET OF RINGS",
    category: "Jewelrey",
    initialRating:5,
    price: 100,
    oldPrice: 150,
    amount: 1,
  },
  {
    id: 13,
    image: Man4,
    category: "Men Clothing",
    name: "AFRICAN SENATOR ATTIRE",
    price: 180,
    oldPrice: 300,
    initialRating:5,
    amount: 1,
  },
  {
    id: 14,
    image: Woman4,
    name: "SEXY MINI SKIRT",
    category: "Women Clothing",
    price: 90,
    initialRating:5,
    oldPrice: 180,
    amount: 1,
  },
  {
    id: 15,
    image: Electronic4,
    name: "PRESSING IRON ",
    category: "Electronics",
    price: 500,
    initialRating:1,
    oldPrice: 800,
    amount: 1,
  },

  {
    id: 16,
    image: Jewelries4,
    name: "DIAMOND RING",
    category: "Jewelrey",
    price: 40000,
    oldPrice: 50000,
    initialRating:5,
    amount: 1,
  },

  {
    id: 17,
    image: Man5,
    category: "Men Clothing",
    name: "DIOR FULL OUTFIT",
    price: 3000,
    oldPrice: 30000,
    initialRating:5,
    amount: 1,
  },
  {
    id: 18,
    image: Woman5,
    name: "FULL LENGTH SKIRT",
    category: "Women Clothing",
    price: 150,
    oldPrice: 220,
    amount: 1,
    initialRating:3,
  },

  {
    id: 19,
    image: Electronic5,
    name: "LENOVO ELECTRONIC WASHING MACHINE",
    category: "Electronics",
    price: 1300,
    initialRating:5,
    oldPrice: 2000,
    amount: 1,
  },

  {
    id: 20,
    image: Jewelries5,
    name: "24 KARAT GOLD CHAIN",
    category: "Jewelrey",
    price: 30000,
    initialRating:5,
    oldPrice: 32000,
    amount: 1,
  },
  {
    id: 21,
    image: Man6,
    category: "Men Clothing",
    initialRating:5,
    name: "BALENCIAGA T-SHIRT",
    price: 400,
    oldPrice: 700,
    amount: 1,
  },
  {
    id: 22,
    image: Woman6,
    name: "FEMALE CASUAL SKIRT",
    category: "Women Clothing",
    price: 330,
    initialRating:5,
    oldPrice: 800,
    amount: 1,
  },

  {
    id: 23,
    image: Electronic6,
    name: " 24 HOURS WASHING MACHINE",
    category: "Electronics",
    price: 950,
    initialRating:3,
    oldPrice: 1000,
    amount: 1,
  },

  {
    id: 24,
    image: Jewelries6,
    name: "ICEBOX SILVER CHAIN",
    category: "Jewelrey",
    price: 20000,
    initialRating:5,
    oldPrice: 25000,
    amount: 1,
  },
  {
    id: 25,
    image: Man7,
    category: "Men Clothing",
    name: "HIGH FASHION SWEATSHIRT",
    price: 1000,
    initialRating:4,
    oldPrice: 2000,
    amount: 1,
  },
  {
    id: 26,
    image: Woman7,
    name: "FEMALE CHILDREN SKIRT",
    category: "Women Clothing",
    price: 25,
    initialRating:3,
    oldPrice: 50,
    amount: 1,
  },

  {
    id: 27,
    image: Electronic7,
    name: "40 INCH DISPLAY HP TELEVISION",
    category: "Electronics",
    price: 750,
    initialRating:2,
    oldPrice: 1000,
    amount: 1,
  },

  {
    id: 28,
    image: Jewelries7,
    name: "UNISEX ICEBOX NECKLACE",
    category: "Jewelrey",
    price: 4000,
    initialRating:5,
    oldPrice: 5000,
    amount: 1,
  },
  {
    id: 29,
    image: Man8,
    category: "Men Clothing",
    name: "UNISEX JEAN JACKET",
    price: 360,
    initialRating:5,
    oldPrice: 500,
    amount: 1,
  },
  {
    id: 30,
    image: Woman8,
    name: "FULLY MADE FEMALE OUTFIT",
    category: "Women Clothing",
    price: 300,
    initialRating:5,
    oldPrice: 500,
    amount: 1,
  },

  {
    id: 31,
    image: Electronic8,
    name: "THERMOCOOL WASHING MACHINE",
    category: "Electronics",
    price: 1200,
    oldPrice: 2500,
    initialRating:1,
    amount: 1,
  },

  {
    id: 32,
    image: Jewelries8,
    name: "FEMALE NECKLACE",
    category: "Jewelrey",
    price: 600,
    initialRating:5,
    oldPrice: 700,
    amount: 1,
  },
  {
    id: 33,
    image: Man9,
    category: "Men Clothing",
    name: "GHOST IMPAIRED T-SHIRT",
    price: 100,
    initialRating:3,
    oldPrice: 250,
    amount: 1,
  },
  {
    id: 34,
    image: Woman9,
    name: "WOMENS DESIGNER SKIRT",
    category: "Women Clothing",
    price: 200,
    initialRating:3,
    oldPrice: 350,
    amount: 1,
  },

  {
    id: 35,
    image: Electronic9,
    name: "SAMSUNG AIR CONDITIONER",
    category: "Electronics",
    price: 1300,
    oldPrice: 2300,
    initialRating:5,
    amount: 1,
  },
  {
    id: 36,
    image: Jewelries9,
    name: "UNISEX BANGLES",
    category: "Jewelrey",
    price: 500,
    initialRating:3,
    oldPrice: 700,
    amount: 1,
  },
  {
    id: 37,
    image: Man10,
    name: "VINTAGE SHIRT",
    category: "Men Clothing",
    price: 5000,
    initialRating:5,
    oldPrice: 7000,
    amount: 1,
  },
  {
    id: 38,
    image: Woman10,
    name: "WOMENS NICE GOWN",
    category: "Women Clothing",
    price: 1000,
    initialRating:3,
    oldPrice: 3000,
    amount: 1,
  },
  {
    id: 39,
    image: Electronic10,
    name: "CHINA-MADE AIR CONDITIONER",
    category: "Electronics",
    price: 1800,
    initialRating:5,
    oldPrice: 2000,
    amount: 1,
  },
  {
    id: 40,
    image: Jewelries10,
    name: "UNISEX BANGLES",
    category: "Jewelrey",
    price: 2000,
    oldPrice: 3000,
    initialRating:5,
    amount: 1,
  },
];
