import React from 'react'
import '../../assets/styles/FullSpinner.css'

export default function FullSpinner() {
    return (
        <div className="fullpage_spinner">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}
