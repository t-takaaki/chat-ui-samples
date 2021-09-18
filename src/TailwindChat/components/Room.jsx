export const Room = ({ name, imgSrc, active, time, message })  => (
    <a href="/tailwind" className={`${active ? "bg-gray-100" : "hover:bg-gray-100"} border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out`}>
        <img className="h-10 w-10 rounded-full object-cover"
        src={imgSrc}
        alt="username" />
        <div className="w-full pb-2">
            <div className="flex justify-between">
                <span className="block ml-2 font-semibold text-base text-gray-600 ">{name}</span>
                <span className="block ml-2 text-sm text-gray-600">{ time }</span>
            </div>
            <span className="block ml-2 text-sm text-gray-600">{ message }</span>
        </div>
    </a>
)