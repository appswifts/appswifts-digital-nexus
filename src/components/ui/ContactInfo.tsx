import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="bg-primary rounded-full p-4 text-white">
          <Phone size={24} />
        </div>
        <div>
          <h4 className="mb-2">Call Us</h4>
          <p className="text-gray-300 font-actief">+250 788 123 456</p>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <div className="bg-primary rounded-full p-4 text-white">
          <Mail size={24} />
        </div>
        <div>
          <h4 className="mb-2">Email Us</h4>
          <p className="text-gray-300 font-actief">info@appswifts.rw</p>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <div className="bg-primary rounded-full p-4 text-white">
          <MapPin size={24} />
        </div>
        <div>
          <h4 className="mb-2">Visit Us</h4>
          <p className="text-gray-300 font-actief">Kigali Heights, 3rd Floor<br />Kigali, Rwanda</p>
        </div>
      </div>
    </div>
  );
};
