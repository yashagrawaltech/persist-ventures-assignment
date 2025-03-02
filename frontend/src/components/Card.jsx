
const Card = ({children}) => {
  return (
    <div className="px-8 w-48 text-center aspect-square rounded-md shadow-[1px_1px_5px_1px_#7a56d6b3] color-3 border border-[#42307324] bg-[#42307324] flex items-center justify-center flex-col gap-2 font-montserrat">{children}</div>
  )
}

export default Card