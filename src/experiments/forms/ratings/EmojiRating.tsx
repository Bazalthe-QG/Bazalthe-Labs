// Emoji feedback rating
export default function EmojiRating() {
  return (
    <div className="flex gap-2">
      {['😞', '😐', '🙂', '😊', '🤩'].map((e, i) => (
        <button key={i} className="text-2xl hover:scale-125 transition-transform">{e}</button>
      ))}
    </div>
  )
}
