import test from 'ava';
import constants from './constants';

test('it returns a dictionary of constants', t => {
  t.is(typeof constants, 'object');
});
