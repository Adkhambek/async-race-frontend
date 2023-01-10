const brands = [
  "Audi",
  "Bentley",
  "BMW",
  "Chevrolet",
  "Citroen",
  "Cupra",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Genesis",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "Mercedes",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Renault",
  "Skoda",
  "Subaru",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "LADA",
];

const models = [
  "RLX",
  "Mito",
  "DBX",
  "A6 Quattro",
  "Q3 Sport",
  "Continental",
  "5 Sport Gran",
  "7 xDrive",
  "Camaro",
  "Impala",
  "C5",
  "C4 Grand",
  "Formentor",
  "Challenger",
  "Portofino",
  "Lounge Mini",
  "Panda Cross",
  "C-Max",
  "Explorer",
  "Mustang",
  "GV80",
  "Civic DX",
  "Elantra",
  "QX80",
  "F-Pace",
  "Grand Cherokee",
  "Sportage",
  "Stinger",
  "GS 350",
  "Navigator",
  "Levante",
  "CX-5",
  "6 Dynamique",
  "C300 AMG",
  "Citan",
  "Lancer",
  "Touring",
  "Astra Sport",
  "Vivaro",
  "508 Allure",
  "Boxer PRO",
  "911 Carrera",
  "Grand Scenic",
  "Octavia RS",
  "BRZ Sport",
  "SX4 S-Cross",
  "Camry",
  "Corolla",
  "Sequoia",
  "Crafter",
  "Polo",
  "S60",
  "XC90",
  "Vesta SW",
  "XRAY",
  "Granta",
];

function randomizeArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeColor() {
  return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7)}`;
}

function generateRandomCar() {
  return {
    name: `${randomizeArr(brands)} ${randomizeArr(models)}`,
    color: randomizeColor(),
  };
}

export default generateRandomCar;
