import { useRecoilState } from "recoil";
import { hourSelector, minutesState } from "../atoms";

export default function Selector() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const handleMinutes = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event?.currentTarget?.value);
  };
  const handleHours = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event?.currentTarget?.value);
  };
  return (
    <div>
      <input value={minutes} onChange={handleMinutes} placeholder="Minutes" />
      <input value={hours} onChange={handleHours} placeholder="Hours" />
    </div>
  );
}
