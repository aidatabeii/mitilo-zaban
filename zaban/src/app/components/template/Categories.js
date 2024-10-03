import Image from "next/image";
function Categories() {
    return(<>
        <div> 
            <Image
            src={"/categories.png"}
            width={1528}
            height={88}
            alt="logo"
            priority
            />
             </div>
             <div class="flex">
             <div class="mx-20 my-20"> 
                <Image 
                src={"/aida.png.png"}
                width={619}
                height={528}
                alt="axs"
                priority
                />
             </div>

             <div class="flex">
             <div class="my-20">
             <span class="text-3xl"> کار با  </span> <span class="text-purple-700 text-3xl "> میتیلو </span>
             <br></br>
             <span class="text-3xl"> با چهار گام کوتاه آغاز میشود  </span>
             </div>
        
        <div class=" my-80 flex">
            <div>
            <div>
            <Image
            src={"/1.png"}
            width={22}
            height={22}
            alt="logo"
            priority
            />
            <span class="text-2xl"> رزرو کلاس </span>
            
            <br></br>
           <span> با استاد های مختلف کلاس  آزمایشی برگزار کن و </span>
            
            <span> اولین کلاس انلاین  زبان را از تقویم میتیلو رزور کن. </span>
            </div>
            <div>
            <Image
            src={"/2.png"}
            width={22}
            height={22}
            alt="logo"
            priority
            />
            <span class="text-2xl"> انتخاب استاد </span>
            <br></br>
            <span> با استاد های مختلف کلاس آزمایشی برگزار کن و </span>
           
            <span> اولین کلاس انلاین  زبان را از تقویم میتیلو رزور کن. </span>
            </div>
            </div>
            <div>
            <div >
            <Image
            src={"/3.png"}
            width={22}
            height={22}
            alt="logo"
            priority
            />
            <span class="text-2xl"> شروع یادگیری </span>
            <br></br>
            <span> با استاد های مختلف  کلاس آزمایشی برگزار کن و </span>
            
            <span> اولین کلاس انلاین  زبان را از تقویم میتیلو رزور کن. </span>
            </div>
            <div>
            <Image
            src={"/4.png"}
            width={22}
            height={22}
            alt="logo"
            priority
            />
            <span class="text-2xl"> دانلود کلاس </span>
            <br></br>
            <span> با استاد های مختلف  کلاس آزمایشی برگزار کن و </span>
            
            <span> اولین کلاس انلاین  زبان را از تقویم میتیلو رزور کن. </span>
            </div>
            </div>
        </div>

    </div>
</div>
</>
    )
}
export default Categories;