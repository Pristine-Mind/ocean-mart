export default function Contact() {
    return (
      <main>
        <h1>Contact Us</h1>
        <p>Address: 123 Ocean Street, Seaville</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@oceanmart.com</p>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    );
  }
  