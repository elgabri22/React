import React from "react";


const Image=({src,alt,width,description})=>{
    return (
        <>
            <div>
                <img id="imagen" src={src} alt={alt} width={width}/>
                <div>
                    {description}
                </div>
            </div>
        </>
    );
}

export default Image;