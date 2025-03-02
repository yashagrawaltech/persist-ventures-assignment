import Button from "./Button";
import { Link } from "react-router";

const ChallengeCard = ({
  img,
  title,
  initialFunding,
  desc,
  deadline,
  link,
}) => {
  return (
    <div className="p-4 grow flex items-center justify-center gap-6 flex-col bg-[#2c205338] hover:bg-[#09000D] hover:shadow-lg hover:shadow-[#7a56d6] transition-all ease-in-out duration-200 border border-[#7a56d6] rounded-2xl text-center">
      <img src={img} alt={`${title} image`} />
      <div className="flex flex-col items-center gap-2">
        <h5 className="text-2xl font-bold">{title}</h5>
        <h6 className="text-xl font-semibold text-[#7a56d6]">Initial Funding Offered : ${initialFunding}</h6>
      </div>
      <p className="text-lg text-[#efeafc]">{desc}</p>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col gap-2 items-center font-semibold text-base text-center text-[#7a56d6]">
          <img
            className="h-8 shrink-0"
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning-p-500.png"
            alt="clock image"
          />
          Deadline approaching! Apply by {deadline}
        </div>
      </div>
        <Link to={link} className="w-full">
          <Button className={"w-full"}>view challenge detail</Button>
        </Link>
    </div>
  );
};

export default ChallengeCard;
