import Link from "next/link";
import YouTube from "react-youtube";

function KinoMult({ doc, size }) {
  const opts = {
    height: "390",
    width: "100%",
    PlayerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div>
      <ul className="flex flex-col gap-5">
        {doc &&
          size >= 1 &&
          doc.map((s) => {
            return (
              <li key={s.id}>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img src={s.image} alt="Album" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{s.name}</h2>
                    <div className="flex flex-col gap-2 mt-[10px]">
                      <span className="flex flex-wrap gap-2 font-bold">
                        Janri:
                        <span className="flex capitalize flex-wrap gap-1 font-normal">
                          {s.janri.map((l) => {
                            return <p key={l}>{l}</p>;
                          })}
                        </span>
                      </span>
                      <span className="flex flex-wrap gap-2 font-bold">
                        Tili: <p className="font-normal capitalize">{s.tili}</p>
                      </span>
                      <span className="flex flex-wrap gap-2 font-bold">
                        Davlati:
                        <p className="font-normal capitalize">{s.davlati}</p>
                      </span>
                      <span className="flex flex-wrap gap-2 font-bold">
                        Yili: <p className="font-normal capitalize">{s.yili}</p>
                      </span>
                      <span className="flex flex-wrap gap-2 font-bold">
                        Davomiyligi:
                        <p className="font-normal capitalize">
                          {s.davomiyligi}
                        </p>
                      </span>
                    </div>
                    <div className="flex flex-col mt-[20px] gap-5">
                      <Link
                        href={s.kinosilkasi}
                        target="_blank"
                        className="btn btn-success btn-outline "
                      >
                        Telegramdan yuklash
                      </Link>
                      <Link
                        className="btn btn-secondary btn-outline"
                        target="_blank"
                        href="https://t.me/kino_iz_olami"
                      >
                        Telegram kanalimiz
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2 mt-[10px]">
                      <h2 className="font-bold text-center">Kino Traileri</h2>
                      <YouTube videoId={s.yt} opts={opts} onReady={onReady} />
                    </div>
                  </div>
                </div>
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

export default KinoMult;
