import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, TrendingUp, Users, BookOpen } from 'lucide-react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Community!</h3>
        <p className="text-green-100">
          You're now subscribed to FinTech engineering insights. Check your email for confirmation.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail size={24} className="text-blue-200" />
              <h3 className="text-2xl font-bold text-white">FinTech Engineering Weekly</h3>
            </div>
            
            <p className="text-blue-100 mb-6 text-lg">
              Get exclusive insights, technical deep-dives, and industry trends from Kenya's FinTech sector. 
              Join 15,000+ engineers building the future of finance.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-blue-100">
                <TrendingUp size={16} className="text-blue-300" />
                <span className="text-sm">Weekly Insights</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Users size={16} className="text-blue-300" />
                <span className="text-sm">Exclusive Content</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <BookOpen size={16} className="text-blue-300" />
                <span className="text-sm">Case Studies</span>
              </div>
            </div>

            <p className="text-xs text-blue-200">
              No spam, unsubscribe anytime. Used by engineers at Safaricom, Equity Bank, and KCB.
            </p>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading || !email}
                className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Subscribe to Newsletter</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-blue-200">
                Join <span className="font-semibold text-white">15,000+</span> FinTech professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;