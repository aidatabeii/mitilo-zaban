import Image from "next/image";

function HomePage() {
  return (
    <div class="flex">
    <div class="px-16">
      <div >
      <p class="text-4xl">
        <span> آموزش آنلاین </span><span  class="font-extrabold">تمامی تخصص ها <br/> کلاس بگیر،</span>
        <span>هزینش با </span> <span  class="font-extrabold">میتیلو </span>
        </p>
      </div>
      <h1 class="text-gray-400 mt-3">اگه بتونی از 18 مرداد تا 18 اسفند 70 جلسه کلاس زبان برگزار کنی  
        هزینه آزمون آیلتس یا تافلت رومیتیلو پرداخت میکنه!</h1>
        <br></br>
        <div class="flex p-6 items-center">
        <button class="text-white bg-purple-500 rounded-xl text-xs p-4">همین حالا امتحان کن !</button>
        <Image
        class="mr-5"
        src={"/arrow.png"}
        width={60}
        height={40}
        alt="logo"
        priority
        />
        </div> 
        <div class="flex p-5">
        <Image
        src={"/icon.png"}
        width={32}
        height={29}
        alt="icon"
        priority
        />
        <h1>استادت رو خودت انتخاب کن</h1>
        </div>
        <div class="flex">
        <Image
        src={"/icon.png"}
        width={32}
        height={29}
        alt="icon"
        priority
        />
        <h1>کلاس های خصوصی و گروهی در زمان های دلخواه وبه صورت تصویری و تعاملی</h1>
        </div>
    </div>
    <div>
    <Image
  class="mx-20"
  src={"/img 03.png"}
  width={799}
  height={999}
  alt="logo"
  priority
  />
    </div>
    
    </div>
  );
}

export default HomePage;