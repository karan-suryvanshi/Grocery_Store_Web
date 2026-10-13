//Import images from assets all this website images are imported from assets folder

import cartThumb1 from '../assets/imgi_1_01.png';
import cartThumb2 from '../assets/imgi_2_02.png';
import cartThumb3 from '../assets/imgi_3_03.png';
import cartThumb4 from '../assets/imgi_4_04.png';

import catBar1 from '../assets/imgi_5_th01.png';
import catBar2 from '../assets/imgi_6_th02.png';
import catBar3 from '../assets/imgi_7_th03.png';
import catBar4 from '../assets/imgi_8_th04.png';
import catBar5 from '../assets/imgi_9_th05.png';
import catBar6 from '../assets/imgi_10_th06.png';

import heroSlider1 from '../assets/imgi_12_01.jpeg';
import heroSlider2 from '../assets/imgi_13_02.jpeg';
import heroSlider3 from '../assets/imgi_11_03.jpeg';

import featured1 from '../assets/imgi_14_01.png';
import featured2 from '../assets/imgi_15_02.png';
import featured3 from '../assets/imgi_16_03.png';

import sideCat1 from '../assets/imgi_17_01.png';
import sideCat2 from '../assets/imgi_18_02.png';
import sideCat3 from '../assets/imgi_19_03.png';
import sideCat4 from '../assets/imgi_20_04.png';
import sideCat5 from '../assets/imgi_21_05.png';
import sideCat6 from '../assets/imgi_22_06.png';
import sideCat7 from '../assets/imgi_23_07.png';
import sideCat8 from '../assets/imgi_24_08.png';

import prod1 from '../assets/imgi_25_01.png';
import prod2 from '../assets/imgi_26_02.png';
import prod3 from '../assets/imgi_27_03.png';
import prod4 from '../assets/imgi_28_04.png';
import prod5 from '../assets/imgi_29_05.png';
import prod6 from '../assets/imgi_30_06.png';
import prod7 from '../assets/imgi_31_07.png';
import prod8 from '../assets/imgi_32_08.png';


import breakfastBanner from '../assets/imgi_33_banner.jpeg';
import special1 from '../assets/imgi_34_09.png';
import special2 from '../assets/imgi_35_10.png';
import special3 from '../assets/imgi_36_11.png';
import special4 from '../assets/imgi_37_12.png';

import recipe1 from '../assets/imgi_38_01.jpeg';
import recipe2 from '../assets/imgi_39_02.jpeg';
import recipe3 from '../assets/imgi_40_03.jpeg';
import bookCover from '../assets/imgi_41_book-cover.jpeg';

import appBanner from '../assets/imgi_42_banner01.png';
import feedbackBanner from '../assets/imgi_43_banner02.png';

//Category Bar
export const CATEGORY_BAR_ITEMS = [
    {id: 'sale', name: 'weekly sale', isSale: true},
    {id: 'vegetables', name: 'Vegetables', image: catBar1},
    {id: 'easter', name: 'Easter is coming', image: catBar2},
    {id: 'poultry', name: 'poultry meat', image: catBar3},
    {id: 'fruits', name: 'fresh fruits', image: catBar4},
    {id: 'st-patricks', name: "St. Patrick's day", image: catBar5},
    {id: 'exotic-fruits', name: 'Exotic fruits', image: catBar6},
];

//Hero slides img

export const HERO_SLIDES = [
    {
        id: 1,
        tag: '🔥 Free shipping - orders over $100',
        title: 'Healthy Food Available to Everyone',
        ctaText: 'shop now',
        bgColor: '#6dafca',
        image: heroSlider1,
    },
    {
        id: 2,
        tag: '🥚 Organic Product to your table',
        title: 'Organic eggs from home-grown chicken',
        ctaText: 'shop now',
        bgColor: '#5a7978',
        image: heroSlider2, 
    },
    {
         id: 3,
        tag: '🥝 Only natural ingredients',
        title: 'Enjoy refreshing summer drink',
        ctaText: 'shop now',
        bgColor: '#f99c03',
        image: heroSlider3,
    },
];

//featured Categories

export const FEATURED_CATEGORIES = [
    {
        id: 'f1',
        count: '100 products',
        title: 'Only fresh fish to your table',
        bgClass: 'bg-primary-subtle',
        image: featured1,
    },
    {
        id: 'f2',
        count: '50 products',
        title: 'Products for Easter table',
        bgClass: 'bg-success-subtle',
        image: featured2,
    },
    {
        id: 'f3',
        count: '10 products',
        title: 'Berries from the garden',
        bgClass: 'bg-info-subtle',
        image: featured3,
    },
];

//sidebar Catergories

export const SIDEBAR_CATEGORIES = [
    {id: 'c1', name: 'Backery & bread', count: 200, image: sideCat1},
    {id: 'c2', name: 'Vegetables', count: 100, image: sideCat2},
    {id: 'c3', name: 'Fresh fruits', count: 300, image: sideCat3},
    {id: 'c4', name: 'Meet Italian dinner', count: 209, image: sideCat4},
    {id: 'c5', name: 'Beverages', count: 150, image: sideCat5},
    {id: 'c6', name: 'Meat products', count: 50, image: sideCat6},
    {id: 'c7', name: 'Sauces and ketchup', count: 20, image: sideCat7},
    {id: 'c8', name: 'Dairy and eggs', count: 14, image: sideCat8},
];

//popular products
export const POPULAR_PRODUCTS = [
    {
    id: 'p1',
    title: 'Muesli Fitness Energy, gluten free',
    price: 3.15,
    discountPercentage: 10,
    weightOrUnit: '300g',
    image: prod1,
    category: 'Bakery',
  },
  {
    id: 'p2',
    title: 'Fresh orange Klementina, Spain',
    price: 5.12,
    originalPrice: 4.05,
    discountPercentage: 40,
    weightOrUnit: '1kg',
    image: prod2,
    category: 'Fruits',
  },
  {
    id: 'p3',
    title: 'Pepsi soda classic, can',
    price: 10.80,
    discountPercentage: 5,
    weightOrUnit: '650ml',
    image: prod3,
    category: 'Beverages',
  },
  {
    id: 'p4',
    title: 'Mozzarella mini cheese Granaloro',
    price: 5.99,
    discountPercentage: 3,
    weightOrUnit: '200g',
    image: prod4,
    category: 'Dairy',
  },
  {
    id: 'p5',
    title: 'Coconut, Indonesia',
    price: 12.14,
    discountPercentage: 15,
    weightOrUnit: '1 coconut',
    image: prod5,
    category: 'Fruits',
  },
  {
    id: 'p6',
    title: 'Pesto sauce Barilla with parmesan and basil',
    price: 30.90,
    discountPercentage: 9,
    weightOrUnit: '240g',
    image: prod6,
    category: 'Sauces',
  },
  {
    id: 'p7',
    title: 'Fresh mango, Spain',
    price: 8.09,
    discountPercentage: 5,
    weightOrUnit: '1 mango',
    image: prod7,
    category: 'Fruits',
  },
  {
    id: 'p8',
    title: 'Fresh green asparagus, bunch',
    price: 20.40,
    discountPercentage: 10,
    weightOrUnit: '500g',
    image: prod8,
    category: 'Vegetables',
  },
];

//special offer products

export const SPECIAL_OFFERS = {
    banner: {
        title: 'Make breakfast healthy and easy',
        image: breakfastBanner,
    },
    products: [
        {
            id: 'sp1',
            title: 'Pure virgin olive oil Basso',
            price: 18.60,
            weightOrUnit: '1000ml',
            image: special1,
            category: 'pantry',
        },
        {
      id: 'sp2',
      title: 'Fresh pork butt steaks with rosemary',
      price: 9.15,
      weightOrUnit: '500g',
      image: special2,
      category: 'Meat',
    },
    {
      id: 'sp3',
      title: 'Fresh red grapefruit',
      price: 3.40,
      weightOrUnit: '1kg',
      image: special3,
      category: 'Fruits',
    },
    {
      id: 'sp4',
      title: 'Soft creme cheese with greens Exquisa',
      price: 2.59,
      weightOrUnit: '150g',
      image: special4,
      category: 'Dairy',
    },
    ],
};

// recipes & cookbook

export const RECIPES_DATA = {
    recipes: [
    {
      id: 'r1',
      title: 'Garden salad with a mix of lettuce, cucumber and tomato',
      image: recipe1,
      time: '30 min',
      difficulty: 'Easy',
      servings: '4 por',
    },
    {
      id: 'r2',
      title: 'Raspberry fresh lemonade with lemon, strawberry syrup and mint',
      image: recipe2,
      time: '50 min',
      difficulty: 'Hard',
      servings: '8 por',
    },
    {
      id: 'r3',
      title: 'Penne pasta with spinach and zucchini in a creamy sauce',
      image: recipe3,
      time: '25 min',
      difficulty: 'Easy',
      servings: '2 por',
    },
  ],
  cookbook: {
    title: 'The Best in Gastronomy',
    author: 'Dana Chambers',
    price: 12.40,
    description: 'An exquisite cookbook that takes readers on a culinary journey around the world. With stunning photography and detailed instructions.',
    image: bookCover,
  },
};

// lifestyle categories

export const LIFESTYLE_DATA = [
    {
    id: 'l1',
    name: 'Gluten-Free',
    desc: "Foods that don't contain gluten",
    iconClass: 'bi bi-shield-check',
    bgClass: 'bg-warning-subtle text-warning-emphasis',
  },
  {
    id: 'l2',
    name: 'Vegan',
    desc: 'Vegetable based goodness',
    iconClass: 'bi bi-flower1',
    bgClass: 'bg-success-subtle text-success-emphasis',
  },
  {
    id: 'l3',
    name: 'Plant based',
    desc: 'Based on herbal ingredients',
    iconClass: 'bi bi-tree',
    bgClass: 'bg-info-subtle text-info-emphasis',
  },
  {
    id: 'l4',
    name: 'Keto',
    desc: 'Good fats served in food',
    iconClass: 'bi bi-fire',
    bgClass: 'bg-danger-subtle text-danger-emphasis',
  },
];

//app & feedback banner

export const CTA_BANNERS = {
    app: {
        title: 'Make online shopping easier with our cartzilla app',
        image: appBanner,
    },
    feedback: {
        title: "WE'd love to hear what you think!",
        image: feedbackBanner,
    },
};

//initial cart item 

export const INITIAL_ITEMS = [
    {
    product: {
      id: 'p2',
      title: 'Fresh orange Klementina, Spain',
      price: 3.12,
      weightOrUnit: '1kg',
      image: cartThumb1,
      discountBadge: '-$2.79',
    },
    quantity: 3,
  },
  {
    product: {
      id: 'p6',
      title: 'Pesto sauce Barilla with basil, Italy',
      price: 3.95,
      weightOrUnit: '200g',
      image: cartThumb2,
    },
    quantity: 1,
  },
  {
    product: {
      id: 'cart-3',
      title: 'Steak salmon fillet with rosemary',
      price: 27.00,
      weightOrUnit: '1kg',
      image: cartThumb3,
    },
    quantity: 2,
  },
  {
    product: {
      id: 'p3',
      title: 'Sprite soda lemon lime, can',
      price: 0.80,
      weightOrUnit: '330ml',
      image: cartThumb4,
    },
    quantity: 2,
  },
];