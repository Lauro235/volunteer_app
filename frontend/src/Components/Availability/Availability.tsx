
const Availability = () => {
  const heading = 'availability'
  
  return (
    <div className="absolute right-0 grid px-4 py-8 text-clr-primary rounded-l-2xl bg-clr-gradTwo place-content-center">
      {
        heading.toUpperCase().split("").map((letter, i) => {
          return (
            <p key={i} >{letter}</p>
          )
        })
      }
    </div>
  )
}

export default Availability