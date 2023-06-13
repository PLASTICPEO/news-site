import { InfoTypes } from "./info.types";
import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";

const Info: React.FC<InfoTypes> = ({ time, category }) => {
  return (
    <div className="flex items-center xl:space-x-2 mt-3 space-x-36">
      <div className="flex space-x-1">
        <img src={clockIcon} alt="" />
        <p className="text-[#667085] text-[Helvetica] text-sm font-medium">
          {time} წუთის წინ
        </p>
      </div>
      <p className="text-[#667085] text-[Helvetica] text-xs font-bold bg-[#F2F4F7] py-1 px-3 rounded-2xl">
        {category}
      </p>
    </div>
  );
};

export default Info;
