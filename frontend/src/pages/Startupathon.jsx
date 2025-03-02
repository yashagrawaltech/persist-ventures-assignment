import { useEffect, useState } from "react";
import BgImageCard from "../components/BgImageCard";
import Button from "../components/Button";
import Card from "../components/Card";
import ChallengeCard from "../components/ChallengeCard";
import CompletedChallengeCard from "../components/CompletedChallengeCard";
import Footer from "../components/Footer";
import FounderCard from "../components/FounderCard";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

const Section1 = () => {
  return (
    <>
      <div className="h-[42dvh] px-40 flex items-end relative z-10">
        <img
          className="w-full grayscale"
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
          alt="team image"
        />
        <div className="w-full h-full left-0 top-0 bg-img-mask absolute"></div>
      </div>
    </>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col -mt-16 z-20">
        <div className="text">
          <div className="magic text-center flex flex-col items-center">
            <h1 className="text-8xl font-bold magic-text font-montserrat">
              Startupathon
            </h1>
          </div>
          <h3 className="text-3xl font-semibold mt-1">
            Your Chance to Build, Lead, and Succeed as a Founder
          </h3>
        </div>
        <div className="h-[80vh] w-[50vw] p-2 border flex items-center justify-center border-[#b6abe8ab] rounded-md mt-4 overflow-hidden">
          <div className="iframe html w-full h-full">
            <iframe
              className="h-full w-full"
              scrolling="no"
              frameBorder="0"
              id="player"
              src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?referrer=https%3A%2F%2Fpersistventures.com%2F"
              allowfullscreen="true"
              allow="accelerometer; gyroscope; fullscreen; encrypted-media; picture-in-picture;"
            ></iframe>
          </div>
        </div>
        <div className="flex gap-8 items-center mt-8 text-lg">
          <div className={"px-6 py-4 font-semibold text-base shadow-[0_0_50px_#7a56d675] hover:shadow-[0_0_50px_#7a56d695] rounded-lg border border-[#6D4BBE] bg-[#432d7b] hover:bg-[#6041AE] transition-all ease-in-out duration-200 flex items-center gap-4"}>
            Ongoing Startupathon{" "}
            <span>
              <img
                className="h-8"
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png"
                alt="sound-icon"
              />
            </span>
          </div>
          <div className={"px-6 py-4 font-semibold text-base shadow-[0_0_50px_#7a56d675] hover:shadow-[0_0_50px_#7a56d695] rounded-lg border border-[#6D4BBE] bg-[#432d7b] hover:bg-[#6041AE] transition-all ease-in-out duration-200 flex items-center gap-4"}>
            Startupathon Guide{" "}
            <span>
              <img
                className="h-8"
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
                alt="sound-icon"
              />
            </span>
          </div>
          <div className={"px-6 py-4 font-semibold text-base shadow-[0_0_50px_#7a56d675] hover:shadow-[0_0_50px_#7a56d695] rounded-lg border border-[#6D4BBE] bg-[#432d7b] hover:bg-[#6041AE] transition-all ease-in-out duration-200 flex items-center gap-4"}>
            Past Startupathon{" "}
            <span>
              <img
                className="h-8"
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png"
                alt="sound-icon"
              />
            </span>
          </div>
          <div className={"px-6 py-4 font-semibold text-base shadow-[0_0_50px_#7a56d675] hover:shadow-[0_0_50px_#7a56d695] rounded-lg border border-[#6D4BBE] bg-[#432d7b] hover:bg-[#6041AE] transition-all ease-in-out duration-200 flex items-center gap-4"}>
            Mentor Network{" "}
            <span>
              <img
                className="h-8"
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png"
                alt="sound-icon"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <h2 className="text-3xl font-bold font-montserrat">
          Startupathon Success Comes with Extraordinary Rewards
        </h2>
        <div className="text-base flex gap-4 flex-wrap w-[70vw] justify-center mt-4">
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png"
              alt=""
            />
            Competitive Salary
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png"
              alt=""
            />
            ≥ $10,000 USD in Company Funding
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png"
              alt=""
            />
            ≥ 10% Founder Equity
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png"
              alt=""
            />
            ≥ $100,000 USD AWS Credits
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png"
              alt=""
            />
            $1,000 OpenAI Credits
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png"
              alt=""
            />
            $120,000 USD IBM Cloud Credits
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png"
              alt=""
            />
            $2,500 Twilio Credits
          </Card>
          <Card>
            <img
              className="h-8 shrink-0"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png"
              alt=""
            />
            $2,000 Airtable Credits
          </Card>
        </div>
      </div>
    </>
  );
};

const Section4 = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_FRONTEND_URL}/admin/get-challenges/?status=active`
      );
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => setChallenges(data.challenges));
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-3 items-center justify-center py-8 relative bg-[#090110] z-20">
        <h2 className="text-3xl font-bold font-montserrat">
          Startupathon Success Comes with Extraordinary Rewards
        </h2>
        <p className="text-2xl text-zinc-200/50 mb-3">
          Start your journey—tackle live challenges, earn equity, and lead the
          future.
        </p>
        <div className="text-xl grid grid-cols-3 gap-4 w-[80vw] justify-center">
          {challenges.map((c) => {
            return (
              <ChallengeCard
                key={c._id}
                img={c.image}
                title={c.title}
                initialFunding={c.initialFundingOffered}
                desc={c.description}
                link={""}
                deadline={c.deadline}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Section5 = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 items-center text-center justify-center py-8">
        <h2 className="text-3xl font-bold font-montserrat w-[80vw]">
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A
          Startupathon Success)
        </h2>
        <div className="w-[50vw] aspect-video border flex items-center justify-center border-[#b6abe8ab] mt-4 overflow-hidden">
          <div className="iframe youtube w-full h-full">
            <iframe
              className="w-full h-full"
              id="player"
              frameBorder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Maximize Your Webapp's Potential with V0 by Vercel&nbsp;and&nbsp;Claude"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/pn_HoowYNTQ?wmode=opaque&amp;widget_referrer=https%3A%2F%2Fpersistventures.com%2F&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcdn.embedly.com&amp;widgetid=1"
            ></iframe>
          </div>
        </div>
        <h2 className="text-3xl font-bold font-montserrat w-[80vw] mt-8">
          Our Hiring Process: Shared Through Candidate Stories
        </h2>
        <div className="h-[80vh] w-[50vw] p-2 border flex items-center justify-center border-[#b6abe8ab] rounded-md mt-4 overflow-hidden">
          <div className="iframe html w-full h-full">
            <iframe
              className="h-full w-full"
              scrolling="no"
              frameBorder="0"
              id="player"
              src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?referrer=https%3A%2F%2Fpersistventures.com%2F"
              allowfullscreen="true"
              allow="accelerometer; gyroscope; fullscreen; encrypted-media; picture-in-picture;"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

const Section6 = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="w-[80dvw] flex items-center justify-center">
          <BgImageCard>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-5xl font-bold">Got an idea of your own?</h2>
              <p className="text-lg">
                We are always on the lookout for visionaries with great startup
                ideas, ready to become successful founders. If that’s you, apply
                below for our Fellowship program.
              </p>
              <span className="text-xl">
                <Button>Apply for Fellowship</Button>
              </span>
            </div>
          </BgImageCard>
        </div>
      </div>
    </>
  );
};

const Section7 = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_FRONTEND_URL}/admin/get-persons`
      );
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => setPersons(data.persons));
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <h2 className="text-3xl font-bold font-montserrat">
          Completed Startupathon Challenges
        </h2>
        <i className="text-xl text-zinc-200/60 mb-3">
          People like you have cracked Startupathon challenges and are now
          leading thriving startups.
        </i>
        <div className="grid grid-cols-3 gap-4 w-[85dvw]">
          {persons.map((p) => {
            return (
              <CompletedChallengeCard
                key={p._id}
                title={p.company.name}
                name={p.name}
                post={p.role}
                logo={p.company.logo}
                desc={p.description}
                img={p.image}
                initialFunding={p.initialFundingOffered}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Section8 = () => {
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_FRONTEND_URL}/admin/get-founders`
      );
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => setFounders(data.founders));
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-3 items-center justify-center py-8">
        <h2 className="text-3xl font-bold font-montserrat">
          By getting accepted you unlock access to our elite founder network.
        </h2>
        <i className="text-xl text-zinc-200/60 mb-3">
          Join Persist and gain access to our 400+ millionaire and billionaire
          startup network.
        </i>
        <div className="grid grid-cols-4 gap-4 w-[85dvw]">
          {founders.map((f) => {
            return (
              <FounderCard
                key={f._id}
                img={f.image}
                name={f.name}
                post={f.role}
                desc={f.description}
                linkedin={f.linkedin}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Section9 = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 items-center justify-center text-center">
        <h4 className="text-3xl font-bold font-montserrat w-[80vw]">
          You are just one{" "}
          <span className="text-[#7a56d6]">Startupathon Challenge</span> away
          from an exciting career as the{" "}
          <span className="text-[#7a56d6]">founder of a company</span>, with a{" "}
          <span className="text-[#7a56d6]">full salary and</span>{" "}
          <span className="text-[#7a56d6]">ownership in</span> what you build.
        </h4>
        <iframe
          id="twitter-widget-0"
          scrolling="no"
          allowfullscreen="true"
          className=""
          style={{
            position: "static",
            visibility: "visible",
            width: "550px",
            height: "552px",
            display: "block",
            flexGrow: 1,
          }}
          title="X Post"
          src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1814625998136029202&amp;lang=en&amp;origin=https%3A%2F%2Fpersistventures.com%2Fstartupathon&amp;sessionId=47e2379c55c694c9bada122c21acd374403d48a4&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px"
          data-tweet-id="1814625998136029202"
        ></iframe>
      </div>
    </>
  );
};

const Section10 = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full pt-2 pb-16">
        <div className="w-[60dvw] flex items-center justify-center">
          <BgImageCard>
            <div className="flex flex-col gap-4">
              <p className="text-2xl">
                Sign up to get notified first about new Startupathon projects
                and receive updates through our newsletter.
              </p>
              <form className="flex items-center gap-4 justify-center">
                <input
                  className="px-4 py-2 rounded-sm w-[30%] bg-[#170c1f] focus:bg-[#2F1741] border border-[#7a56d6] focus:outline-0"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email id"
                />
                <button
                  className="bg-[#7a56d6] rounded-sm px-4 py-2"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </BgImageCard>
        </div>
      </div>
    </>
  );
};

const Startupathon = () => {
  return (
    <div className="relative w-full min-h-dvh flex flex-col bg-[#090110] text-white">
      <header className="sticky top-0 left-0 width-full z-50">
        <Header />
      </header>
      <main className="overflow-x-clip flex flex-col gap-12">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <Timeline />

        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </main>
      <footer className="w-full overflow-x-hidden">
        <Footer />
      </footer>
    </div>
  );
};

export default Startupathon;
