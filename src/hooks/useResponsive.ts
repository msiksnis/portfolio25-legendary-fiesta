import { useMediaQuery } from "react-responsive";

export const useScreenSizes = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return {
    isMobile,
  };
};
