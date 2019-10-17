import subject from '../client/reducers/marketsReducer';

/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */
describe('MegaMarkets reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      totalMarkets: 0,
      totalCards: 0,
      marketList: [],
      newLocation: '',
      synced: true,
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(subject(state, action)).toBe(state);
    });
  });

  describe('ADD_MARKET', () => {
    const action = {
      type: 'ADD_MARKET',
      payload: 'Azkaban',
    };

    it('adds a market', () => {
      const { marketList } = subject(state, action);
      expect(marketList[0]).toEqual({
        location: 'Azkaban',
        cards: 0,
      });
    });

    it('increases total market count by 1', () => {
      const prevState = state.totalMarkets;

      const { totalMarkets } = subject(state, action);
      expect(totalMarkets).toEqual(prevState + 1);
    });

    // Remember that in Redux we never mutate. If something changes, we copy
    // the data structure! Hint: `.toBe` or `.not.toBe` are your questions.
    it('returns a state object not strictly equal to the original', () => {
      const prevState = subject(state, action);
      expect(state).not.toBe(prevState);
    });

    it('includes a marketList not strictly equal to the original', () => {
      const { marketList } = subject(state, action);
      expect(marketList).not.toBe(state.marketList);
    });

    it('clears the newLocation field', () => {
      state.newLocation = 'x';
      const { newLocation } = subject(state, action);
      expect(newLocation).toBe('');
    });
  });

  describe('UPDATE_LOCATION', () => {
    const action = {
      type: 'UPDATE_LOCATION',
      payload: 'Az',
    };

    const action2 = {
      type: 'UPDATE_LOCATION',
      payload: 'Azk',
    };

    it('updates location with the action payload', () => {
      const newState = subject(state, action);
      // expect(newLocation).toBe(action.payload);
      const { newLocation } = subject(newState, action2);
      expect(newLocation).toBe(action2.payload);
    });

    it('returns a state object not strictly equal to the original', () => {
      // const prevState = state;
      const newState = subject(state, action);
      expect(newState).not.toBe(state);
    });

    it('doesn\'t touch the marketList array', () => {
      // diffing
      const { marketList } = subject(state, action);
      // expect marketlist to be the same as state.marketlist
      expect(marketList).toBe(state.marketList);
    });
  });
  /*
   * Note: the rest of these tests are an EXTENSION. You should move on
   * to Enzyme testing, and come back to these later. Optionally, you may
   * just do ADD_CARD now, and come back to the rest of these redux tests later.
   */
  describe('ADD_CARD', () => {
    const action = {
      type: 'ADD_CARD',
      payload: 0,
    };

    it('increases card count of market specified by payload', () => {
      state.marketList = [{ location: 'Asbury', cards: 0 }, { location: 'Wickham', cards: 2 }];
      const { marketList } = subject(state, action);
      expect(marketList[action.payload].cards).toBe(1);
    });

    it('increases total card count by 1', () => {
      // console.log(state);
      const { totalCards } = subject(state, action);
      expect(totalCards).toBe(1);
    });

    it('includes a marketList not strictly equal to the original', () => {
      const { marketList } = subject(state, action);
      expect(marketList).not.toBe(state.marketList);
    });

    it('does not mutate or duplicate other markets in marketList', () => {
      state.marketList = [{ location: 'Asbury', cards: 0 }, { location: 'Wickham', cards: 2 }];
      const { marketList } = subject(state, action);
      expect(marketList[1]).toBe(state.marketList[1]);
    });
  });

  describe('DELETE_CARD', () => {
    const action = {
      type: 'DELETE_CARD',
      payload: 0,
    };

    it('decreases card count of market specified by payload', () => {
      state.marketList = [{ location: 'Asbury', cards: 2 }, { location: 'Wickham', cards: 2 }];
      const { marketList } = subject(state, action);
      expect(marketList[action.payload].cards).toBe(1);
    });

    it('decreases total card count by 1', () => {
      state.totalCards = 1;
      const { totalCards } = subject(state, action);
      expect(totalCards).toBe(0);
    });

    it('includes a marketList not strictly equal to the original', () => {
      state.marketList = [{ location: 'Asbury', cards: 2 }, { location: 'Wickham', cards: 2 }];
      const { marketList } = subject(state, action);
      expect(marketList).not.toBe(state.marketList);
    });

    it('does not mutate or duplicate other markets in marketList', () => {
      state.marketList = [{ location: 'Asbury', cards: 2 }, { location: 'Wickham', cards: 2 }];
      const { marketList } = subject(state, action);
      expect(marketList[1]).toBe(state.marketList[1]);
      expect(marketList.length).toBe(2);
    });
  });

  // The rest is functionality not included in the original MegaMarkets unit.
  // In short:
  //   1. SYNC_MARKETS is our action for writing markets to our "database." The
  //   only part of client state it affects is the "synced" property on
  //   markets, which activates/deactivates the button.
  //   2. LOAD_MARKETS only happens once, on page load, to load up markets from
  //   the database.
  describe('SYNC_MARKETS', () => {
    const action = { type: 'SYNC_MARKETS' };

    it('sets synced to true', () => {
      state.synced = false;
      const { synced } = subject(state, action);
      expect(synced).toBe(true);
    });
  });

  describe('LOAD_MARKETS', () => {
    const action = {
      type: 'LOAD_MARKETS',
      payload: [{ location: 'Asbury', cards: 2 }, { location: 'Wickham', cards: 2 }],
    };

    it('replaces its marketList with the payload as-is', () => {
      const { marketList } = subject(state, action);
      expect(marketList).toBe(action.payload);
    });

    it('sets the correct totalMarkets count', () => {
      const { totalMarkets } = subject(state, action);
      expect(totalMarkets).toBe(2);
    });

    it('sets the correct totalCards count', () => {
      const { totalCards } = subject(state, action);
      expect(totalCards).toBe(4);
    });
  });
});
