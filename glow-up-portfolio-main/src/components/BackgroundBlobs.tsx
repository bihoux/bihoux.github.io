export function BackgroundBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[120px] animate-[blob_18s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px] animate-[blob_22s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px] animate-[blob_26s_ease-in-out_infinite]" />
    </div>
  );
}
