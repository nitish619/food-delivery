import Image from "next/image";
import React from "react";
import tomato from "@/assets/images/products/tomato-mix.jpg";
import Fish from "@/assets/images/products/fish-sauce.jpg";
import Jollof from "@/assets/images/products/jollof.jpg";

const products = [
  {
    name: "Veggie Tomato Mix",
    description: "Fresh tomatoes blended with garden vegetables.",
    price: "$30",
    image: tomato,
  },
  {
    name: "Spicy Fish Sauce",
    description: "Delicious sauce made from premium fish and spices.",
    price: "$25",
    image: Fish,
  },
  {
    name: "Classic Jollof Rice",
    description: "Popular West African rice dish with vibrant flavor.",
    price: "$40",
    image: Jollof,
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="bg-[url('/your-hero-image.jpg')] bg-cover py-16 flex items-center justify-center">
        <div className="bg-white/80 p-8 rounded-xl shadow-lg max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-2">
            Explore Bella Onoje Products
          </h2>
          <p className="mb-4 text-gray-700">
            A selection of delicious meals available for order.
          </p>
        </div>
      </div>
      {/* Product Grid */}
      <main className="flex flex-col items-center py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center shadow-gray-200 hover:shadow-[#FA4A0C]/40"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="h-36 w-36 object-cover rounded-full mb-4 border-4 border-orange-200"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-2 text-center">
                {product.description}
              </p>
              <div className="font-semibold text-primary mb-4">
                {product.price}
              </div>
              <button className="bg-primary hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-md transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
