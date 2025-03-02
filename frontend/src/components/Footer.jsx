const Footer = () => {
  return (
    <div className="h-dvh w-dvw grid grid-cols-2 p-40 gap-32 bg-black">
      <div className="flex flex-col gap-8 items-start h-fit">
        <img
          className="h-24"
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png"
          alt="persist venture logo"
        />
        <p className="text-xl text-zinc-200/80">
          We partner with entrepreneurs and businesses to help scale and grow
          their ideas. With a diverse team skilled in every sector there is no
          business we can not help get a leg up.
        </p>
        <div className="flex items-center gap-8 text-4xl">
          <i className="ri-instagram-line"></i>
          <i className="ri-linkedin-box-line"></i>
          <i className="ri-youtube-line"></i>
        </div>
        <p className="text-zinc-200/80">All rights reserved © 2025 persistventures.com</p>
      </div>
      <div className="h-fit flex items-start">
        <div className="w-1/2 shrink-0">
          <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 items-start">
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Home</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Investor Application</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Job Application</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Apply To Startup Accelerator</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Career Accelerator Program</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Our team</a>
          </div>
        </div>
        <div className="w-1/2 shrink-0">
          <h4 className="text-2xl font-bold mb-4">Legal</h4>
          <div className="flex flex-col gap-2 items-start">
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Terms of service</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Privacy policy</a>
            <a className="text-sm hover:text-[#4F388B] transition-all ease-in-out duration-200 text-zinc-200/80" href="">Decentralized Intelligence Agency</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
