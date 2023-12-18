import { FieldError } from "react-hook-form";

interface InputPropType {
  registerForm: any;
  value?: string;
  func?: () => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  type: "text" | "password" | "email" | "number" | "textarea" | "checkbox";
  error?: FieldError | null;
  placeholder: string;
}

const Inputs = ({
  registerForm,
  value,
  func = () => {},
  setValue,
  type,
  error,
  placeholder,
}: InputPropType) => {
  return (
    <input
      className={`w-full lg:w-[290px] px-3 py-1 mb-1 border-2 border-gray-200 rounded-md 
      focus:outline-none
      ${
        error
          ? "focus:border-red-400 focus:ring focus:ring-red-200"
          : "focus:border-violet-400 focus:ring focus:ring-violet-200"
      }
    `}
      onChange={(e) => {
        console.log(e.target.value);
        setValue && setValue(e.target.value);
        func();
      }}
      placeholder={`Enter ${placeholder}`}
      type={type}
      defaultValue={value}
      {...registerForm}
    />
  );
};

export default Inputs;
