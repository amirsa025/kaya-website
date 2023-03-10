//Aside AsideVerifyPhone
import React from 'react';
import Image from "next/image";


const AsideVerifyPhone = () =>
{

    return (
        <>
            <div className={"flex flex-row-reverse lg:flex-col justify-between lg:h-screen"}>
                <div>
                    <Image src={"/images/login kaya.webp"} alt={"photo-verify"} height={800} width={800} className={"hidden lg:block"}/>
                    <Image src={"/images/loginresponsive.webp"} alt={""} height={200} width={200} className={"hidden md:flex lg:hidden"}/>
                    <Image src={"/images/loginresponsive.webp"} alt={""} height={100} width={100} className={"flex md:hidden  lg:hidden"}/>
                </div>
                <div className={"pt-6 text-center "}>
                    <strong className={"md:text-3xl md:w-10/12 text-lg"}>شغل ساخته شد برای شما<br></br> را پیدا کنید.</strong>
                </div>
                <div>
                    <Image src={"/images/pcblue.webp"} alt={""} height={50} width={50}  className={"hidden lg:block"}/>
                    <Image src={"/images/pcblue.webp"} alt={""} height={200} width={200} className={"hidden md:flex lg:hidden"}/>
                    <Image src={"/images/pcblue.webp"} alt={""} height={100} width={100} className={"flex md:hidden pt-[28px] lg:hidden "}/>
                </div>
            </div>
        </>
    );
};

export default AsideVerifyPhone;