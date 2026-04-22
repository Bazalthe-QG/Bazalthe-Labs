// Striped progress bar
export default function StripedBar() {
  return (
    <>
      <style>{`@keyframes stripeMove{from{background-position:0 0}to{background-position:20px 0}}`}</style>
      <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-3/5 rounded-full" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%)', backgroundSize: '20px 20px', backgroundColor: '#7c3aed', animation: 'stripeMove 0.5s linear infinite' }} />
      </div>
    </>
  )
}
