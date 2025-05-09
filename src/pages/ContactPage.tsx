import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container-custom">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? Feel free to reach out.
            I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-navy text-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-heading font-medium mb-1">Email</h3>
                    <a href="mailto:contact@example.com" className="text-white/80 hover:text-white transition-colors duration-300">
                      ivymaundu03@gmail.com
                    </a>
                  </div>
                </div>
                
                                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-heading font-medium mb-1">Location</h3>
                    <p className="text-white/80">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-heading font-medium mb-4">Response Time</h3>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/90 text-sm">
                    within 8hrs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Send Me a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-success/10 text-success p-6 rounded-lg flex items-center">
                  <CheckCircle size={24} className="mr-3" />
                  <div>
                    <h3 className="font-heading font-medium mb-1">Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'border-error focus:border-error focus:ring-error/20' : ''}`}
                        placeholder="Your name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-error text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'border-error focus:border-error focus:ring-error/20' : ''}`}
                        placeholder="your.email@example.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-error text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'border-error focus:border-error focus:ring-error/20' : ''}`}
                      placeholder="What is this regarding?"
                      aria-invalid={errors.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-error text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`form-input ${errors.message ? 'border-error focus:border-error focus:ring-error/20' : ''}`}
                      placeholder="Please provide details about your project or inquiry..."
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="text-error text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;