import MealButton from "../utils/MealButton"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="heroBgImage lg:h-[80vh]">
        <div className="flex flex-col sm:flex-row sm:container">
            <div className="flex flex-col gap-4 p-4 order-2 sm:order-1 sm:justify-center sm:px-10">
                <div className="text-3xl lg:text-4xl md:font-semibold text-slate-800 ">
                    <p className="">Fresh & Healthy Meal Plan</p>
                    <p><span className="font-cursive sm:font-normal text-teal-300 text-6xl">Delivery </span>in Miami</p>
                </div>
                <div className="text-sm text-slate-600">
                    <p>Delicious Meals delivered to your door From $132.95 per week</p>
                </div>
                <div className="">
                    <MealButton />
                </div>
            </div>
            <div className="order-1 sm:order-2  mx-auto">
                <img src="/assets/hero.png" alt="food image"className="h-fit max-h-[650px]" />
            </div>
        </div>
    </div>
  )
}

export default Hero