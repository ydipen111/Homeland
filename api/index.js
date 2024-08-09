import express from 'express'

const app = express();


app.get("/test", (req, res) => {

  const months = 48;
  const tuitionFee = 4000;
  const livingCost = 10000;

  return res.json({
    total: `Total Cost for course completion is:${months * tuitionFee + livingCost * months} `
  })



  res.json()
})





app.listen(3000, () => {
  console.log('Server is running on port 30000');
})
