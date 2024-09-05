type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 shadow-lg rounded-lg p-4 text-center">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-oceanBlue font-bold mt-2">{product.price}</p>
    </div>
  );
}
