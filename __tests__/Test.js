import 'react-native';
import React from 'react';
import Index from '../index.android.js';

import renderer from 'react-test-renderer';

var myMock = jest.fn();

var a = new myMock();
myMock('1');
myMock('a','b');
console.log(myMock.mock.calls);
