import 'server-only';

const workshops = [
  {
    id: 1,
    workshopName: 'Workshop 1',
    location: 'Location 1',
    date: '01.01.2025',
    time: '2pm - 7pm',
    price: '95,-',
    image: 'childPose',
    description:
      'Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. ',
  },
  {
    id: 2,
    workshopName: 'Workshop 2',
    location: 'Location 2',
    date: '02.02.2025',
    time: '8am - 5pm',
    price: '145,-',
    image: 'mountainPose',
    description:
      'Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. ',
  },
  {
    id: 3,
    workshopName: 'Workshop 3',
    location: 'Location 3',
    date: '03.03.2025',
    time: '8am - 12pm',
    price: '45,-',
    image: 'vegetables',
    description:
      'Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. ',
  },
  {
    id: 4,
    workshopName: 'Workshop 4',
    location: 'Location 4',
    date: '04.04.2025',
    time: '1pm - 8pm',
    price: '75,-',
    image: 'meditationLake',
    description:
      'Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. ',
  },
];

export function getWorkshops() {
  return workshops;
}

export function getWorkshop(id) {
  return workshops.find((workshop) => workshop.id === id);
}
