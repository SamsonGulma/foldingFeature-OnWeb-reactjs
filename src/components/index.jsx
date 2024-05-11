//*Single selection

import { useState } from "react"
import { data } from "./data"

//* Multiple selection


export default function Foldable() {

    const [selected, setSelected] = useState(null);

    return  <div className="wrapper">
        <div className="foldable">
            {
                data && data.length > 0 ?(
                    data.map((dataItem) => (
                        <div className="item">
                          <div className="title">
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