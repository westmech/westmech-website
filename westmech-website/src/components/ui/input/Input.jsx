
export const Input = ({
    inputType,
    placeholder,
    required,
    onChange,
    width,
}) => {
    const greyBorder = "rgb(209 213 219 / var(--tw-border-opacity))";
    const highlight = "#017FE0";
    return (
        <input
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            type={inputType}
            style={{ width: width || "100%" }}
            onFocus={(e) => (e.target.style.borderColor = highlight)}
            onBlur={(e) => (e.target.style.borderColor = greyBorder)}
            className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3 w-full pr-10`}
        />
    )
}


