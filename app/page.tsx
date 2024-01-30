import Header from "@/components/Header";
import ProductInfoCard from "@/components/ProductInfoCard";
import Image from "next/image";

export default function Home() {
  const productImages = [
    { id: 1, image: "/image-product-1.jpg" },
    { id: 2, image: "/image-product-2.jpg" },
    { id: 3, image: "/image-product-3.jpg" },
    { id: 4, image: "/image-product-4.jpg" },
  ];

  return (
    <main>
      <Header />
      <div className="md:container md:mx-auto flex border-solid border-2 border-purple-600 gap-24 px-8 2xl:px-16 mt-12">
        <div className="flex flex-col">
          <div className="rounded-md overflow-hidden pt-8">
            <Image
              src="/image-product-1.jpg"
              width={500}
              height={500}
              alt="picture of sneakers"
            />
          </div>
          <div className="flex flex-row gap-8 pb-8"> 
            {productImages.map(({ id, image }) => (
              <div key={id} className="rounded-md overflow-hidden">
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

// src="/images/logo-reclamefolder.png"
