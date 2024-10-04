import Image from "next/image";
function Categories() {
  return (
    <>
      <div>
        <Image
          src={"/categories.png"}
          width={1528}
          height={88}
          alt="logo"
          priority
        />
      </div>
      <div class="flex justify-between m-10 gap-5">
        <Image
          src={"/aida.png.png"}
          width={600}
          height={600}
          className="w-[35rem] h-auto"
          alt="axs"
          priority
        />
        <div class="flex justify-between flex-col">
          <h1 className="text-3xl gap-1 flex w-full ">
            <div className="flex gap-1 items-center">
              <span>کار با</span>
              <span className="font-medium text-purple-600">میلیتو</span>
            </div>
            <div className="flex gap-1 items-center">
              <span>با</span>
              <span className="font-medium text-purple-600">چهار</span>
              <span>گام کوتاه آغاز میشود</span>
            </div>
          </h1>{" "}
          <div class=" flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 class="text-xl font-medium "> رزرو کلاس </h3>
              <p>
                با استاد های مختلف کلاس آزمایشی برگزار کن و اولین کلاس انلاین
                زبان را از تقویم میتیلو رزور کن.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 ">
                <Image
                  src={"/2.png"}
                  width={22}
                  height={22}
                  alt="logo"
                  priority
                />
                <h3 class="text-xl font-medium"> انتخاب استاد </h3>
              </div>
              <p>
                با استاد های مختلف کلاس آزمایشی برگزار کن و اولین کلاس انلاین
                زبان را از تقویم میتیلو رزور کن.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={"/3.png"}
                  width={22}
                  height={22}
                  alt="logo"
                  priority
                />
                <h3 class="text-xl font-medium"> شروع یادگیری </h3>
              </div>
              <p>
                اولین کلاس انلاین زبان را از تقویم میتیلو رزور کن.با استاد های
                مختلف کلاس آزمایشی برگزار کن و
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={"/4.png"}
                  width={22}
                  height={22}
                  alt="logo"
                  priority
                />
                <h3 class="text-xl font-medium"> دانلود کلاس </h3>
              </div>
              <p>
                با استاد های مختلف کلاس آزمایشی برگزار کن و اولین کلاس انلاین
                زبان را از تقویم میتیلو رزور کن.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Categories;
