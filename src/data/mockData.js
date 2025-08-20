// Mock data for electronic appliances reviews

export const categories = [
  { id: 'mobile', name: 'Mobile Phones', icon: '📱' },
  { id: 'tv', name: 'Smart TVs', icon: '📺' },
  { id: 'laptop', name: 'Laptops', icon: '💻' },
  { id: 'ac', name: 'Air Conditioners', icon: '❄️' },
  { id: 'fridge', name: 'Refrigerators', icon: '🧊' },
  { id: 'headphones', name: 'Headphones', icon: '🎧' }
];

export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'mobile',
    brand: 'Apple',
    price: 999,
    rating: 4.8,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    summary: 'Latest iPhone with titanium design and A17 Pro chip',
    pros: ['Excellent camera', 'Premium build', 'Fast performance'],
    cons: ['Expensive', 'No charging adapter'],
    trending: true,
    featured: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'mobile',
    brand: 'Samsung',
    price: 1199,
    rating: 4.7,
    reviews: 1892,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
    summary: 'Flagship Android phone with S Pen and impressive cameras',
    pros: ['Great display', 'S Pen included', 'Versatile cameras'],
    cons: ['High price', 'Large size'],
    trending: true
  },
  {
    id: 3,
    name: 'LG OLED C3 55"',
    category: 'tv',
    brand: 'LG',
    price: 1299,
    rating: 4.9,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
    summary: 'Premium OLED TV with perfect blacks and gaming features',
    pros: ['Perfect blacks', 'Gaming ready', 'Dolby Vision'],
    cons: ['Expensive', 'Potential burn-in'],
    featured: true
  },
  {
    id: 4,
    name: 'MacBook Pro M3 16"',
    category: 'laptop',
    brand: 'Apple',
    price: 2499,
    rating: 4.8,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    summary: 'Powerful laptop for professionals with M3 chip',
    pros: ['Excellent performance', 'Great display', 'Long battery'],
    cons: ['Very expensive', 'Limited ports'],
    trending: true
  },
  {
    id: 5,
    name: 'Daikin 1.5 Ton Inverter AC',
    category: 'ac',
    brand: 'Daikin',
    price: 599,
    rating: 4.5,
    reviews: 743,
    image: 'https://images.unsplash.com/photo-1631694956214-2bd0b2432b99?w=400',
    summary: 'Energy efficient inverter AC with smart features',
    pros: ['Energy efficient', 'Quiet operation', 'Smart controls'],
    cons: ['Installation cost', 'Higher upfront price']
  },
  {
    id: 6,
    name: 'Samsung 594L French Door Fridge',
    category: 'fridge',
    brand: 'Samsung',
    price: 899,
    rating: 4.6,
    reviews: 654,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400',
    summary: 'Spacious French door refrigerator with smart features',
    pros: ['Large capacity', 'Smart features', 'Good build quality'],
    cons: ['Takes up space', 'Expensive']
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "iPhone 15 vs Samsung Galaxy S24: The Ultimate Camera Comparison",
    slug: "iphone-15-vs-samsung-galaxy-s24-camera-comparison",
    excerpt: "We compare the camera capabilities of two flagship smartphones to help you decide which one captures life better.",
    content: "In this comprehensive comparison, we put the iPhone 15 Pro and Samsung Galaxy S24 Ultra through rigorous camera tests...",
    author: "Tech Review Team",
    publishDate: "2024-01-15",
    category: "mobile",
    tags: ["iPhone", "Samsung", "Camera", "Comparison"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    readTime: 8,
    trending: true
  },
  {
    id: 2,
    title: "Best Budget Laptops Under $800 in 2024",
    slug: "best-budget-laptops-under-800-2024",
    excerpt: "Discover the top budget-friendly laptops that offer excellent performance without breaking the bank.",
    content: "Finding a good laptop on a budget can be challenging. Here are our top picks for 2024...",
    author: "Budget Tech Expert",
    publishDate: "2024-01-10",
    category: "laptop",
    tags: ["Budget", "Laptops", "2024", "Affordable"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    readTime: 6
  },
  {
    id: 3,
    title: "OLED vs QLED: Which TV Technology Reigns Supreme?",
    slug: "oled-vs-qled-tv-technology-comparison",
    excerpt: "An in-depth analysis of OLED and QLED technologies to help you choose the perfect TV for your home.",
    content: "The battle between OLED and QLED technologies continues to heat up. Let's break down the differences...",
    author: "Display Tech Analyst",
    publishDate: "2024-01-08",
    category: "tv",
    tags: ["OLED", "QLED", "TV", "Display Technology"],
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800",
    readTime: 10
  }
];

export const monthlyTopPicks = [
  {
    month: "January 2024",
    category: "mobile",
    products: products.filter(p => p.category === 'mobile').slice(0, 5)
  },
  {
    month: "January 2024", 
    category: "tv",
    products: products.filter(p => p.category === 'tv').slice(0, 5)
  }
];