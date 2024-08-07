import { Divider } from "@mantine/core";

export default function SectionHeader({header}:{header:string}): JSX.Element{
    return(
        <>

        <Divider size='sm' className=" mb-24" id={header}/>
    
        <div className=" flex  justify-center items-center font-poppins font-semibold leading-none text-blue-800">
            
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl leading-none">
            {header}
        </div>
        </div>

        </>
        );
        }