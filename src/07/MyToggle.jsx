import MyToggleBok from "./MyToggleBok"
export default function MyToggle() {
  return (
    <div className="w-10/12 grid grid-cols-2 gap-4">
      <MyToggleBok color="blue"/>
      <MyToggleBok color="orange"/>
    </div>
  )
}
