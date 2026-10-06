import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have questions about your prescription or need help with an order? Our pharmacy team is here to help.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Pharmacy Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Burnpur Rd, Asansol Court Area,<br />
                    Asansol, West Bengal 713304
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                  <p className="text-muted-foreground">079088 50240</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Open Daily: 8:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">support@dailymed.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
          <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50 text-gray-700">
                <option>General Inquiry</option>
                <option>Prescription Refill</option>
                <option>Order Status</option>
                <option>Consultation</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50/50 resize-none" placeholder="How can we help you today?"></textarea>
            </div>
            
            <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 mt-2">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-border/50">
        <iframe 
          src="https://maps.google.com/maps?q=Burnpur+Rd,+Asansol+Court+Area,+Asansol,+West+Bengal+713304&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Pharmacy Location Map"
        ></iframe>
      </div>
    </div>
  );
}
