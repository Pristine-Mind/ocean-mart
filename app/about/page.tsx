export default function About() {
  return (
    <main className="container mx-auto p-8 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-oceanBlue mb-6 text-center">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          OceanMart was founded with a passion for bringing the freshest seafood directly to our customers. Our commitment to quality
          and sustainability ensures that every product we offer is carefully sourced from trusted fishermen and suppliers. We believe 
          in connecting people with the ocean, offering the finest seafood available while supporting our local fishing communities.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-oceanBlue mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At OceanMart, our mission is to provide the best seafood experience possible. We prioritize freshness, sustainability, and 
          customer satisfaction. Whether you're a seasoned chef or a home cook, we deliver top-quality seafood right to your door, 
          ensuring a delightful culinary journey with every bite.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-oceanBlue mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Fresh, sustainably sourced seafood</li>
          <li>Direct relationships with local fishermen</li>
          <li>Wide variety of seafood options</li>
          <li>Convenient delivery options</li>
        </ul>
      </div>
    </main>
  );
}
