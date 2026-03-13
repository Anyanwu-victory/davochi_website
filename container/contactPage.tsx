import React from 'react'
import ContactMember from '@/components/contact/ContactMember';
import Hero from '@/components/contact/Hero'
import { getContactMembers, getSiteSettings } from "@/sanity/lib/data";

export default async function contactPage() {

  const members = await getContactMembers();
 const settings = await getSiteSettings()
 
  return (
 <div className="min-h-screen">
      <div>
          <Hero whatsappNumber={settings.whatsappNumber} />
      </div>

      <div>
        <ContactMember members={members} />
      </div>
    </div>
  )
}
