import React from 'react'

type StagesProps = {
  active: boolean,
  completed: boolean,
  children: React.ReactNode,
}

function Stages({ active, completed, children } : StagesProps) {
  return (
  <>
    {
      completed ? (
        <div style={{width: '5ch', aspectRatio: 1/1}} className={`flex items-center justify-center bg-green-500 rounded-full text-lg text-white font-semibold`}>
          &#10003;
        </div>
    ): (
      <div style={{width: '5ch', aspectRatio: 1/1}} className={`flex items-center justify-center ${active ? "bg-primary" : "bg-muted-foreground"} rounded-full text-lg text-white font-semibold`}>
          {children}
        </div>
        )}
      </>
  )
}

export default Stages