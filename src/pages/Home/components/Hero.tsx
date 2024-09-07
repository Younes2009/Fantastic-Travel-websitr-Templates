import HeaderSection from "./HeaderSection";
import Slider from "./Slider";

export default function Hero() {
    return (
        <>
            <section className="items-center xl:justify-between justify-center">
                <HeaderSection heading="Your Journey, Your Way" pargag="Discover the World's Treasures with Travila" />
            </section>

            <section className="my-8">
                <Slider />
            </section>
        </>
    );
}
