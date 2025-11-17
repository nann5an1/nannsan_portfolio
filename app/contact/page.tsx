'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, FileText } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! Looking forward to working with you.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-pink-200 rounded-full mb-6 shadow-sm"
          >
            <MessageCircle className="text-pink-600" size={16} />
            <span className="text-gray-700">Get in Touch</span>
          </motion.div> */}
          
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Let's Grab Coffee
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
           Always open to discussing new projects, opportunities, or just having a good conversation.
          </p>
        </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:nannsuhtetsan@example.com"
            className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group border hover:border-indigo-600  border-gray-200"
          >
          <Mail className="h-5 w-5 text-indigo-600 mb-4" />
            <h3 className="mb-1 text-gray-900">Email</h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              nannsuhtetsan@gmail.com
            </p>
          </a>

          <a 
            href="https://drive.google.com/file/d/1u1S1kCn1QTt8Dsfda_uFHsY2sDtcflKB/view?usp=sharing"
            download
            className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group border border-gray-200t hover:border-indigo-600"
          >
            <FileText className="h-5 w-5 text-indigo-600 mb-4" />
              <h3 className="mb-1 text-gray-900">Resume</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                Download CV
              </p>
          </a>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <MapPin className="h-5 w-5 text-indigo-600 mb-4" />
            <h3 className="mb-1 text-gray-900">Location</h3>
            <p className="text-sm text-gray-600">
              Singapore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
