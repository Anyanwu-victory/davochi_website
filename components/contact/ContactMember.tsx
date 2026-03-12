import React from "react";
import Image from "next/image";

interface ContactMembers {
  _id: string
  name: string
  role: string
  email: string
  image: string | null
}

interface MemberProps {
  members: ContactMembers[];
}


const ContactMember =  ({ members }: MemberProps)  => {
  return (
    <section>
      {/* Content */}
      <div className="mx-auto px-6 sm:px-8 lg:px-30 xl:px-48  py-6">
        <div className="mt-5 flex flex-col lg:flex-row gap-5 justify-between">
          {/* Label */}
          <div>
            <p className="text-[#FBBD00] mb-4 text-sm md:text-[20px] font-semibold tracking-widest font-inter">
              Contant us
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-mono font-normal capitalize leading-tight mb-3 lg:mb-10">
              Speak to an expert from the team.
            </h2>

            {/* paragraph */}
            <p className="font-inter text-[16px] text-[#585858] leading-relaxed mb-6">
              When it comes to finding your ideal home, engaging with Cosgrove&apos;s
              expert advisors is your key to making the perfect choice. Our
              seasoned professionals understand that a home is more than just a
              space; it&apos;s a reflection of your lifestyle and aspirations. With a
              deep knowledge of our diverse range of properties and an attentive
              ear to your preferences, they are dedicated to guiding you towards
              a residence that resonates with you on every level. Let us
              navigate the journey together, ensuring that your new home aligns
              seamlessly with your dreams.
            </p>
          </div>
        </div>

        <div>
          <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-1 md:gap-x-12 gap-y-12 mt-7 mb-10">
            {members.map((member) => (
              <div key={member._id} className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 bg-yellow-500">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm md:text-[22px] text-black font-mano">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-[16px] text-[#585858] leading-snug font-inter">
                    {member.role}
                  </p>
                  {/* <p className="text-xs md:text-[16px] text-[#FFBA32] break-all">
                    {member.email}
                  </p> */}
                  <a href={`mailto:${member.email}`}  className="text-xs md:text-[16px] text-[#FFBA32] break-all">
 {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMember;
