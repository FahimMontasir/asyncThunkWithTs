import { useSelector, TypedUseSelectorHook, RootStateOrAny } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootStateOrAny> =
  useSelector;
