import { MdDeleteOutline } from "react-icons/md"
import { LuRefreshCw } from "react-icons/lu"

export default function IncludedLink({ link }) {
    return (
        <div className='w-[50vw] gap-2 flex items-center justify-between'>

            <div className='flex w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between'>
                <div><h3>{link.link}</h3></div>
                {link.status && <div className='bg-blue-100 rounded-md p-[2px] pl-3 pr-3'><h3 className='text-sm'>Trained</h3></div>}
            </div>

            <div>
                <h3>{link.charCount}</h3>
            </div>
            
            <div className='cursor-pointer active:scale-95 hover:text-red-500'>
                <MdDeleteOutline className='text-2xl' />
            </div>

            <div className='cursor-pointer active:scale-95'>
                <LuRefreshCw className='text-2xl' />
            </div>

        </div>
    )
}