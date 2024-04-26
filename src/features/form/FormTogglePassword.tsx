import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useCustomForm } from "./FormContext/useCustomForm";

export const FormTogglePassword = () => {
  const { isShowPassword, togglePassword } = useCustomForm();

  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2"
      type="button"
      onClick={togglePassword}
    >
      {isShowPassword ? (
        <BiSolidShow
          aria-label="Show Password"
          className="text-2xl text-slate-400 transition-all hover:text-[26px]"
        />
      ) : (
        <BiSolidHide
          aria-label="Hide Password"
          className="text-2xl text-slate-400 transition-all hover:text-[26px]"
        />
      )}
    </button>
  );
};
