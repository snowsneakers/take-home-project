import ModalStats from "./ModalStats";
// sending these props to conditionally render the wanted modal
function Modal({
     setPointsModal,
     points,
     pointsModal,
     rebounds,
     setReboundsModal,
     reboundsModal,
     threes,
     setThreesModal,
     threesModal,
}) {
     // this function will set the state back to false to close modal depending on what state is true
     const handleClick = () => {
          if (pointsModal) {
               setPointsModal(false);
          } else if (reboundsModal) {
               setReboundsModal(false);
          } else {
               setThreesModal(false);
          }
     };

     return (
          <div className="w-full md:w-3/4 sticky md:absolute z-10 top-0 md:top-1/2 left-1/2 transform -translate-x-0 md:-translate-x-1/2 -translate-y-0 md:-translate-y-1/2 px-10 py-2 bg-black/95 backdrop-blur-sm drop-shadow-lg text-white backdrop-saturate-200 rounded-md">
               <div className="flex items-center justify-between mb-3">
                    {/* title on modal changes depending on state */}
                    <h2 className="text-3xl font-bold">
                         {pointsModal
                              ? "Points"
                              : reboundsModal
                              ? "Rebounds"
                              : "Three Percentage"}
                    </h2>
                    <button className="font-bold" onClick={handleClick}>
                         X
                    </button>
               </div>
               {/* ordered list displays in modal. Modal is determined by which stat state is true */}
               {/* loop through given array if state is true */}
               <ol className="mb-3 list-decimal">
                    {pointsModal
                         ? points.map((player) => {
                                return (
                                     <ModalStats
                                          key={player.pid}
                                          player={player}
                                     />
                                );
                           })
                         : reboundsModal
                         ? rebounds.map((player) => {
                                return (
                                     <ModalStats
                                          key={player.pid}
                                          player={player}
                                     />
                                );
                           })
                         : threes.map((player) => {
                                return (
                                     <ModalStats
                                          key={player.pid}
                                          player={player}
                                          threesModal={threesModal}
                                     />
                                );
                           })}
               </ol>
          </div>
     );
}
export default Modal;
