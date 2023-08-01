import React from "react"

const GalleryGrid: React.FunctionComponent<GalleryPictureProps> = ({children, windowWidth}) => {
    return (
        <div className="flex mt-4 w-full" id="Gallery">
            <div className="pl-8 w-full" style={{
                    display: "grid",
                    gap: "5px",
                    gridTemplateColumns:`repeat(auto-fit, ${columnWidthFunction(windowWidth)}px)`,
                    gridTemplateRows: `repeat(auto-fit, ${columnWidthFunction(windowWidth)}px)`,
                    gridAutoFlow: "dense",
            }}>
                {children}
            </div>
        </div>
    )
}

export interface GalleryPictureProps {
    children: React.ReactNode;
    windowWidth: number;
} 


// user hard coded steps to lower amount of re-renders and re-loading pictures
export const columnWidthFunction = (windowWidth: number): number => {
    if (windowWidth < 600) {
        return 100
    } else if (windowWidth < 900) {
        return 150
    } else if (windowWidth < 1200) {
        return 200
    } else if (windowWidth < 1800) {
        return 300
    } else {
        return 450
    }
}

export default GalleryGrid;