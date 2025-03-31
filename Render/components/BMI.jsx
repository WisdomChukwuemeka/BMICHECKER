import {useEffect, useState,} from "react"
export const Main = () => {
    const [data, setData] = useState("0")
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [message, setMessage] = useState("")



    const handleClick = (event) => {
        event.preventDefault()
        const BMI = weight/(height * height)
       console.log(data)
       {if(BMI  === 0){
        setMessage("No result yet")
    } else if (BMI > 0 && BMI <= 18.5){
        setMessage("Underweight")
    }else if(BMI >= 18.5 && BMI <= 24.9){
         setMessage("Normal weight")
        } else if(BMI >= 25 && BMI <= 29.9){
            setMessage("Overweight")
        } else if (BMI > 30) {
            setMessage("Obesity")
        } 
        setData(BMI.toFixed(1))
    }

    console.log(message)
    }

      const Clear = () => {
        setWeight("")
        setHeight("")
      }

      const Delete = () => {
        setMessage(null)
        setData("")
        setWeight("")
        setHeight("")
      }
    return(
        <> 
            <div className="bmi-container">
                <div className="BMI">
            <div className="bmi-first-container BMI">

                <div className="bmi-second-container BMITWO">
                <h2>TRY IT NOW!</h2>
                <form onClick={handleClick}>
                    <div className="BMI-INPUT">
                    <input type="number"  value={height} onChange={(e) => setHeight(e.target.value)} placeholder="height in m" /> <br />
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="weight in kg" /> <br />
                    </div>
            
                    <div className="BMI-BUTTON">
                    <div className="button">
                    <button className="result" type="submit">Result</button>
                    <button className="clear" onClick={Clear}>Clear</button>
                    <button className="delete" onClick={Delete}>Delete</button>
                    </div>
                    </div>
                   
                   
                </form>

               {data && (
                <div className="data">
                    <div>
                    <p>Your Bmi: {data}</p>
                    <p>Category: {message}</p>
                    </div>
                </div>
               )}

            </div>

            </div>
            </div>
            </div>
        </>
    )
}