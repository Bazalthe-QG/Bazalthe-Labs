// Text shimmer animation effect
export default function TextShimmer() {
  return (
    <>
      <style>{`@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
      <p
        className="text-sm font-semibold"
        style={{
          background:
            'linear-gradient(90deg, var(--c-muted) 25%, var(--c-text) 50%, var(--c-muted) 75%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'shimmer 2s infinite',
        }}
      >
        Generating content…
      </p>
    </>
  )
}
