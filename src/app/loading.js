import Image from "next/image";
export default function Loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image src= "loader.svg" alt="spinner"  width={100} height={500} />
    </div>
  );
}
