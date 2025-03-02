const BgImageCard = ({ children }) => {
  return (
    <div className="w-full p-8 text-center bg-green-200 bg-img rounded-md border-[#efeafc] flex items-center justify-center">
      {children}
    </div>
  );
};

export default BgImageCard;
