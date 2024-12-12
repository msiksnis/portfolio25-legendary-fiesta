import Image from "next/image";

export default function Avatar() {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 -mt-[6.5px] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border bg-primary p-3.5 sm:flex">
      <div className="relative">
        <div className="absolute -top-5 left-1/2 h-3 w-6 -translate-x-1/2 bg-primary"></div>
        <div className="absolute -left-5 top-1/2 h-6 w-3 -translate-y-1/2 bg-primary"></div>
        <div className="absolute -right-5 top-1/2 h-6 w-3 -translate-y-1/2 bg-primary"></div>
        <Image
          src={"/me.png"}
          alt=""
          width={140}
          height={140}
          className="size-28 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 md:size-32 lg:size-40"
        />
      </div>
    </div>
  );
}
