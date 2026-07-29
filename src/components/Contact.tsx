import { useState } from 'react';
import { Github, Send, Linkedin, MessageCircle, CheckCircle2, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Use import.meta.env for Vite environment variables
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        throw new Error('Telegram credentials are not configured. Please contact me directly via social links.');
      }

      const currentDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Phnom_Penh', 
        dateStyle: 'medium', 
        timeStyle: 'short'
      });

      const cleanPhone = formData.phone.replace(/[^0-9+]/g, ''); // keep only numbers and +
      const telegramLink = cleanPhone ? `[Chat on Telegram](https://t.me/${cleanPhone.startsWith('0') ? '+855' + cleanPhone.slice(1) : cleanPhone})` : 'No phone provided';

      const text = `🚀 *New Job Opportunity!*\nSomeone reached out from your portfolio.\n\n👤 *Name:* ${formData.name}\n📧 *Email:* [${formData.email}](mailto:${formData.email})\n📱 *Phone:* ${formData.phone}\n💬 *Telegram:* ${telegramLink}\n🕒 *Date:* ${currentDate}\n\n📝 *Message:*\n_${formData.message}_`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setShowModal(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/oudomweb?tab=repositories',
      color: 'hover:bg-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/oudom-ngoun-975585300/',
      color: 'hover:bg-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      href: 'https://t.me/oudom_dev',
      color: 'hover:bg-cyan-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column - Intro & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                I'm actively looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-gray-800/80 rounded-xl border border-gray-700 transition-all duration-300 ${social.color} hover:text-white group hover:border-transparent hover:-translate-y-1`}
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                      <span className="font-semibold text-gray-300 group-hover:text-white">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20 shadow-inner">
               <p className="text-gray-300 flex items-center gap-3">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                 </span>
                 <span className="font-semibold text-white">Available for full-time roles & freelance projects</span>
               </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors focus:ring-1 focus:ring-cyan-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors focus:ring-1 focus:ring-cyan-500"
                  placeholder="hr@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number (Telegram)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors focus:ring-1 focus:ring-cyan-500"
                  placeholder="012 345 678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none focus:ring-1 focus:ring-cyan-500"
                  placeholder="Tell me about your project or role..."
                ></textarea>
              </div>

              {error && (
                <div className="text-red-400 text-sm font-medium p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-sm w-full relative shadow-2xl transform transition-transform duration-300 scale-100">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Sent! 🎉</h3>
              <p className="text-gray-300 text-lg mb-2 leading-relaxed">
                Thank you so much for reaching out to me! 🙏
              </p>
              <p className="text-gray-400 leading-relaxed">
                I have received your message and will get back to you as soon as possible. Have a great day! 😊❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
