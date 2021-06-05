import { useSelector } from "react-redux";
import { selectItem } from "../slices/appSlice";


function Header() {
    const item = useSelector(selectItem);
    return (
        <div className='truncate p-5 flex justify-center items-center sticky top-0 left-0 right-0 h-20 border-b bg-gray-100 border-gray-300 z-50'>
            <h1 className='text-md'>{item?.title}</h1>
        </div>
    )
}

export default Header
