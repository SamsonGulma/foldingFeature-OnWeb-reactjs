import { useState } from "react"
import './styles.css'
import data from "./data"

//*Single selection

//* Multiple selection


export default function Foldable() {


    const [selected, setSelected] = useState(null);

    function handleTheSingleSelection(currentId) {
        console.log(currentId)
        for (var i = 0; i === currentId; i++){
            <div>
                <h3>
                        {i}
                    </h3> 
                
            </div>
            
            setSelected(currentId)
                    

        }
        
    }

    return  <div className="wrapper">
        <div className="foldable">
            {
                data && data.length > 0 ?(
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick ={ ()=>handleTheSingleSelection(dataItem.id)} className="title">
                                
                            <h4 href="somewhere">{dataItem.question}</h4>
                                <span>+</span>
                            </div>

                            {
                                selected === dataItem.id ? 
                                    <div className="content">{dataItem.answer} </div>

                            : null 
                            }

                            </div>
                    ))
                ) : (
                        <div> No Data Found </div>
                )
            }
        </div>
        </div>
}