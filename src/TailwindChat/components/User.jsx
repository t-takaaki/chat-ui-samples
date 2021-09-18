export const User = ({name, imgSrc, active}) => (
  <div className="flex items-center border-b border-gray-300 pl-3 py-3">
    <img className="h-10 w-10 rounded-full object-cover"
      src={imgSrc}
      alt="username" />
    <span className="block ml-2 font-bold text-base text-gray-600">{name}</span>
    <span className="connected text-green-500 ml-2" >
      <svg width="6" height="6">
        <circle cx="3" cy="3" r="3" fill={`${active ? "currentColor" : "#e53e3e"}`}></circle>
      </svg>
    </span>
  </div>
)