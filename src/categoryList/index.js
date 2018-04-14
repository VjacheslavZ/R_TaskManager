import React from 'react'

import { ShortInfo } from '../categoryShortInfo'
import { Control } from "../categoryControls";

export const List = () => {
    return(
        <li>
            <div className="category-list__info">
                <input type="checkbox"/>
                <ShortInfo/>
                <Control/>
            </div>

            <div className="category-list__full-desc">
                <textarea/>
            </div>
        </li>
    )
};