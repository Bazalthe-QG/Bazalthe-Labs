// Elastic entrance animation
export default function ElasticIn() {
  return (
    <>
      <style>{`@keyframes elasticIn{0%{opacity:0;transform:scale(0.3)}50%{transform:scale(1.05)}70%{transform:scale(0.95)}100%{opacity:1;transform:scale(1)}}`}</style>
      <div className="w-16 h-16 rounded-xl bg-emerald-500" style={{ animation: 'elasticIn 0.8s ease-out both' }} />
    </>
  )
}
