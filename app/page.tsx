import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  { name: 'Salmon', description: 'Fresh Atlantic Salmon', price: '$15.99/lb', image: '/images/octopus.png' },
  { name: 'Lobster', description: 'Maine Lobster', price: '$24.99/lb', image: '/images/lobster.jpg' },
  { name: 'Shrimp', description: 'Fresh Shrimp', price: '$9.99/lb', image: '/images/shrimp.jpg' },
  { name: 'Crab', description: 'Fresh Blue Crab', price: '$19.99/lb', image: '/images/crab.jpg' },
  { name: 'Tuna', description: 'Yellowfin Tuna', price: '$22.99/lb', image: '/images/tuna.jpg' },
];

export default function Home() {
  return (
    <>
      <main className="container mx-auto p-8 space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-oceanBlue text-center mb-4">Welcome to OceanMart</h1>
          <p className="text-center text-gray-600">Fresh from the Ocean to Your Table</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-oceanBlue mb-4">About Us</h2>
          <p className="text-gray-700">
            At OceanMart, we are committed to providing the freshest seafood straight from the ocean to your table. Our team works with
            local fishermen to bring you the best catches of the day, every day.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-oceanBlue mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fresh, sustainably sourced seafood</li>
            <li>Direct partnerships with local fishermen</li>
            <li>Wide variety of seafood options</li>
            <li>Convenient online ordering and delivery options</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-oceanBlue mb-6">Our Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
