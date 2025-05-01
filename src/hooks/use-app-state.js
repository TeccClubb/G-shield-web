import { useSelector } from "react-redux";

export const useAppState = () => useSelector((state) => state.app);
