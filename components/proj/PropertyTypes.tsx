// components/PropertyTypes.tsx
'use client'

import Image from "next/image";
import type { PropertyType } from "@/lib/proj";

type PropertyTypesProps = {
  propertyTypes: PropertyType[];
};

export default function PropertyTypes({ propertyTypes }: PropertyTypesProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 xl:px-2 pb-12">
      <h2 className="font-bold mb-6 text-[20px] font-inter">Property Types</h2>

      <div className="flex gap-4 overflow-x-auo pb-2">
        {propertyTypes.map((type, i) => (
          <div key={i}>
            <div
              className="min-w-45 max-w-49 rounded-xl 
                        overflow-hidden shrink-0 
                        transition-shadow cursor-pointer"
            >
              <div className="relative h-75 rounded-[10px] border">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="py-5 min-w-45 max-w-49">
              <p className="text-[20px] font-medium font-inter text-gray-900">
                {type.title}
              </p>
              <p className="text-[12px] text-[#696969] mt-0.5 leading-snug font-medium font-inter">
                {type.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
