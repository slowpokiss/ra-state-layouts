export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className={`icon ${icon}`} onClick={onSwitch}></div>
  )
}
