import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Salmon', description: 'Fresh Atlantic Salmon', price: '$15.99/lb', image: '/images/octopus.png' },
  { name: 'Lobster', description: 'Maine Lobster', price: '$24.99/lb', image: '/images/lobster.jpg' },
  { name: 'Shrimp', description: 'Fresh Shrimp', price: '$9.99/lb', image: '/images/shrimp.jpg' },
  { name: 'Crab', description: 'Fresh Blue Crab', price: '$19.99/lb', image: '/images/crab.jpg' },
  { name: 'Tuna', description: 'Yellowfin Tuna', price: '$22.99/lb', image: '/images/tuna.jpg' },
];

export default function Home() {
  return (
    <main className="container mx-auto p-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center bg-blue-50 p-8 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-blue-800">Welcome to OceanMart</h1>
        <p className="text-lg text-gray-600 mt-4">Fresh from the Ocean to Your Table</p>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
