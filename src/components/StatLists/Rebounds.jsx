import ReboundsBlurb from "../blurbs/ReboundsBlurb";
import rebounds from "../../data/rebounds";
import StatCard from "../StatCard";
function Rebounds({ setReboundsModal }) {
     return (
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
               <ReboundsBlurb />
               <div className="w-full md:w-1/2 p-2 bg-black bg-opacity-20 backdrop-blur-sm drop-shadow-lg text-white backdrop-saturate-200">
                    <div className="flex items-center gap-2">
                         <h2 className="text-3xl mb-3 font-bold">Rebounds</h2>
                         <span>(rpg)</span>
                    </div>
                    <ul className="mb-3">
                         {rebounds.reb.pl.slice(0, 4).map((player) => {
                              return (
                                   <StatCard key={player.pid} player={player} />
                              );
                         })}
                    </ul>
                    <button
                         className="py-1 px-2 bg-[#552583] font-bold text-white"
                         onClick={() => setReboundsModal(true)}
                    >
                         Show All
                    </button>
               </div>
          </div>
     );
}
export default Rebounds;
