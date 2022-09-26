function StatCard({ player }) {
     // destructure player object
     const { fn, ln, pos, val } = player;
     return (
          // returns list item with full name, position, and stat value
          <li className="border-b border-white/20">
               <div className="flex items-center justify-between gap-2 py-2">
                    <div className="flex items-center gap-5">
                         <h5 className="font-semibold">
                              {fn} {ln}
                         </h5>
                         <span className="font-bold bg-[#FDB927] px-2 text-black">
                              {pos}
                         </span>
                    </div>
                    <span className="font-semibold">
                         {/* if value starts with 0 and includes a decimal than convert example 0.63 to 63.0 else just return value */}
                         {val.toString().startsWith(0) &&
                         val.toString().includes(".")
                              ? `${(val * 100).toFixed(1)} %`
                              : val}
                    </span>
               </div>
          </li>
     );
}
export default StatCard;
