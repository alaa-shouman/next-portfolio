'use client'
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

interface CursorProps {
  color: string;
}

export const Cursor: React.FC<CursorProps> = ({color}) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2} 
      outerAlpha={0}
      innerStyle={{
        backgroundColor: color
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
      clickables={[
        'a','button','input','textarea','.link','[role="button"]'
      ]}
    />
  )
}

export default Cursor