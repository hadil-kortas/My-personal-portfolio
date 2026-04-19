import EarthCanvasRaw from "./Earth";
import BallCanvasRaw from "./Ball";
import ComputersCanvasRaw from "./Computers";
import StarsCanvasRaw from "./Stars";
import withCanvasGuard from "./withCanvasGuard";

const EarthCanvas = withCanvasGuard(EarthCanvasRaw);
const BallCanvas = withCanvasGuard(BallCanvasRaw);
const ComputersCanvas = withCanvasGuard(ComputersCanvasRaw);
const StarsCanvas = withCanvasGuard(StarsCanvasRaw);

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };
