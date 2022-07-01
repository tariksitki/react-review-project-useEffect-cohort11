
import Review from "./Review";
import data from "../helpers/data"
import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Reviews = () => {
    const [index, setIndex] = useState(0) // tüm veriler alt alta yazilmayacagi icin map kullanmadik
  
    const handlePrevious = () => {
        if (index == 0) {
            setIndex(data.length-1) // length dersek out of range olur.
        } else {
            setIndex(index-1)
        }
    }

    const handleNext = () => {
        if (index == data.length -1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * data.length)
        randomNumber == index ? handleRandom() : setIndex(randomNumber)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 2000)
            // Önemli: return deki func arrow olmadan direkt yazilirsa calismaz
            // Buradaki return componentwillUnmount icin
            // eger her seferinde interval öldürülmezse, belirli zaman sonra sapitiyor
            // bu nedenle her seferinde calisioyr ve öldürüyoruz.
        return () => clearInterval(interval)
    })

    return (
    <section className="container">
        <Review {...data[index]} />

        <div className="btn-container">
            <span className="previous" onClick={handlePrevious}><GrPrevious /> </span>
            <span className="next" onClick={handleNext}><GrNext/> </span>
            <button className="surprise-btn" onClick={handleRandom}>SURPRISE ME</button>
        </div>
    </section>
  )
}

export default Reviews;