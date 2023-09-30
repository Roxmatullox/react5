import React, { Fragment } from 'react'

const Home = ({debts}) => {
  let sum = 0
  let bestSum = 0
  debts.map((el)=>{
    sum = sum+ +el.debt
    if (el.debt > bestSum) {
      bestSum = el.debt
    }
    return sum
  })

  return (
    <Fragment >
      <section className='mt-5'>
        <div className="container">
          <h1 className='alert bg-danger'>Sizdan qarzdorlar soni : <span>{debts.length} kishi </span></h1>
          <h2 className='alert bg-primary'>Umumiy qarz summasi : <span>{sum}</span> $ </h2>
          <h2 className='alert bg-secondary'>Eng katta qarz summasi : <span>{bestSum} $ </span></h2>
        </div>
      </section>
    </Fragment>
  )
}

export default Home