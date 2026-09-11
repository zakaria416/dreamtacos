export type MenuCategory = 'Beef' | 'Chicken' | 'Seafood' | 'Veggie' | 'Sides';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tag?: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    name: 'Carne Asada',
    description: 'Grilled skirt steak, cilantro, onion, fresh lime',
    price: 4.50,
    category: 'Beef',
    tag: 'Bestseller',
    image: 'https://images.pexels.com/photos/7388095/pexels-photo-7388095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Al Pastor',
    description: 'Marinated pork, pineapple, cilantro, onion',
    price: 4.25,
    category: 'Beef',
    tag: 'Spicy',
    image: 'https://images.pexels.com/photos/25391591/pexels-photo-25391591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Barbacoa',
    description: 'Slow-braised beef, onion, cilantro, consommé',
    price: 4.75,
    category: 'Beef',
    image: 'https://images.pexels.com/photos/36498696/pexels-photo-36498696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Pollo Verde',
    description: 'Grilled chicken, green salsa, avocado, cilantro',
    price: 4.00,
    category: 'Chicken',
    tag: 'Popular',
    image: 'https://images.pexels.com/photos/36498704/pexels-photo-36498704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Chipotle Chicken',
    description: 'Smoky chipotle chicken, pickled red onion, lime crema',
    price: 4.25,
    category: 'Chicken',
    image: 'https://images.pexels.com/photos/36498698/pexels-photo-36498698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Baja Shrimp',
    description: 'Crispy shrimp, slaw, chipotle aioli, lime',
    price: 5.50,
    category: 'Seafood',
    tag: 'Chef\'s Pick',
    image: 'https://images.pexels.com/photos/34289262/pexels-photo-34289262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Fish Taco',
    description: 'Beer-battered cod, cabbage, pico de gallo, crema',
    price: 5.25,
    category: 'Seafood',
    image: 'https://images.pexels.com/photos/17429147/pexels-photo-17429147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Cauliflower Al Pastor',
    description: 'Roasted cauliflower, adobo, pineapple, cilantro',
    price: 3.75,
    category: 'Veggie',
    tag: 'Vegan',
    image: 'https://images.pexels.com/photos/27590338/pexels-photo-27590338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Black Bean & Avocado',
    description: 'Black beans, avocado, pico de gallo, lime',
    price: 3.50,
    category: 'Veggie',
    image: 'https://images.pexels.com/photos/9258712/pexels-photo-9258712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Street Corn',
    description: 'Grilled corn, cotija cheese, lime, chili powder',
    price: 3.00,
    category: 'Sides',
    image: 'https://images.pexels.com/photos/28959271/pexels-photo-28959271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Chips & Salsa Trio',
    description: 'Three house salsas: verde, roja, habanero',
    price: 2.50,
    category: 'Sides',
    image: 'https://images.pexels.com/photos/24769833/pexels-photo-24769833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Loaded Nachos',
    description: 'Chips, queso, beans, guac, pico, jalapeño',
    price: 6.50,
    category: 'Sides',
    tag: 'Shareable',
    image: 'https://images.pexels.com/photos/28959272/pexels-photo-28959272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const categories: ('All' | MenuCategory)[] = [
  'All', 'Beef', 'Chicken', 'Seafood', 'Veggie', 'Sides',
];
