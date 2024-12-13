import Image from "next/image";

export default function Avatar() {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 -mt-[3px] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border sm:flex">
      <div className="relative">
        <div className="absolute -top-2 left-1/2 h-3 w-6 -translate-x-1/2 bg-primary"></div>
        <div className="absolute -left-2 top-1/2 h-6 w-3 -translate-y-1/2 bg-primary"></div>
        <div className="absolute -right-2 top-1/2 h-6 w-3 -translate-y-1/2 bg-primary"></div>
        <Image src={"/avatar.png"} alt="avatar" width={190} height={190} />
      </div>
    </div>
  );
}
