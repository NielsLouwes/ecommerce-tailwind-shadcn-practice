"use client";

import Header from "@/components/Header";
import ProductInfoCard from "@/components/ProductInfoCard";
import Image from "next/image";
import { useState } from "react";

const productImages = [
  { id: 1, image: "/image-product-1.jpg" },
  { id: 2, image: "/image-product-2.jpg" },
  { id: 3, image: "/image-product-3.jpg" },
  { id: 4, image: "/image-product-4.jpg" },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const selectImage = (id: number) => {
    const findImage = productImages.find((item) => id === item.id);
    setSelectedImage(findImage); 
  };

  return (
    <main>
      <Header />
      <div className="md:container md:mx-auto flex gap-24 px-8 2xl:px-16 mt-12">
        <div className="flex flex-col">
          <div className="rounded-md overflow-hidden pt-8 mb-8">
            {selectedImage ? (
              <Image
                src={selectedImage.image}
                width={500}
                height={500}
                alt="picture of sneakers"
              />
            ) : null}
          </div>
          <div className="flex flex-row gap-8 pb-8 cursor-pointer">
            {productImages.map(({ image, id }) => (
              <div
                key={id}
                onClick={() => selectImage(id)}
                className="rounded-md overflow-hidden"
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={`picture of sneakers ${id}`}
                />
              </div>
            ))}
          </div>
        </div>
        <ProductInfoCard
          company="Sneaker Company"
          productName="Fall Limited Sneakers"
          productDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price={125}
          discount="50%"
        />
      </div>
    </main>
  );
}
