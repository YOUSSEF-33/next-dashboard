const Checkbox = ({ label, checked, onChange }) => {
    return (
      <div className="flex items-center space-x-2 text-gray-300">
        <input
          type="checkbox"
          id="Checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <label htmlFor="Checkbox" className="cursor-pointer">
          {label}
        </label>
      </div>
    );
  };
  
  export default Checkbox;