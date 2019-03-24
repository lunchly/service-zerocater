import sinon from 'sinon';
import test from 'ava';

import isTodaysMeal from './is-todays-meal';

let clock;

test.before(() => {
  clock = sinon.useFakeTimers(new Date(2019, 3, 24, 1, 2, 3).getTime());
});

test.after(() => {
  clock.restore();
});

test('it returns true for meals arriving today', t => {
  const validTime = 1556085723;
  const meal = {time: validTime};
  t.truthy(isTodaysMeal(meal));
});

test('it returns false for meals not arriving today', t => {
  const invalidTime = -3847944273;
  const meal = {time: invalidTime};
  t.falsy(isTodaysMeal(meal));
});
