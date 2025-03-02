const Button = ({ children, className }) => {

  return (
    <button className={`px-8 py-2 rounded-md shadow-[0px_1px_5px_0px_#7a56d6] btn-hover color-3 border border-[#7a56d6] bg-[#9077ce] flex items-center justify-center gap-2 capitalize ${className}`}>
      {children}
    </button>
  );
};

export default Button;
