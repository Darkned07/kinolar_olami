import CarKino from "./components/CarKino";
import KinoList from "./components/KinoList";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";

export const metadata = {
  title: "Kinoizlovchi",
  description: "kino izlovchi site",
};

export default function Home() {
  return (
    <>
      <main className="max-container">
        <Filter />
        <CarKino />
        <KinoList />
        <Pagination />
      </main>
    </>
  );
}
