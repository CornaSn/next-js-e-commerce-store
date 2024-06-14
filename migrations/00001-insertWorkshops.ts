import { Sql } from 'postgres';

const workshops = [
  {
    id: 1,
    workshopName: 'Handbalance Workshop',
    location: 'Vienna',
    startTime: new Date('2024-07-13 09:00:00+00'),
    endTime: new Date('2024-07-13 13:00:00+00'),
    price: 45,
    image: 'handBalance',
    description:
      'Challenge gravity and elevate your practice with our Handbalance Workshop. This exhilarating experience invites you to defy limitations and explore the art of balancing on your hands. Led by skilled instructors, delve into the intricacies of handstands, arm balances, and inversions, learning techniques to build strength, stability, and confidence. Through focused guidance and mindful practice, discover the alignment principles and body awareness necessary to achieve and sustain these challenging postures. Whether you`re a seasoned practitioner looking to refine your skills or a newcomer eager to explore new horizons, this workshop offers a supportive environment to cultivate balance, resilience, and grace. Join us as we embark on a journey of empowerment, where each handstand becomes a testament to your inner strength and determination. Bring your mat, an adventurous spirit, and let`s defy gravity together.',
  },
  {
    id: 2,
    workshopName: 'Full Moon Yoga',
    location: 'Vienna',
    startTime: new Date('2024-08-19 17:00:00+00'),
    endTime: new Date('2024-08-19 20:00:00+00'),
    price: 35,
    image: 'childPose',
    description:
      'Step into a realm of tranquility and inner peace with our Full Moon Yoga workshop. As the moon casts its gentle glow upon us, join us for an evening of rejuvenation and self-discovery. Guided by experienced instructors, immerse yourself in a series of gentle asanas and calming breathing exercises designed to harness the mystical energy of the full moon. Through the rhythmic flow of movement and meditation, embrace the profound connection between mind, body, and spirit. Whether you`re a seasoned yogi or new to the practice, this workshop offers an opportunity to align with the natural rhythms of the universe and find solace amidst life`s hustle and bustle. Bring your mat, an open heart, and embark on a journey of serenity under the luminous embrace of the full moon.',
  },
  {
    id: 3,
    workshopName: 'Mountain Yoga',
    location: 'Salzburg',
    startTime: new Date('2024-09-14 09:00:00+00'),
    endTime: new Date('2024-08-15 17:00:00+00'),
    price: 230,
    image: 'meditationMountain',
    description:
      'Discover serenity amidst the majestic peaks with our Mountain Yoga workshop. Nestled in the embrace of nature`s grandeur, this unique experience invites you to connect with your inner self while surrounded by breathtaking mountain vistas. Led by experienced instructors, embark on a journey of self-discovery and renewal through a series of yoga postures and mindfulness practices tailored to the mountain environment. Feel the earth beneath your feet and the crisp mountain air rejuvenate your spirit as you flow through each pose, finding balance and harmony within. Whether you`re an experienced yogi or a novice seeking solace in nature, this workshop offers an opportunity to ground yourself in the present moment and embrace the tranquility of the mountains. Bring your mat, an open mind, and let the mountains be your guide on this transformative journey.',
  },

  {
    id: 4,
    workshopName: 'Prenatal Yoga',
    location: 'Vienna',
    startTime: new Date('2024-10-17 10:00:00+00'),
    endTime: new Date('2024-10-17 13:00:00+00'),
    price: 55,
    image: 'pregnantYoga',
    description:
      'Join our Prenatal Yoga workshop for a serene and nurturing experience tailored to expectant mothers. This workshop offers gentle yoga postures, breathing techniques, and mindfulness practices to support your changing body and promote well-being. Led by experienced prenatal yoga instructors, each session helps alleviate pregnancy discomforts and prepares you for childbirth. Connect with your baby, reduce stress, and embrace the journey of motherhood in a safe and supportive environment. All levels are welcome. Bring your mat and a supportive pillow, and enjoy the benefits of prenatal yoga.',
  },
];

export async function up(sql: Sql) {
  for (const workshop of workshops) {
    await sql`
      INSERT INTO
        workshops (
          workshop_name,
          location,
          start_time,
          end_time,
          price,
          image,
          description
        )
      VALUES
        (
          ${workshop.workshopName},
          ${workshop.location},
          ${workshop.startTime},
          ${workshop.endTime},
          ${workshop.price},
          ${workshop.image},
          ${workshop.description}
        )
    `;
  }
}

export async function down(sql: Sql) {}
