import ViewStateUi from "@/app/UI/ViewStateUi";

export default function ListView({ toggleTheme, handleViewState }) {
  return (
    <div
      className={`lg:hidden h-[4.8rem] w-full ${
        toggleTheme ? "bg-darkMode-veryDarkDesaturatedBlue" : "bg-white"
      } rounded-lg px-5`}
    >
      <ViewStateUi
        handleViewState={handleViewState}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}
