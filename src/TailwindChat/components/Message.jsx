export const Message = ({ body, sentAt, my }) => (
    <div className={`w-full flex ${my ? "justify-end" : "justify-start"}`}>
        <div className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative" style={{ maxWidth: "300px" }}>
            <span className="block">{ body }</span>
            <span className={`block text-xs ${my ? "text-left" : "text-right"}`}>{ sentAt }</span>
        </div>
    </div>
)