const CreateTodo = ({ toggleTheme }) => {
  return (
    <div
      className={`h-[4.8rem] w-full ${
        toggleTheme ? "bg-darkMode-veryDarkDesaturatedBlue" : "bg-white"
      } rounded-lg flex items-center px-5 gap-x-5`}
    >
      <div className="h-8 w-8 rounded-full border border-lightMode-lightGrayishBlue"></div>

      <input
        type="text"
        placeholder="Create a new todo..."
        className="text-lg outline-none w-2/3 text-lightMode-darkGrayishBlue bg-transparent"
      />
    </div>
  );
};

export default CreateTodo;
