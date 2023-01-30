// export function Switch() {

//     const [checked, setCheked] = useState(false);
//     return (
//         <div>
//             <span>RUS</span>
//             <label className="switch">
//                 <input type="checkbox" defaultChecked={checked} onChange={() => setCheked(!checked)} />
//                 <span className="slider" />
//             </label>
//             <span>ENG</span>
//         </div>
//     )
// }


import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux'

import { updateLang } from "./react";

export function Switch() {

    const checked = useSelector(state => state.boolean)

    const dispatch = useDispatch();

    function handleChange() {
        dispatch(updateLang(event.target.checked))
    }

    return (
        <div className="wrapper-switch">
            <span>РУС</span>
            <label className="switch">
                <input type="checkbox" defaultChecked={checked} onChange={handleChange} />
                <span className="slider" />
            </label>
            <span>ENG</span>
        </div>
    )
}