import Image from "next/image";
function Page3() {
    return (
        <>
        <div class="text-center py-20">
         <span className="font-extrabold text-4xl"> دوره های درحال بارگزاری  </span>
         <span class="font-extrabold text-4xl text-purple-600"> میتیلو </span>
         </div>
         <div class="flex px-28 justify-center">
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > زبان </button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > مالی </button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > کسب و کار </button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > دروس تحصیلی </button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > برنامه نویسی</button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > گرافیک </button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > ورزش </button>
            <button class="flex text-black bg-slate-200 mx-3 rounded-xl p-4 " > مراقبت و زیبایی </button>
         </div>
         <div class="flex p-1 justify-center">
            <div>
            <Image
            src={"/x.png"}
            width={64}
            height={64}
            alt="logo"
            priority
            />
            </div>
            <div>
             <Image
            src={"/corces.png"}
            width={1140}
            height={3667}
            alt="logo"
            priority
            />
            </div>
            <div>
            <Image
            src={"/x.png"}
            width={64}
            height={64}
            alt="logo"
            priority
            />
            </div>
         </div>
         <div class="py-20 mx-14 px-16">
            <span class="font-extrabold text-4xl">
                4 امتیاز یادگیری به سبک
            </span>
            <span class="font-extrabold text-4xl text-purple-600"> میتیلو </span>
         </div>
         <div class="flex justify-center">
        
         <div class="flex-wrap gap-4 grid grid-cols-2 px-16 mx-14">
         
         <div>
         <Image
            src={"/Group 24.png"}
            width={80}
            height={93}
            alt="logo"
            priority
            />
            <span class="font-extrabold text-2xl text-purple-600"> صرفه جویی در زمان  </span>
            <p>
            <span class="text-lg"> بسیاری از روش های آموزش زبان فایل </span>
            <br></br>
            <span class="text-lg"> استفاده از طریق اینتر نت هستند .فروش </span>
            <br></br>
            <span class="text-lg"> ویدیو های آموزش زبان سالهاست که... </span>
            </p>
         </div>
         <div>
         <Image
            src={"/h2.png"}
            width={80}
            height={93}
            alt="logo"
            priority
            />
            <span class="font-extrabold text-2xl text-purple-600"> آموزش 24 ساعته  </span>
            <p>
            <span class="text-lg"> بسیاری از روش های آموزش زبان فایل </span>
            <br></br>
            <span class="text-lg"> استفاده از طریق اینتر نت هستند .فروش </span>
            <br></br>
            <span class="text-lg"> ویدیو های آموزش زبان سالهاست که... </span>
            </p>
         </div>
         <div>
         <Image
            src={"/h3.png"}
            width={80}
            height={93}
            alt="logo"
            priority
            />
            <span class="font-extrabold text-2xl text-purple-600"> فروشگاه </span>
            <p>
            <span class="text-lg"> بسیاری از روش های آموزش زبان فایل </span>
            <br></br>
            <span class="text-lg"> استفاده از طریق اینتر نت هستند .فروش </span>
            <br></br>
            <span class="text-lg"> ویدیو های آموزش زبان سالهاست که... </span>
            </p>
         </div>
         <div>
         <Image
            src={"/h4.png"}
            width={80}
            height={93}
            alt="logo"
            priority
            />
            <span class="font-extrabold text-2xl text-purple-600"> تنوع آموزش </span>
            <p>
            <span class="text-lg"> بسیاری از روش های آموزش زبان فایل </span>
            <br></br>
            <span class="text-lg"> استفاده از طریق اینتر نت هستند .فروش </span>
            <br></br>
            <span class="text-lg"> ویدیو های آموزش زبان سالهاست که... </span>
            </p>
         </div>
         </div>
         <Image
            src={"/h5.png"}
            width={754}
            height={729}
            alt="logo"
            priority
            />
         </div>
         <Image
            src={"/h6.png"}
            width={1440}
            height={630}
            alt="logo"
            priority
            />
            <div >
               <div class="w-max mx-auto py-8">
            <Image
            src={"/h7.png"}
            width={111}
            height={25}
            alt="logo"
            priority
            />
</div>
            <div class="w-max mx-auto ">
            <span class="font-extrabold text-4xl">
                تازه های فروشگاه 
            </span>
            <span class="font-extrabold text-4xl text-purple-600"> میتیلو </span>
         </div>
            </div>
            <Image
            class="justify-center px-14 mx-10"
            src={"/ev.png"}
            width={1316}
            height={341}
            alt="logo"
            priority
            />
        </>
    )
};
export default Page3;