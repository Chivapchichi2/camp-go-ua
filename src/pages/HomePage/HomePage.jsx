import camper1 from '../../assets/camper1.jpg';
import camper2 from '../../assets/camper2.jpg';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to Camper Rental App</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.camperSection}>
          <h2 className={styles.title}>Featured Campers</h2>
          <div className={styles.camperContainer}>
            <div className={styles.camper}>
              <img src={camper1} alt="Camper 1" />
              <p className={styles.text}>
                "Full-Service Package": Enjoy maximum comfort and convenience
                with our full-service offerings. From professional camper
                preparation to 24/7 customer support - we take care of every
                aspect of your trip. "Adventure Gear Rental": Elevate your
                camping experience with our adventure gear rental services. From
                tents to cooking equipment, we've got everything you need for an
                unforgettable outdoor adventure. "Personalized Travel Planning":
                Let us take the hassle out of trip planning with our
                personalized travel planning services. We'll create a customized
                itinerary tailored to your preferences, ensuring every moment of
                your journey is memorable and stress-free.
              </p>
            </div>
            <div className={styles.camper}>
              <img src={camper2} alt="Camper 2" />
              <p className={styles.text}>
                "Excursion Routes": Choose the perfect route for your journey
                with our excursion services. Discover the most beautiful natural
                spots and breathtaking landscapes with comfort.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Camper Rental App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
