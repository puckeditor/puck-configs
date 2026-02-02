import { useRef, useEffect, Ref } from "react";
import { registerOverlayPortal } from "@puckeditor/core";

const useRegisterPortal = <T extends HTMLElement>(): Ref<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    return registerOverlayPortal(ref.current);
  }, []);

  return ref;
};

export default useRegisterPortal;
