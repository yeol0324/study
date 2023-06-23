import { createContext, useContext } from "react";
const InputContext = createContext({
  id: "",
  value: "",
  type: "text",
  onChange: () => {},
});

interface wrapper {
  id: any;
  value: any;
  type: any;
  onChange: any;
  children: any;
}
const InputWrapper = ({ id, value, type, onChange, children }: wrapper) => {
  const contextValue = { id, value, type, onChange };
  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};
const Input = ({ ...props }) => {
  const { id, value, type, onChange } = useContext(InputContext);
  return (
    <input id={id} value={value} type={type} onChange={onChange} {...props} />
  );
};
const Label = ({ children, ...props }: any) => {
  const { id } = useContext(InputContext);
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};
InputWrapper.Input = Input;
InputWrapper.Label = Label;

export default InputWrapper;
