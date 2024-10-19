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
                width={619}
                height={528}
                alt="axs"
                priority
                />
              <div class="flex justify-between flex-col">
          <h1 className="text-3xl gap-1 flex w-full ">
            <div className="flex gap-1 items-center py-14 ">
                <span> کار با </span>
              
              <span className="font-extrabold text-4xl text-purple-600">میتیلو</span>
               </div>
              <div/>
              
              <div className="flex gap-1 items-center py-20">
              <span className="font-medium" > با چهار گام کوتاه آغاز میشود</span>
            </div>
          </h1>{" "}
          <div class=" flex-wrap gap-4 grid grid-cols-2">
            <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 ">
            <Image
                  src={"/1.png"}
                  width={22}
                  height={22}
                  alt="logo"
                  priority
                />
              <h3 class="text-xl font-medium "> رزرو کلاس </h3>
              </div>
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
          <div>
          <button class="text-white bg-purple-500 rounded-xl text-xs p-4"> همین الان شروع کن ! </button>
          </div>
           </div>
        </div>
         
        </>
    )
}
  

export default Categories;
            
        
        

