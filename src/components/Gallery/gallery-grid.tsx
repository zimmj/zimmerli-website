import React from "react"
import "./gallery-grid.css"

const GalleryGrid: React.FunctionComponent = (children) => {
    return (
        <div className="gallery-grid">
            {{children}}
        </div>
    )
}