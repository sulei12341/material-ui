// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import Switch from './Switch';

describe('<Switch />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'div' });
    classes = getClasses(<Switch />);
  });

  describe('styleSheet', () => {
    it('should have the classes required for SwitchBase', () => {
      assert.strictEqual(typeof classes.default, 'string');
      assert.strictEqual(typeof classes.checked, 'string');
      assert.strictEqual(typeof classes.disabled, 'string');
    });
  });

  describe('default Switch export', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Switch className="foo" />);
    });

    it('should render a div with the root and user classes', () => {
      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('foo'), true);
    });

    it('should render SwitchBase with a custom div icon with the icon class', () => {
      const switchBase = wrapper.childAt(0);
      assert.strictEqual(switchBase.name(), 'withStyles(SwitchBase)');
      assert.strictEqual(switchBase.props().icon.type, 'div');
      assert.strictEqual(switchBase.props().icon.props.className, classes.icon);
    });

    it('should render the bar as the 2nd child', () => {
      const bar = wrapper.childAt(1);
      assert.strictEqual(bar.is('div'), true);
      assert.strictEqual(bar.hasClass(classes.bar), true);
    });
  });
});
