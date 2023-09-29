import { dayjs } from "../utils/extend"

const Test = () => {
  console.log(dayjs().weekday(7).day());
  console.log(dayjs().day());
  console.log("end of month test -> ", dayjs().year(2023).month(8).endOf("month"));
  console.log("end of month test weekday -> ", dayjs().locale("en-gb").day());
  console.log("end of month test weekday -> ", dayjs().locale("en-gb").weekday());
  
  
  return (
    <div>Test</div>
  )
}

export default Test