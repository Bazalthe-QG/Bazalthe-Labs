// Indeterminate bar
export default function IndeterminateBar() {
  return (
    <>
      <style>{`@keyframes indeterminate{0%{left:-40%;width:40%}50%{left:20%;width:60%}100%{left:100%;width:40%}}`}</style>
      <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
        <div className="absolute h-full bg-violet-500 rounded-full" style={{ animation: 'indeterminate 1.5s ease infinite' }} />
      </div>
    </>
  )
}
