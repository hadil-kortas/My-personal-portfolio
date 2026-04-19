import CanvasErrorBoundary from "./CanvasErrorBoundary";

const withCanvasGuard = (CanvasComponent) => {
  const Guarded = (props) => (
    <CanvasErrorBoundary>
      <CanvasComponent {...props} />
    </CanvasErrorBoundary>
  );
  Guarded.displayName = `CanvasGuard(${
    CanvasComponent.displayName || CanvasComponent.name || "Canvas"
  })`;
  return Guarded;
};

export default withCanvasGuard;
