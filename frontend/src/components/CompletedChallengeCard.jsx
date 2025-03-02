import Button from "./Button"

const CompletedChallengeCard = ({title, logo, img, name, post, desc, linkedin, initialFunding, link}) => {
  return (
    <div className="p-2 grow flex items-start justify-center gap-6 flex-col bg-[#42307324] border border-[#7a56d6] rounded-2xl text-center leading-tight tracking-tight">
        <div className="flex items-center gap-4 text-2xl font-bold">{title}cfe <span><img className="h-8" src={logo} alt="company icon" /></span></div>
        <div className="grid grid-cols-2 gap-2 w-full">
            <div><img className="w-full h-full object-cover object-center rounded-md" src={img} alt="person image" /></div>
            <div className="flex items-start text-left flex-col gap-2">
                <p className="text-xl font-bold text-left">{name}</p>
                <p className="text-lg">{post}</p>
                <a href={linkedin} target="_blank"><div className="bg-[#7a56d6] p-2 rounded-md overflow-hidden"><img className="w-6 h-6  object-cover object-center scale-200" src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" alt="linkedin image" /></div></a>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
        <div className="w-full">
        <h4 className="text-xl font-bold mb-2">Initial Funding Offered: <span className="text-[#7a56d6]">${initialFunding}</span></h4>
        <a href={link} target="_blank"><Button className={"w-full"}>View More Details</Button></a>
        </div>
    </div>
  )
}

export default CompletedChallengeCard