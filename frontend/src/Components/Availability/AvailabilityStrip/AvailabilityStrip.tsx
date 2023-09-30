const AvailabilityStrip = () => {
  const heading = "availability";

  return (
    <div className="relative">
      <div className="absolute grid px-4 py-8 text-clr-primary rounded-l-2xl bg-clr-gradTwo place-content-center">
        {heading
          .toUpperCase()
          .split("")
          .map((letter, i) => {
            return <p key={i}>{letter}</p>;
          })}
      </div>
    </div>
  );
};

export default AvailabilityStrip;
