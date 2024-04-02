function Filter() {
  return (
    <div className="w-full">
      <div className="mt-[20px] flex flex-col sm:flex-row sm:items-center gap-3">
        <label className="input input-bordered flex items-center gap-2">
          Kino nomi:
          <input
            type="text"
            className="grow"
            placeholder="kino qidirish ishlamayabdi"
          />
        </label>
        <button className="btn btn-outline ">Kino qidirish</button>
      </div>
    </div>
  );
}

export default Filter;
