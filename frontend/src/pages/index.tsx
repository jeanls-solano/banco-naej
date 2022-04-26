import { Cronometro } from "../components/Cronometro";
import {Menu} from "../components/Menu";

export default function Home() {
  return (
    <div className="container">
      <Menu />
      <h2>Cronômetro</h2>
      <Cronometro />
    </div>
  )
}
