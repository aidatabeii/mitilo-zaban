import Image from "next/image";
function Page4 () {
   return(
    <>
    <div class="py-20">
    <div class="mx-auto w-max">
    <Image
    src={"/ll.png"}
    width={111}
    height={25}
    alt="logo"
    priority
    />
    </div>
    <div class="text-center ">
      <span class="font-extrabold text-4xl"> دانش پذیران  </span>

      <span class="font-extrabold text-4xl text-purple-600"> میتیلو   </span>
      <span class="font-extrabold text-4xl">    میگویند  </span>
    </div>
    </div>
    <div class="flex py-2 mx-auto w-max ">
    <div class="p-20">
      <Image
      src={"/x.png"}
      width={64}
      height={64}
      alt="arrow"
      priority
      />
      <Image
      src={"/ttt.png"}
      width={73}
      height={74}
      alt="girl"
      priority
      />
    </div>
    <div p-4>
    <Image
    class="rounded-full"
      src={"/mard.png"}
      width={237}
      height={237}
      alt="mard"
      priority
      />
    </div>
    <div class="text-lg p-4">
      <span>
        دنیای مدرن دنیای یادگیری و آموزش است . سرعت رشد
      </span>
      <br></br>
      <span>
        دانش و زبان های زنده دنیا مثل انگلیسی انقدر بالا رفته
      </span>
      <br></br>
      <span>
        که در بعضی از  انها  ماهانه واژه های جدیدی  به
      </span>
      <br></br>
      <span>
        دیکشنری ها افزوده میشود. به  همین  نسبت آموزش 
      </span>
      <br></br>
      <span>
        زبان  نیز رونق  گرفته.
      </span>
      <br></br>
      <div class="py-5">
      <span class="font-extrabold text-3xl text-purple-600">
      آرمین نصیری 
    </span>
    <br></br>
    <span class="text-sm text-gray-400">
      مدیر شرکت هاستیدا.
    </span>
    <br></br>
      </div>
    </div>
   <div class="p-20">
   <Image
      src={"/x.png"}
      width={64}
      height={64}
      alt="arrow"
      priority
      />
      <Image
      src={"/ggg.png"}
      width={73}
      height={74}
      alt="mard"
      priority
      />
   </div>
    </div>
    <div class="mx-auto w-max py-20">
    <Image
      src={"/mask.png"}
      width={1140}
      height={495}
      alt="girl"
      priority
      />
    </div>
    <div class="px-20 py-10 mx-14">
      <span class="font-extrabold text-4xl">
        آخرین مطالب 
      </span>
      <span class="font-extrabold text-4xl text-purple-600"> میتیلو   </span>
    </div>
    <div class="flex-wrap gap-4 grid grid-cols-2 px-16 mx-14">
      <Image
      src={"/d1.png"}
      width={558}
      height={202}
      alt="d1"
      priority
      />
        <Image
      src={"/d2.png"}
      width={558}
      height={202}
      alt="d2"
      priority
      />
        <Image
      src={"/d3.png"}
      width={558}
      height={202}
      alt="d3"
      priority
      />
        <Image
      src={"/d4.png"}
      width={558}
      height={202}
      alt="d4"
      priority
      />
    </div>
    </>
   ) 
}
export default Page4;