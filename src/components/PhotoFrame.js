import React from 'react';

export const PhotoFrame = ({url,title}) => {
   return(
   <div>
   <img src={url} />
   <p>{title}</p>
   </div>
   )
}