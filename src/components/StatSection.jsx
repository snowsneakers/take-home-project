import { useState } from "react";
import points from "../data/points";
import rebounds from "../data/rebounds";
import threes from "../data/threepointers";
import bgImage from "../assets/image-9.jpeg";
import Modal from "./Modal";
import Points from "./StatLists/Points";
import Rebounds from "./StatLists/Rebounds";
import Threes from "./StatLists/Threes";
function StatSection() {
     // state for conditionally rendering modal
     const [pointsModal, setPointsModal] = useState(false);
     const [reboundsModal, setReboundsModal] = useState(false);
     const [threesModal, setThreesModal] = useState(false);

     return (
          <main className="relative px-2 py-5 mb-10" id="stats">
               {/* background image */}
               <img
                    src={bgImage}
                    alt=""
                    className="hidden md:block opacity-20 absolute left-0 top-0 w-full h-full"
               />
               {/* top four of each stat plus blurb about stat */}
               <div className="flex flex-col items-center gap-5">
                    <Points setPointsModal={setPointsModal} />
                    <Rebounds setReboundsModal={setReboundsModal} />
                    <Threes setThreesModal={setThreesModal} />
               </div>
               {/* modals conditionally render if state changes to true */}
               {pointsModal && (
                    <section className="w-full absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm backdrop-saturate-200">
                         <Modal
                              setPointsModal={setPointsModal}
                              points={points.pts.pl}
                              pointsModal={pointsModal}
                         />
                    </section>
               )}
               {reboundsModal && (
                    <section className="w-full absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm backdrop-saturate-200">
                         <Modal
                              setReboundsModal={setReboundsModal}
                              rebounds={rebounds.reb.pl}
                              reboundsModal={reboundsModal}
                         />
                    </section>
               )}
               {threesModal && (
                    <section className="w-full absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm backdrop-saturate-200">
                         <Modal
                              setThreesModal={setThreesModal}
                              threes={threes.tpp.pl}
                              threesModal={threesModal}
                         />
                    </section>
               )}
          </main>
     );
}
export default StatSection;
