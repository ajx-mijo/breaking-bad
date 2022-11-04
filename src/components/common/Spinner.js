import LoadImage from '../../../src/images/bbwalter.gif'

const Spinner = () => {


  return (
    <>
      <h1 className='spinner'>Cooking...</h1>
      <img src={LoadImage} alt='Spinner' className='spinner' />
    </>
  )
}

export default Spinner