import React from 'react'
import Hero from '@/components/contact/Hero';
import ContactMember from '@/components/contact/ContactMember';

const contactPage = () => {
  return (
 <div className="min-h-screen">
      <div>
        <Hero />
      </div>

      <div>
        <ContactMember />
      </div>
    </div>
  )
}

export default contactPage;