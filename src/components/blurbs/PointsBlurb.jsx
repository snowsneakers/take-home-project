function PointsBlurb() {
     return (
          <div className="bg-black/20 backdrop-blur-sm backdrop-saturate-200 drop-shadow-lg text-white flex flex-col w-full md:w-1/2 leading-8 p-2 min-h-auto md:min-h-[272px]">
               <h3 className="text-3xl mb-3">Scoring This Season</h3>
               <p>
                    The top four scorers on the Lakers this season were LeBron
                    James, Anthony Davis, Dennis Schroder, and Andre Drummond.
                    James averaged 23.3 points per game, Davis averaged 17.4
                    points, Schroder averaged 14.3 points, and Drummond averaged
                    9 points. Stats were calculated by dividing total number of
                    points by total minutes played.
               </p>
          </div>
     );
}
export default PointsBlurb;
