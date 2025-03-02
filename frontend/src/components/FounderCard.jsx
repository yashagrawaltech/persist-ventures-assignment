const FounderCard = ({ img, name, post, linkedin, desc }) => {
  return (
    <div className="flex flex-col gap-2 w-full p-2 bg-[#42307324] border border-[#7a56d6] rounded-xl">
      <div>
        <img
          className="w-full h-48 object-cover object-center rounded-md"
          src={img}
          alt="person image"
        />
      </div>
      <div className="flex items-start text-left flex-col gap-2">
        <p className="text-xl font-bold text-left">{name}</p>
        <p className="text-lg">{post}</p>
        <p className="text-sm mt-8 mb-2">{desc}</p>
        <a href={linkedin} target="_blank">
          <div className="bg-[#7a56d6] p-2 rounded-md overflow-hidden">
            <img
              className="w-6 h-6  object-cover object-center scale-200"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg"
              alt="linkedin image"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FounderCard;
