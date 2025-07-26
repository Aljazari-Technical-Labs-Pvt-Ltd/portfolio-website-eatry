import Header from "../../components/Header/Header";
import Hero from "../../components/Homepage/Hero/Hero";
import FeaturedDishes from "../../components/Homepage/FeaturedDishes/FeaturedDishes";
import styles from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <main>
            <Hero />
            <FeaturedDishes />
            {/*<Categories />
            <FeaturedFreelancers />
            <Testimonials />
            <CallToAction />*/}
            </ main>
        </div>
    );
}