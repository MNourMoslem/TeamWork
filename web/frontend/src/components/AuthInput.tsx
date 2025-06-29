import React  from 'react';

type AuthInputProps = {
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  header?: string;
  helperText?: string;
};

function AuthInput({ type, value, onChange, header = "", helperText = ""}: AuthInputProps) {
  return (
    <div className="relative">
    <input 
      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      
      type={type} 
      id="floating_filled" 
      placeholder=""
      onChange={onChange}
      value={value}
      required
    />
    
    <label 
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      htmlFor="floating_filled" 
    >
      {header}
    </label>

    <p>{helperText}</p>
    </div>
  );
}

export default AuthInput;
