import { useEffect } from "react";

export default function useRemoveScrollWhenModalIsOpen(isModalVisible: boolean) {
  useEffect(() => {
    const handleScrollBehavior = () => {
      if (isModalVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    handleScrollBehavior();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalVisible]);
}
