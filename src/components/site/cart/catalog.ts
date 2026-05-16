export type CatalogItem = {
  id: string;
  name: string;
  description?: string;
  original: number;
  price: number;
  rating: number;
  unit?: string;
};

export type Category = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  items: CatalogItem[];
};

import sofaImg from "@/assets/catalog/sofa.jpg";
import chairImg from "@/assets/catalog/chair.jpg";
import carpetImg from "@/assets/catalog/carpet.jpg";
import curtainImg from "@/assets/catalog/curtain.jpg";
import mattressImg from "@/assets/catalog/mattress.jpg";
import plasticTankImg from "@/assets/catalog/plastic-tank.jpg";
import cementTankImg from "@/assets/catalog/cement-tank.jpg";
import deepImg from "@/assets/catalog/deep.jpg";
import solarImg from "@/assets/catalog/solar.jpg";

const r = (min = 4.3, max = 4.9) =>
  Math.round((min + Math.random() * (max - min)) * 10) / 10;

export const catalog: Category[] = [
  {
    id: "sofa",
    name: "Sofa Cleaning",
    blurb: "Deep shampoo & sanitization for every sofa type.", image: sofaImg,
    items: [
      { id: "sofa-1", name: "Sofa Cleaning", description: "Per seat deep shampoo cleaning.", original: 500, price: 350, rating: 4.6 },
      { id: "sofa-7", name: "7 Seater Sofa Set Cleaning", description: "Complete 7-seater set deep clean.", original: 3500, price: 2450, rating: 4.9 },
      { id: "sofa-5", name: "5 Seater Sofa Set Cleaning", description: "Complete 5-seater set deep clean.", original: 2500, price: 1750, rating: 4.4 },
      { id: "sofa-6", name: "6 Seater Sofa Set Cleaning", description: "Complete 6-seater set deep clean.", original: 3000, price: 2100, rating: 4.5 },
      { id: "sofa-dewan", name: "Dewan Cleaning", description: "Full dewan shampoo & sanitization.", original: 1500, price: 1200, rating: 4.6 },
      { id: "sofa-cumbed", name: "Sofa Cum Bed Cleaning", description: "Sofa-cum-bed full deep clean.", original: 2000, price: 1450, rating: 4.4 },
    ],
  },
  {
    id: "chair",
    name: "Chair Cleaning",
    blurb: "Dining & office chair deep cleaning packages.", image: chairImg,
    items: [
      { id: "chair-4", name: "Chair Cleaning 4 Seats", description: "Set of 4 chairs deep cleaned.", original: 1400, price: 1200, rating: r() },
      { id: "chair-6", name: "Chair Cleaning 6 Seats", description: "Set of 6 chairs deep cleaned.", original: 2000, price: 1650, rating: r() },
      { id: "chair-8", name: "Chair Cleaning 8 Seats", description: "Set of 8 chairs deep cleaned.", original: 4000, price: 2150, rating: r() },
      { id: "chair-10", name: "Chair Cleaning 10 Seats", description: "Set of 10 chairs deep cleaned.", original: 4800, price: 2650, rating: r() },
      { id: "chair-12", name: "Chair Cleaning 12 Seats", description: "Set of 12 chairs deep cleaned.", original: 5400, price: 3150, rating: r() },
    ],
  },
  {
    id: "carpet",
    name: "Carpet Cleaning",
    blurb: "Deep carpet & rug shampoo, charged per sqft.", image: carpetImg,
    items: [
      { id: "carpet-1", name: "Carpet Cleaning", description: "Deep shampoo, stain removal.", original: 36, price: 20, rating: r(), unit: "/ SQFT" },
      { id: "rug-1", name: "Rug Cleaning", description: "Premium rug shampoo & care.", original: 44, price: 23, rating: r(), unit: "/ SQFT" },
    ],
  },
  {
    id: "curtain",
    name: "Curtain Cleaning",
    blurb: "On-site curtain & blind washing.", image: curtainImg,
    items: [
      { id: "curtain-1", name: "Curtain Cleaning", description: "On-site dry/wet curtain wash.", original: 1700, price: 1000, rating: r() },
      { id: "blind-1", name: "Blind Cleaning", description: "Detailed blind cleaning service.", original: 1500, price: 900, rating: r() },
    ],
  },
  {
    id: "mattress",
    name: "Bed / Mattress Cleaning",
    blurb: "Sanitized mattress & bed deep cleaning.", image: mattressImg,
    items: [
      { id: "mat-single", name: "Single Mattress Cleaning", description: "Single mattress deep clean.", original: 3100, price: 1650, rating: r() },
      { id: "mat-double", name: "Double Mattress Cleaning", description: "Double mattress deep clean.", original: 3700, price: 2000, rating: r() },
      { id: "bed-1", name: "Bed Cleaning", description: "Bed frame & headboard cleaning.", original: 800, price: 500, rating: r() },
    ],
  },
  {
    id: "plastic-tank",
    name: "Plastic Water Tank Cleaning",
    blurb: "Hygienic tank cleaning for safe water.", image: plasticTankImg,
    items: [
      { id: "ptank-1", name: "150 – 300 Gallons", description: "Plastic tank, 150–300 gallons.", original: 2150, price: 1800, rating: r() },
      { id: "ptank-2", name: "350 – 500 Gallons", description: "Plastic tank, 350–500 gallons.", original: 2500, price: 2000, rating: r() },
      { id: "ptank-3", name: "550 – 1000 Gallons", description: "Plastic tank, 550–1000 gallons.", original: 3000, price: 2500, rating: r() },
    ],
  },
  {
    id: "cement-tank",
    name: "Cement Water Tank Cleaning",
    blurb: "Roof-top & underground cement tank cleaning.", image: cementTankImg,
    items: [
      { id: "ctank-r1", name: "Roof Top Tank 3/5ft – 5/5ft", description: "Roof-top cement tank, small.", original: 3000, price: 2500, rating: r() },
      { id: "ctank-r2", name: "Roof Top Tank 6/6ft – 8/8ft", description: "Roof-top cement tank, medium.", original: 3500, price: 3000, rating: r() },
      { id: "ctank-r3", name: "Roof Top Tank 9/9ft – 12/12ft", description: "Roof-top cement tank, large.", original: 5000, price: 4500, rating: r() },
      { id: "ctank-u1", name: "Underground Tank 3/5ft – 5/5ft", description: "Underground cement tank, small.", original: 3500, price: 3000, rating: r() },
      { id: "ctank-u2", name: "Underground Tank 6/6ft – 8/8ft", description: "Underground cement tank, medium.", original: 4000, price: 3500, rating: r() },
      { id: "ctank-u3", name: "Underground Tank 9/9ft – 12/12ft", description: "Underground cement tank, large.", original: 6000, price: 5000, rating: r() },
    ],
  },
  {
    id: "deep",
    name: "Deep Cleaning",
    blurb: "Full house, room, kitchen & washroom deep cleaning.", image: deepImg,
    items: [
      { id: "deep-h1", name: "Full House Deep Cleaning (3–10 Marla)", description: "Per marla full house deep clean.", original: 700, price: 500, rating: r(), unit: "/ Marla" },
      { id: "deep-r1", name: "Room Deep Cleaning (3–10 Marla)", description: "Single room deep clean.", original: 4500, price: 2100, rating: r() },
      { id: "deep-k1", name: "Kitchen Deep Cleaning (3–10 Marla)", description: "Kitchen deep clean & degrease.", original: 4500, price: 2800, rating: r() },
      { id: "deep-w1", name: "Washroom Deep Cleaning (3–10 Marla)", description: "Washroom deep clean & sanitize.", original: 4000, price: 2400, rating: r() },
      { id: "deep-h2", name: "Full House Deep Cleaning (11 Marla – 3 Kanal)", description: "Per marla full house deep clean.", original: 700, price: 500, rating: r(), unit: "/ Marla" },
      { id: "deep-r2", name: "Room Deep Cleaning (11 Marla – 3 Kanal)", description: "Larger room deep clean.", original: 5500, price: 2900, rating: r() },
      { id: "deep-k2", name: "Kitchen Deep Cleaning (11 Marla – 3 Kanal)", description: "Larger kitchen deep clean.", original: 5000, price: 3500, rating: r() },
      { id: "deep-w2", name: "Washroom Deep Cleaning (10 Marla – 2 Kanal)", description: "Larger washroom deep clean.", original: 5000, price: 2900, rating: r() },
    ],
  },
  {
    id: "solar",
    name: "Solar Panel Cleaning",
    blurb: "Boost solar output with professional panel cleaning.", image: solarImg,
    items: [
      { id: "solar-1", name: "3KW – 6KW", description: "Small residential solar systems.", original: 310, price: 290, rating: r(), unit: "/ KW" },
      { id: "solar-2", name: "7KW – 18KW", description: "Mid-size residential / commercial.", original: 220, price: 205, rating: r(), unit: "/ KW" },
      { id: "solar-3", name: "20KW – 40KW", description: "Large commercial solar systems.", original: 195, price: 160, rating: r(), unit: "/ KW" },
    ],
  },
];
