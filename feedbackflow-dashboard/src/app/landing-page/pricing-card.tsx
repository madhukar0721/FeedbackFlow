"use client";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { PricingPlan } from "./pricing-section";

const PricingCard = ({
  title,
  price,
  description,
  features,
  url,
}: PricingPlan) => {
  const router = useRouter();

  const onClick = () => {
    router.push(url);
  };

  const isFree = price === 0;

  return (
    <div className="border flex flex-col justify-between bg-white/20 rounded-lg h-full p-6 hover:shadow-md text-left relative">
     
      <div>
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl">${price}</h1>
        </div>
        <h2 className="font-bold text-xl my-2">{title}</h2>
        <p>{description}</p>
        <div className="flex-grow border-t border-gray-400 opacity-25 my-3"></div>
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-row items-center text-gray-700 gap-2 my-2"
            >
              <div className="rounded-full flex items-center justify-center bg-gray-900 w-4 h-4 mr-2">
                <Check className="text-white" width={10} height={10} />
              </div>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {isFree ? (
          <button
            onClick={onClick}
            className="bg-gray-900 py-2 mt-3 rounded-lg text-white w-full"
          >
            Select Plan
          </button>
        ) : (
          <button
           
            className="bg-gray-800 py-2 mt-3 rounded-lg text-white/80 w-full disabled"
          >
          Pricing Coming Soon!!
          </button>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
