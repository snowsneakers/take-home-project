function ModalStats({ player, threesModal }) {
     return (
          <li
               key={player.pid}
               className="border-b border-white/20 last-of-type:border-none"
          >
               <div className="flex items-center justify-between gap-2 py-2">
                    <div className="flex items-center gap-5">
                         <h5 className="font-semibold">
                              {player.fn} {player.ln}
                         </h5>
                         <span className="font-bold bg-[#FDB927] px-2 text-black">
                              {player.pos}
                         </span>
                    </div>
                    {/* threes modal needs to be converted so if three modal is showing convert value if false show regular value */}
                    <span className="font-semibold">
                         {threesModal
                              ? `${(player.val * 100).toFixed(1)} %`
                              : player.val}
                    </span>
               </div>
          </li>
     );
}
export default ModalStats;
