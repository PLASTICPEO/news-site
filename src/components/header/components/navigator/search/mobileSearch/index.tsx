import { useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContext";

const MobileSearch = () => {
  const { isOpenSearchField, toggleSearchField } = useContext(HeaderContext);

  return (
    <div
      className={`flex items-center absolute left-0 top-0 w-full h-40 bg-[#FFFFFF] ${
        isOpenSearchField ? "visible" : "invisible"
      } z-40`}
    >
      <span className="material-symbols-outlined  ml-7 text-[#475467]">
        search
      </span>
      <input
        className="outline-none p-2.5 appearance-none bg-transparent w-52 h-5 font-[Helvetica] text-sm text-[#101828]  placeholder:text-[#475467] appearance-none caret-[#1989F0] "
        type="search"
        placeholder="საძიებო სიტყვა..."
      />
      <button
        onClick={toggleSearchField}
        className="w-28 h-10 text-[#1989F0] rounded-3xl"
      >
        გაუქმება
      </button>
    </div>
  );
};

export default MobileSearch;
