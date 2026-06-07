export default function Results() {
  const finalResults = ["Classement", "Athlète", "Points"];
  const detailResults = [
    "Athlète",
    "Pos MU",
    "Pos Dips",
    "Pos Pull",
    "Pos Push",
  ];

  const rows = [
    {
      classement: "Femmes",
      athlete: "",
      points: "",
    },
    {
      classement: "1",
      athlete: "Alexia",
      points: "60",
    },
    {
      classement: "-",
      athlete: "-",
      points: "-",
    },
    {
      classement: "HeavyWeight",
      athlete: "-",
      points: "-",
    },
    {
      classement: "1",
      athlete: "Adrien",
      points: "55",
    },
    {
      classement: "2",
      athlete: "Nicolas",
      points: "48",
    },
    {
      classement: "3",
      athlete: "Hugo",
      points: "45",
    },
    {
      classement: "-",
      athlete: "-",
      points: "-",
    },
    {
      classement: "MiddleWeight",
      athlete: "-",
      points: "-",
    },
    {
      classement: "1",
      athlete: "Bolow",
      points: "54",
    },
    {
      classement: "2",
      athlete: "Allan",
      points: "54",
    },
    {
      classement: "3",
      athlete: "Stéphane",
      points: "40",
    },
    {
      classement: "-",
      athlete: "-",
      points: "-",
    },
    {
      classement: "LightWeight",
      athlete: "-",
      points: "-",
    },
    {
      classement: "1",
      athlete: "Papache",
      points: "57",
    },
    {
      classement: "2",
      athlete: "Thomas",
      points: "47",
    },
    {
      classement: "3",
      athlete: "Soufyane",
      points: "44",
    },
    {
      classement: "4",
      athlete: "Maxime",
      points: "40",
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-evenly gap-6">
      <div className="border-2 p-6 rounded-xl w-full text-xs md:text-sm lg:text-base text-center bg-[#800020] font-sans dark:bg-[#800020]">
        Les Résultats Ultimate CUB CUP 2026 :
      </div>

      <div className=" overflow-x-auto">
        <table className=" border-collapse text-xs md:text-sm lg:text-base">
          <thead>
            <tr className="bg-[#800020] text-white">
              {finalResults.map((header) => (
                <th key={header} className={"border px-3 py-1 text-center"}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
              >
                <td className="border px-3 py-1 text-black max-w-3xs ">
                  {row.classement}
                </td>
                <td className="border px-3 py-1 text-black">{row.athlete}</td>
                <td className="border px-3 py-1 text-black">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
