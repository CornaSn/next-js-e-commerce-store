import GenerateButton from '../GenerateButton';

export const metadata = {
  title: 'Retreats',
  description:
    'Discover the perfect blend of adventure and serenity with Cornafy Yoga Retreats. Explore our diverse selection of retreats.',
};

const workshops = [{}];

export default function Workshops() {
  return (
    <div>
      <h1>Workshops</h1>
      <GenerateButton />
    </div>
  );
}
