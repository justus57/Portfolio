import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Calendar, Clock, User, Mail, Phone, MessageSquare,
  Video, MapPin, Globe, ExternalLink, CheckCircle
} from 'lucide-react';

const ScheduleCallModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    callType: 'teams',
    preferredDate: '',
    preferredTime: '',
    timezone: 'EAT',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const callTypes = [
    { id: 'teams', label: 'Microsoft Teams', icon: Video, description: 'Teams video meeting' },
    { id: 'phone', label: 'Phone Call', icon: Phone, description: 'Direct call to +254748106202' },
    { id: 'meeting', label: 'In-Person', icon: MapPin, description: 'Meet in Nairobi' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const timezones = [
    { value: 'EAT', label: 'East Africa Time (UTC+3)' },
    { value: 'UTC', label: 'UTC (UTC+0)' },
    { value: 'EST', label: 'Eastern Time (UTC-5)' },
    { value: 'PST', label: 'Pacific Time (UTC-8)' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
      callType: 'video',
      preferredDate: '',
      preferredTime: '',
      timezone: 'EAT',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
          onClick={(e) => e.stopPropagation()}>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Schedule a Call</h2>
                    <p className="text-slate-400">
                      Let's discuss your FinTech project and how I can help bring it to life.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors">
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+254 748 106 202 (your direct line)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Acme Financial"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Project Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select project type...</option>
                      <option value="payment-gateway">Payment Gateway Development</option>
                      <option value="mobile-banking">Mobile Banking Application</option>
                      <option value="core-banking">Core Banking System</option>
                      <option value="digital-lending">Digital Lending Platform</option>
                      <option value="compliance">Regulatory Compliance System</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Call Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Call Preferences</h3>
                  
                  {/* Call Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Preferred Call Type
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {callTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <label
                            key={type.id}
                            className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                              formData.callType === type.id
                                ? 'border-blue-500 bg-blue-500/10'
                                : 'border-slate-600 hover:border-slate-500'
                            }`}>
                            <input
                              type="radio"
                              name="callType"
                              value={type.id}
                              checked={formData.callType === type.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <Icon size={20} className="text-blue-400 mr-3" />
                            <div>
                              <div className="text-white font-medium">{type.label}</div>
                              <div className="text-sm text-slate-400">{type.description}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select time...</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Timezone
                      </label>
                      <select
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        {timezones.map((tz) => (
                          <option key={tz.value} value={tz.value}>{tz.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me more about your project, timeline, budget, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Scheduling...</span>
                      </>
                    ) : (
                      <>
                        <Calendar size={18} />
                        <span>Schedule Call</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} color="white" />
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Call Scheduled Successfully!</h2>
              <p className="text-slate-300 mb-6">
                Thank you for scheduling a call with me. I'll send you a calendar invitation within the next hour with all the meeting details.
              </p>
              
              <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-white mb-2">Next Steps:</h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• You'll receive a Teams meeting invitation via email</li>
                  <li>• I'll call you directly at the scheduled time</li>
                  <li>• Contact me at +254 748 106 202 if you need to reschedule</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href="mailto:justuskasyoki57@gmail.com"
                  className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href="tel:+254748106202"
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call Now
                </a>
                <button
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleCallModal;