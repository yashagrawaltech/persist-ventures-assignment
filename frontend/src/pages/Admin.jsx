
import ChallengeManagementPage from "../components/ChallengeManagementPage"


const Admin = () => {
  return (
    <div className="w-dvw h-dvh bg-[#090110] grid grid-cols-10 gap-4 p-4 overflow-hidden">
      <div className="col-span-2 bg-gray-900 rounded-2xl flex flex-col p-4 gap-4">
        <span className="w-full p-4 flex items-center justify-center bg-zinc-200 rounded-md text-lg">Challenges</span>
        <span className="w-full p-4 flex items-center justify-center bg-zinc-200/50 rounded-md text-lg">Companies</span>
        <span className="w-full p-4 flex items-center justify-center bg-zinc-200/50 rounded-md text-lg">Completers</span>
        <span className="w-full p-4 flex items-center justify-center bg-zinc-200/50 rounded-md text-lg">Founders</span>
      </div>
      <div className="col-span-8 rounded-2xl bg-gray-900 overflow-hidden">
        <ChallengeManagementPage />
      </div>
    </div>
  )
}

export default Admin