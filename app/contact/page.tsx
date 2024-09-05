export default function Contact() {
  return (
    <main className="container mx-auto p-8 space-y-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-oceanBlue mb-6 text-center">Contact Us</h1>
        <div className="text-center text-gray-700">
          <p className="mb-2">
            <strong>Address:</strong> Bhagawati Marg, Kathmandu
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +977 - 9881365495
          </p>
          <p className="mb-6">
            <strong>Email:</strong> <a href="mailto:info@oceanmart.com" className="text-oceanBlue hover:underline">info@oceanmart.com</a>
          </p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-oceanBlue mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input 
              type="text" 
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-oceanBlue focus:outline-none"
              placeholder="Enter your name" 
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input 
              type="email" 
              name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-oceanBlue focus:outline-none"
              placeholder="Enter your email" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message:</label>
            <textarea 
              name="message" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-oceanBlue focus:outline-none"
              placeholder="Write your message" 
              rows={5}
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="bg-oceanBlue text-white font-semibold px-6 py-2 rounded-md hover:bg-oceanBlue-dark transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
