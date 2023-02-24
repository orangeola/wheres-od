import wallyImg from '../img/schoolwally.jpg';
import "../styles/Body.css"
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 
import {db, app} from "../firebase/config"


function Body(props) {

  async function coords(event){
    let bounds = event.target.getBoundingClientRect();
    let x = event.clientX - bounds.left;
    let y = event.clientY - bounds.top;

    const docRef = doc(db, "data", "characters");
    const docSnap = await getDoc(docRef);

    if(x >= docSnap.data().cardinal.minX && 
       x <= docSnap.data().cardinal.maxX &&
       y >= docSnap.data().cardinal.minY && 
       y <= docSnap.data().cardinal.maxY){
        props.setCharTrue("cardinal");
      }

    if(x >= docSnap.data().wifi.minX && 
       x <= docSnap.data().wifi.maxX &&
       y >= docSnap.data().wifi.minY && 
       y <= docSnap.data().wifi.maxY){
        props.setCharTrue("wifi");
      }

    if(x >= docSnap.data().odlaw.minX && 
       x <= docSnap.data().odlaw.maxX &&
       y >= docSnap.data().odlaw.minY && 
       y <= docSnap.data().odlaw.maxY){
       props.setCharTrue("odlaw");
      }
  }

  return (
    <div className="Body">
      <img src={wallyImg} alt="Crowded school" onClick={coords}></img>
    </div>
  );
}

export default Body;
