import Header from "@/components/Header";
import ProductInfoCard from "@/components/ProductInfoCard";

export default function Home() {

  return (
    <main>
      <Header /> 
      <ProductInfoCard company="Sneaker Company" productName="Fall Limited Sneakers" productDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer." price={125} discount="50%"/>
    </main>
  );
}
