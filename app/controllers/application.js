import Controller from '@ember/controller';

export default Controller.extend({
  dps: [{
      id: 0,
      cost: 4000,
      name: "DPS 1",
    },
    {
      id: 1,
      cost: 3900,
      name: "DPS 2",
    },
    {
      id: 2,
      cost: 3900,
      name: "DPS 3",
    }
  ],
  incomeCriterion: {
    alone: 1902,
    family: 1542
  },
  numberKinshipDegrees: 4, // -1 
  kinshipDegree: [{
      id: 0,
      name: "Małżonek",
      mustBeUnique: true,
    },
    {
      id: 1,
      name: "Dziecko",
      mustBeUnique: false,
    },
    {
      id: 2,
      name: "Wnuk",
      mustBeUnique: false,
    },
    {
      id: 3,
      name: "Rodzic",
      mustBeUnique: false,
    },
    {
      id: 4,
      name: "Dziadki",
      mustBeUnique: false,
    },
  ],
});
