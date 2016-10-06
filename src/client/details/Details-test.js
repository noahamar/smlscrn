import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INITIAL_STATE } from './Details-constants';

import Details from './Details';
import BackdropGallery from './components/BackdropGallery/BackdropGallery';
import GitHubBanner from '../common/components/GitHubBanner/GitHubBanner';
import PosterTile from '../common/components/PosterTile/PosterTile';


describe('<Details />', () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ details: INITIAL_STATE });
  let server;

  beforeEach(function() {
    // const url = '/api/show';
    const url = '';
    const sampleData = {};
    server = sinon.fakeServer.create();
    server.autoRespond = true;
    server.respondWith(
      'GET',
      url,
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(sampleData)]
    );
  });

  afterEach(function () {
    server.restore();
  });

  it('should call componentWillMount()', () => {
    Details.prototype.componentWillMount = function(){};
    sinon.spy(Details.prototype, 'componentWillMount');
    const wrapper = shallow(<Details store={store} />);
    expect(Details.prototype.componentWillMount.calledOnce).to.equal(true);
    Details.prototype.componentWillMount.restore();
  });

  it('should call componentWillReceiveProps() on update', () => {
    const spy = sinon.spy(Details.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<Details store={store} />);
    expect(spy.calledOnce).to.equal(false);
    wrapper.setProps({ prop: 2 });
    expect(spy.calledOnce).to.equal(true);
    Details.prototype.componentWillReceiveProps.restore();
  });

  // it('should call componentDidMount()', () => {
  //   sinon.spy(Details.prototype, 'componentDidMount');
  //   const wrapper = mount(<Details store={store} />);
  //   expect(Details.prototype.componentDidMount.calledOnce).to.equal(true);
  //   Details.prototype.componentDidMount.restore();
  // });

  // it('should render <BackdropGallery />', () => {
  //   const wrapper = mount(<Details store={store} />);
  //   expect(wrapper.find(BackdropGallery).length).to.equal(1);
  // });

  // it('should render <GitHubBanner />', () => {
  //   const wrapper = mount(<Details store={store} />);
  //   expect(wrapper.find(GitHubBanner).length).to.equal(1);
  // });

  // it('should render <PosterTile />', () => {
  //   const wrapper = mount(<Details store={store} />);
  //   expect(wrapper.find(PosterTile).length).to.equal(1);
  // });

});


