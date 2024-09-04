import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Salmon', description: 'Fresh Atlantic Salmon', price: '$15.99/lb', image: '/images/salmon.jpg' },
  { name: 'Lobster', description: 'Maine Lobster', price: '$24.99/lb', image: '/images/lobster.jpg' },
  { name: 'Shrimp', description: 'Fresh Shrimp', price: '$9.99/lb', image: '/images/shrimp.jpg' },
  { name: 'Crab', description: 'Fresh Blue Crab', price: '$19.99/lb', image: '/images/crab.jpg' },
  { name: 'Tuna', description: 'Yellowfin Tuna', price: '$22.99/lb', image: '/images/tuna.jpg' },
];

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Welcome to OceanMart</h1>
        <p className="text-lg text-gray-600 mt-2">Fresh from the Ocean to Your Table</p>
      </section>
      <section className="featured-products">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
