import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProductInfoCardProps = {
  company: string;
  productName: string;
  productDescription: string;
  price: number;
  discount: string;
};

export default function ProductInfoCard({
  company,
  productName,
  productDescription,
  price,
  discount,
}: ProductInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-orange-500 font-bold">
          {company}
        </CardDescription>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{productDescription}</CardDescription>
      </CardHeader>
      <div className="flex">
        <CardContent>
          <p>{price}</p>
        </CardContent>
        <CardFooter>
          <p>{discount}</p>
        </CardFooter>
      </div>
    </Card>
  );
}
