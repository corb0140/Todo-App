import Header from "./components/Header/Header";
import TodoList from "./components/List/TodoList";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-lightMode-veryLightGrayishBlue">
      <Header />
      <TodoList />
      <p className="absolute bottom-20 left-[50%] -translate-x-[50%] text-[1.28rem] text-lightMode-darkGrayishBlue">
        Drag and drop to reorder list
      </p>
    </main>
  );
}
