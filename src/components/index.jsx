import { useState } from "react"
import data from "./data"

//*Single selection

//* Multiple selection


export default function Foldable() {


    const [selected, setSelected] = useState(null);

    function handleTheSingleSelection(currentId) {
        console.log(currentId);
    }

    return  <div className="wrapper">
        <div className="foldable">
            {
                data && data.length > 0 ?(
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick =
                                {
                                ()=>handleTheSingleSelection(dataItem.id)
                          } className="title">
                                
                            <h3>{dataItem.question}</h3>
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