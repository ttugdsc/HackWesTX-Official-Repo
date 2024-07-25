import { Divider } from "@mantine/core";

export default function SectionHeader({header}:{header:string}): JSX.Element{
    return(
        <>

        <Divider size='sm' className=" mb-24" id={header}/>
    
        <div className=" flex  justify-center items-center font-poppins font-semibold text-8xl leading-none text-blue-800">
            {header}
        </div>

        </>
        );
        }