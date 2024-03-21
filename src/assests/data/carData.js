// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Tesla Model S is an electric luxury sedan offering cutting-edge technology and impressive performance. With sleek design and zero-emission driving, it redefines the automotive experience.",
  },

  {
    id: 2,
    brand: "Lamborghini",
    rating: 102,
    carName: "Lamborghini Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Lamborghini Aventador is a high-performance supercar renowned for its striking design and exhilarating driving experience. With its powerful engine and advanced aerodynamics, it's a symbol of automotive excellence and luxury.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The BMW X3 is a luxury compact SUV known for its refined performance, upscale interior, and advanced technology features. With dynamic handling and versatile functionality, it offers a perfect balance of style and practicality for modern drivers.",
  },

  {
    id: 4,
    brand: "Lamborghini",
    rating: 102,
    carName: "Lamborghini Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Lamborghini Murciélago is an iconic supercar known for its distinctive design, blistering performance, and unparalleled driving experience. With its powerful engine and exotic styling, it remains a symbol of automotive passion and craftsmanship.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyota Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Camry is a renowned midsize sedan celebrated for its reliability, comfort, and fuel efficiency. With a reputation for durability and smooth performance, it's a top choice for drivers seeking a dependable and practical vehicle.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz SUV",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Mercedes-Benz offers a range of luxurious SUVs, including the GLA, GLB, GLC, GLE, and GLS models. Known for their sophisticated design, cutting-edge technology, and refined performance, these SUVs combine style, comfort, and versatility for discerning drivers.",
  },

  {
    id: 7,
    brand: "Ford",
    rating: 82,
    carName: "Ford Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Ford Fiesta is a popular compact car known for its agile handling, fuel efficiency, and affordability. With its stylish design and versatile features, the Fiesta offers a fun and practical driving experience, making it a favorite choice for urban commuters and small families alike.",
  },

  {
    id: 8,
    brand: "Rolls-Royce",
    rating: 52,
    carName: "Rolls Royce",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Rolls-Royce is a legendary British luxury automobile manufacturer celebrated for crafting some of the most exquisite and prestigious vehicles in the world. Renowned for their unparalleled craftsmanship, opulent interiors, and effortless performance, Rolls-Royce cars represent the epitome of automotive luxury and refinement.",
  },
];

export default carData;