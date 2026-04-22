// Pricing card
export default function Pricing() {
  return (
    <div className="w-full rounded-xl border-2 border-violet-500 bg-white p-5 text-center">
      <span className="text-xs font-bold text-violet-500 uppercase tracking-wider">Pro</span>
      <p className="text-3xl font-bold text-gray-900 mt-2">$29<span className="text-sm font-normal text-gray-400">/mo</span></p>
      <div className="mt-4 space-y-2 text-sm text-gray-600 text-left">
        <p>✓ Unlimited projects</p>
        <p>✓ Priority support</p>
        <p>✓ Advanced analytics</p>
      </div>
      <button className="mt-4 w-full py-2 rounded-lg bg-violet-500 text-white text-sm font-semibold">Get started</button>
    </div>
  )
}
