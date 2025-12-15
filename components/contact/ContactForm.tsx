

/**
 * ContactForm Component
 * 
 * Displays the "Get In Touch" contact form.
 * currently handles UI only; will need server actions or API integration later.
 */
export default function ContactForm() {
  return (
    <div>
      <div className="inline-block mb-4">
        <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
          📧 Contact Us
        </span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Get In <span className="text-primary-600">Touch</span>
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
