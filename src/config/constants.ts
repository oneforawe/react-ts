import { seconds, minutes } from 'helper/utility/units';

export const weather = {
  // refetch for failed fetches
  refetch: {
    quickEpiCycle: {
      triesMax        : 3,
      periodInSeconds : (2 * seconds),
    },
    slowMajorCycle: {
      periodInSeconds: (30 * seconds),
    },
  },
  // refresh for updating weather info
  refresh: {
    updatePeriodInMinutes: (20 * minutes),
  },
};
