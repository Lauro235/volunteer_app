import Button from "../Generic/Button";

const Urgent = () => {
  return (
    <div className="grid gap-9">
      <h1 className="text-2xl font-semibold">Slots needed urgently!</h1>
      <ul className="grid gap-3 text-base font-medium">
        <li>2023-01-01: Two slots available</li>
        <li>2023-01-02: One slot available</li>
        <li>2023-01-03: Two slots available</li>
      </ul>
      <Button text="Book Now"/>
    </div>
  );
};

export default Urgent;
