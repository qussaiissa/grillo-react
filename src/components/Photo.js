import React from 'react';
const image=(name)=>`/images/${name}`;
export default function Photo({name,className='',style={}}){return <div className={`slot has ${className}`} style={{backgroundImage:`url(${image(name)})`,...style}} role="img" aria-label="GRILLO restaurant food photography"/>}
