import Link from "next/link";

function KinoSlug({ doc, size }) {
  return (
    <div>
      <ul className="flex  gap-[20px] flex-wrap gap-x-9 gap-y-5 place-content-center ">
        {doc &&
          size >= 1 &&
          doc.map((s) => {
            return (
              <li
                key={doc.id}
                className="rounded-xl bg-base-100 shadow-2xl max-w-[350px] flex flex-col px-[15px] py-[10px] items-center"
              >
                <Link href={`/filt/${s.id}`}>
                  <img
                    className="rounded-md mt-[20px]"
                    src={s.image}
                    alt={s.name}
                  />
                  <div className="py-[20px]">
                    <h2 className="text-secondary text-center text-xl">
                      {s.name}
                    </h2>
                  </div>
                </Link>
              </li>
            );
          })}
        {doc && size < 1 && (
          <h2 className="flex place-content-center font-bold text-[25px]">
            Kinolar mavjud emas !
          </h2>
        )}
      </ul>
    </div>
  );
}

export default KinoSlug;
