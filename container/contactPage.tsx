import React from 'react'
import ContactMember from '@/components/contact/ContactMember';
import Hero from '@/components/contact/Hero'
import { getContactMembers } from "@/sanity/lib/data";

export default async function contactPage() {

  const members = await getContactMembers();

  return (
 <div className="min-h-screen">
      <div>
        <Hero />
      </div>

      <div>
        <ContactMember members={members} />
      </div>
    </div>
  )
}
