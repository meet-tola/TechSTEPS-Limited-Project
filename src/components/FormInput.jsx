/* eslint-disable react/prop-types */
const FormInput = ({ label, id, type, value, placeholder, options, onChange, columnWidth }) => {
  const columnClass = `w-full md:${columnWidth} px-3 mb-6 md:mb-0`;

  return (
    <div className={columnClass}>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      {type === 'select' ? (
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={id}
            value={value}
            onChange={onChange}
          >
            <option value="" disabled>Select {label}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      ) : type === 'checkbox' ? (
        <div className="flex items-center absolute mb-7">
          {options.map((option, index) => (
            <div key={index} className="mr-[72px]">
              <input
                type="checkbox"
                id={`${id}-${index}`}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const updatedValue = isChecked
                    ? [...value, option.value]
                    : value.filter((val) => val !== option.value);
                  onChange({ target: { id, value: updatedValue } });
                }}
                className="mr-10"
              />
              <label htmlFor={`${id}-${index}`} >{option.label}</label>
            </div>
          ))}
        </div>
      ) : (
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormInput;