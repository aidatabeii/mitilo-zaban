import Image from "next/image";

function HomePage() {
  return (
    <div class="flex items-center justify-center p-5 my-14">
      <div class="">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl">
            آموزش آنلاین{" "}
            <span className="font-semibold text-purple-600">تمامی تخصص ها</span>
          </h1>
          <h1 className="text-3xl flex items-center gap-1">
            <span className="font-semibold text-purple-600 ">کلاس بگیر</span>
            <span> هزینه ش با</span>
            <span className="font-semibold text-purple-600">میتیلو</span>
          </h1>
          <h2 class="text-gray-400 mt-3">
            اگه بتونی از 18 مرداد تا 18 اسفند 70 جلسه کلاس زبان برگزار کنی هزینه
            آزمون آیلتس یا تافلت رومیتیلو پرداخت میکنه!
          </h2>
        </div>
        <div class="flex p-6 items-center">
          <button class="text-white bg-purple-500 rounded-xl text-xs p-4">
            همین حالا امتحان کن !
          </button>
          <Image
            class="mr-5"
            src={"/arrow.png"}
            width={60}
            height={40}
            alt="logo"
            priority
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <div class="flex items-center gap-3">
            <Image
              src={"/icon.png"}
              width={32}
              height={29}
              alt="icon"
              priority
            />
            <h1>استادت رو خودت انتخاب کن</h1>
          </div>
          <div class="flex items-start gap-3">
            <Image
              src={"/icon.png"}
              width={32}
              height={29}
              alt="icon"
              priority
            />
            <h1>
              کلاس های خصوصی و گروهی در زمان های دلخواه وبه صورت تصویری و تعاملی
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Image
          class="w-max mx-auto "
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
