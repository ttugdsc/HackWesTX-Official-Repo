import React from "react";
import Floating_Nav from "../../components/ui/2024/Floating-Nav";
import Image from "next/image";
import BannerImage from "../../assets/2024-assets/banner.png"
import {Poppins} from 'next/font/google'
import FrequentQuestions from "../../components/ui/2024/faq";
import Link from "next/link";
import { Divider } from "@mantine/core";
import SectionHeader from "../../components/ui/2024/sectionHeader";

function Home_2024 (){
    return(
    <div className="flex flex-col justify-center w-full h-full gap-y-5">
    <div className=" relative" id="home">
    <Image
    className=" rounded-b-3xl"
    src={BannerImage}
    alt='banner'
    width={1440}
    height={810}
    />
    <div className="absolute inset-0 flex  justify-center items-center font-poppins font-semibold text-10xl leading-none text-blue-800">
        HACKWESTX V
    </div>
    </div>
    <Floating_Nav/>
    <div className=" my-4 flex flex-col justify-center text-center font-light text-3xl w-3/4 gap-6 mx-auto" >
        <div>
        HackWes<div className="inline text-yellow-700">TX</div> V is Texas Tech’s <div className="inline text-yellow-700">fifth</div> student-run hackathon.
        </div>
        <div>
        A hackathon is an event where participants, often working in teams, engage in <div className="inline text-yellow-700">intensive collaboration</div> to create innovative solutions to <div className="inline text-yellow-700">real world problems</div> within a limited time frame.
        </div>
        <div>
        HackWesTX is a <div className="inline text-yellow-700">24-hour</div> event.
        </div>
    </div>
    
    <div className="flex flex-col mx-auto w-4/5 my-8">
        <SectionHeader header='FAQ' />
        <div className="text-center font-light text-3xl w-3/4 gap-6 mx-auto my-8">
            For any additional questions <Link className=" text-yellow-700 m-0 p-0" href={'mailto:contact@hackwestx.tech'}>contact us.</Link>
        </div>
        <FrequentQuestions/>
    </div>
    <div className="w-2 mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida mauris non felis tincidunt, nec ultrices dui lobortis. Vivamus ullamcorper semper lorem, nec porttitor nisl faucibus nec. Proin lacinia bibendum felis, id iaculis justo dapibus sed. Sed at lorem vitae ante mollis volutpat sit amet eget risus. Donec ut libero ut libero viverra molestie. Nam tincidunt fermentum urna eget convallis. Nullam sed efficitur ex, nec consectetur justo. Maecenas a arcu sit amet eros maximus dictum.

Pellentesque eleifend, nisi vel vehicula aliquam, quam purus ultrices elit, sit amet pellentesque nunc nisl quis mi. In hac habitasse platea dictumst. Ut eleifend ligula ac justo tincidunt, vel vestibulum quam dictum. Ut ullamcorper velit ac ultrices interdum. Aenean non est nisl. Maecenas nec feugiat quam. Fusce aliquam, nisl at suscipit interdum, velit felis gravida nunc, id fermentum ex felis sit amet sem.

Quisque euismod ultricies nulla, ac rhoncus purus bibendum at. Duis et tellus ac dolor ultricies congue a eu lorem. Curabitur in mauris eget lacus gravida tristique. Praesent efficitur dui vitae tortor feugiat scelerisque. Ut nec congue enim. Integer sit amet pharetra lacus. Nam vitae nisi non ante eleifend consequat in eu erat.

Nullam id ex non est faucibus hendrerit sed vel sem. Proin viverra, nulla in euismod facilisis, lacus libero euismod libero, ac sagittis quam arcu nec turpis. Sed lacinia elit ac lectus scelerisque eleifend. Nunc in tortor vel nulla tempor tincidunt. Vivamus eu tellus non libero dapibus posuere. Donec in velit augue. Duis eu orci nec justo consectetur efficitur.

Suspendisse potenti. Phasellus condimentum dui vel ligula euismod, non varius odio rutrum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras scelerisque lorem eget diam venenatis lobortis. Sed vitae mi nec nisl consequat vehicula. Ut suscipit ligula quis neque facilisis lacinia. Integer rhoncus aliquet neque id lacinia.

Etiam in sapien sit amet est venenatis dapibus vel sit amet quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer lobortis varius elit, ac tempor risus dignissim at. Phasellus non sapien et libero varius tincidunt a et odio. Mauris non augue ultricies, bibendum lorem at, cursus lorem. Nunc a arcu varius, faucibus quam nec, consectetur justo.

Nam ultricies justo vitae mauris ultricies, at auctor velit eleifend. Nulla facilisi. Curabitur vitae leo vel libero maximus venenatis. Aenean nec leo nulla. Fusce et bibendum ligula. Sed vel magna semper, dignissim orci in, malesuada metus. Ut lacinia, sem quis vehicula fringilla, turpis sem rutrum turpis, nec sodales risus libero non nunc. Sed sit amet posuere purus.
</div>
</div>
    )
};

Home_2024.getLayout = (page: React.ReactElement) => page;

export default Home_2024;