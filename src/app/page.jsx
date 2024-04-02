import CarKino from "./components/CarKino";
import KinoList from "./components/KinoList";

// import Filter from "./components/Filter";

export const metadata = {
  title: "Kinoizlovchi",
  description: "kino izlovchi site",
};

export default function Home() {
  return (
    <>
      <main className="max-container">
        {/* <Filter /> */}
        <CarKino />
        <KinoList />
      </main>
    </>
  );
}
