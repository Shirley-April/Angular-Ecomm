export interface Product {
    id: number;
    name: string,
    price: string;
    description: string,
    reviews: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Laptop',
        price: '$999.99',
        description: 'Powerful laptop with high-performance features.',
        reviews: 4.5,
    },
    {
        id: 2,
        name: 'Smartphone',
        price: '$599.99',
        description: 'The latest smartphone with advanced camera technology.',
        reviews: 3.2,
    },
    {
        id: 3,
        name: 'Headphones',
        price: '$129.99',
        description: 'Wireless headphones with noise-canceling capabilities.',
        reviews: 2.8,
    },
    {
        id: 4,
        name: 'Smartwatch',
        price: '$199.99',
        description: 'Fitness tracking smartwatch with a stylish design.',
        reviews: 3.6,
    },
    {
        id: 5,
        name: 'Camera',
        price: '$799.99',
        description: 'Professional-grade camera for photography enthusiasts.',
        reviews: 5.0,
    },
    {
        id: 6,
        name: 'Gaming Console',
        price: '$449.99',
        description: 'Next-gen gaming console with immersive gaming experiences.',
        reviews: 4.4,
    },
    {
        id: 7,
        name: 'Tablet',
        price: '$299.99',
        description: 'Compact tablet with a high-resolution display for multimedia.',
        reviews: 2.2,
    },
    {
        id: 8,
        name: 'Wireless Speaker',
        price: '$79.99',
        description: 'Portable wireless speaker with impressive audio quality.',
        reviews: 1.8,
    },
    {
        id: 9,
        name: 'Fitness Tracker',
        price: '$49.99',
        description: 'Slim fitness tracker with heart rate monitoring and step counting.',
        reviews: 1.5,
    },
    {
        id: 10,
        name: 'External Hard Drive',
        price: '$119.99',
        description: 'High-capacity external hard drive for data storage needs.',
        reviews: 4.0,
    },
];