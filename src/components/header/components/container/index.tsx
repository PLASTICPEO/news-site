import { ContainerProps } from "./container.types";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { prevScrollPos } = useContext(HeaderContext);
  return (
    <div
      className={`${
        prevScrollPos > 50 ? "flex  justify-between mt-6" : "block"
      } container m-auto transition-all  font-Helvetica ease-in-out duration-500 `}
    >
      {children}
    </div>
  );
};

export default Container;
