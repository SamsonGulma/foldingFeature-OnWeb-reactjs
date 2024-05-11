import { useState } from "react"
import './styles.css'
import data from "./data"

//*Single selection

//* Multiple selection


export default function Foldable() {


    const [selected, setSelected] = useState(null);

    function handleTheSingleSelection(currentId) {
        
    }

    return  <div className="wrapper">
        <div className="foldable">
            {
                data && data.length > 0 ?(
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick ={ ()=>handleTheSingleSelection(dataItem.id)} className="title">
                                
                            <a href="somewhere">{dataItem.question}</a>
                                <span>+</span>
                            </div>
                            </div>
                    ))
                ) : (
                        <div> No Data Found </div>
                )
            }
        </div>
        </div>
}