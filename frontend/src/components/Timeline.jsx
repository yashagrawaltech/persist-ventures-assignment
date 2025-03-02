const Timeline = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col gap-3 items-center">
        <h4 className="text-3xl font-bold font-montserrat">
          Found an idea that matches your skills?
        </h4>
        <i className="text-lg font-semibold text-center text-zinc-200/80">
          Here’s a simple guide on how the Startupathon process works once you
          find a project idea that suits your skills.
        </i>
      </div>
      <div className="w-dvw flex flex-col gap-40 items-center relative ">
        <div className="w-[0.2rem] h-full absolute left-1/2 -translate-x-1/2 bg-white/20 rounded-full overflow-clip">
          <div className="w-[0.2rem] h-[50dvh] sticky timeline-bar left-1/2 top-0 z-10 -mt-[50dvh]"></div>
        </div>

        <div className="w-[80dvw] z-30 flex gap-12 relative pt-24">
          <div className="flex-1 sticky top-[50vh] h-fit text-4xl text-right font-bold">
            Dive into the Challenge Details Video
          </div>
          <div className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-md sticky top-[50vh]">
            <img
              className="h-full"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/67194d6803b1bb4c2483b4fb_icons8-start-100.png"
              alt=""
            ></img>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-start justify-center text-left">
            <h5 className="text-2xl font-bold text-[#7a56d6]">
              It all starts here!
            </h5>
            <p className="text-lg">
              Receive an exciting task—your startup idea—with a detailed video
              to spark creativity and clarify our vision.
            </p>
            <span>
              💡Pro Tip : Pay attention—it’s more than just instructions. It’s
              your roadmap to success!
            </span>
          </div>
        </div>

        <div className="w-[80dvw] z-30 flex gap-12">
          <div className="flex-1 sticky top-[50vh] h-fit text-4xl text-right font-bold">
            Build, Submit & Shine
          </div>
          <div className="w-8 h-8 flex items-center justify-center p-1 bg-white sticky top-[50vh] rounded-md">
            <img
              className="h-full"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719b898b850d820a0151895_icons8-submit-idea-100.png"
              alt=""
            ></img>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-start justify-center text-left">
            <p className="text-lg">
              Create a prototype that showcases your approach, then submit your
              work with a Loom video presentation (no GitHub repo or complex
              code required). Your creative solution is what matters most.
            </p>
            <span className="text-sm">
              💡Stay ahead: Submit on time or early to show your dedication!
            </span>
          </div>
        </div>

        <div className="w-[80dvw]  z-30 flex gap-12 ">
          <div className="flex-1 sticky top-[50vh] h-fit text-4xl text-right font-bold">
            Get Feedback, Level Up!
          </div>
          <div className="w-8 h-8 flex items-center justify-center p-1 bg-white sticky top-[50vh] rounded-md">
            <img
              className="h-full"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719be4a8ec2af8db1816720_icons8-feedback-100.png"
              alt=""
            ></img>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-start justify-center text-left">
            <p className="text-lg">
              Three days after submission, we review your work. If it stands
              out, you&apos;re in! If not, we&apos;ll share feedback on how to
              improve. The cycle continues until we find the perfect fit.
            </p>
            <span className="text-sm">
              💡Pro Tip : This feedback is gold. Use it to sharpen your
              submission or learn what it takes to win!
            </span>
          </div>
        </div>

        <div className="w-[80dvw] z-30 flex gap-12  pb-24 ">
          <div className="flex-1 sticky top-[50vh] h-fit text-4xl text-right font-bold">
            Claim Your Crown
          </div>
          <div className="w-8 h-8 flex items-center justify-center p-1 bg-white sticky top-[50vh] rounded-md">
            <img
              className="h-full"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719c1ccefbcd50505f5d302_icons8-checked-96.png"
              alt=""
            ></img>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-start justify-center text-left">
            <h5 className="text-2xl font-bold text-[#7a56d6]">
              Ace the challenge to become the project leader.
            </h5>
            <p className="text-lg">
              Lead the Project. Ace the challenge, and take charge as BOSS.
              Enjoy ownership, 20% equity, and a competitive salary. Turn vision
              into impact with top-tier talent!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
