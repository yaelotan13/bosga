export default function CategoriesImages() {
  return (
    <div className="grid h-[1200px] w-full grid-cols-2 grid-rows-3 gap-5 p-8">
      <div
        className="row-span-2 flex items-center justify-center rounded-md bg-cover"
        style={{
          backgroundImage:
            "url(https://images.urbndata.com/is/image/Anthropologie/48097422_070_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314)",
        }}
      >
        <h1 className="text-6xl text-white">Décor</h1>
      </div>
      <div
        className="flex items-center justify-center rounded-md bg-cover"
        style={{
          backgroundImage:
            "url(https://images.urbndata.com/is/image/Anthropologie/45407866AD_080_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314)",
        }}
      >
        <h1 className="text-6xl text-white">Bedding</h1>
      </div>
      <div
        className="row-span-2 flex items-center justify-center rounded-md bg-cover"
        style={{
          backgroundImage:
            "url(https://images.urbndata.com/is/image/Anthropologie/45312497AP_025_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314)",
        }}
      >
        <h1 className="text-6xl text-white">Kitchen</h1>
      </div>
      <div
        className="flex items-center justify-center rounded-md bg-cover"
        style={{
          backgroundImage:
            "url(https://images.urbndata.com/is/image/Anthropologie/65310534_055_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314)",
        }}
      >
        <h1 className="text-6xl text-white">Bath</h1>
      </div>
    </div>
  );
}
