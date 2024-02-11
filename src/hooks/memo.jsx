import React from 'react'
//there is concept in react cause we can enchance optimazation and inc performance of their application using memo ,we can control on re-render child component in the p.c
//when we pass data parent to child as props so memo hooks does not work and re-render the child component.

//useCallback :when you pass fun parent to child ,child component do not re-render when p.c render only when child component re-render when state is updated in c.component

const Memo = ({value}) => {
   
  console.log(`kitni baar chala 0++ value`)  
  return (
    <div></div>
  )
}

export default React.memo(Memo)