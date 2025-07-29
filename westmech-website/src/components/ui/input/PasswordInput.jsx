import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const PasswordInput = ({
    placeholder,
    onChange
}) => {
    const greyBorder = "rgb(209 213 219 / var(--tw-border-opacity))";
    const highlight = "#017FE0";
    const [visible, setVisible] = useState(false);
    return (
        <div className="relative">
            <input
                placeholder={placeholder}
                type="password"
                onChange={onChange}
                required
                onFocus={(e) => (e.target.style.borderColor = highlight)}
                onBlur={(e) => (e.target.style.borderColor = greyBorder)}
                className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3 w-full pr-10`}
            />
            {visible ? (
                <BsEye
                onClick={() => setVisible(false)}
                className="absolute h-[20px] w-[20px] right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                />
            ) : (
                <BsEyeSlash
                onClick={() => setVisible(true)}
                className="absolute h-[20px] w-[20px] right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                />
            )}
        </div>
    )
}