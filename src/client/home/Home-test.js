import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INITIAL_STATE } from './Home-constants';

import Home from './Home';
import Nav from './components/Nav/Nav';
import PosterTiles from './components/PosterTiles/PosterTiles';
import Menu from './components/Menu/Menu';
import GitHubBanner from '../common/components/GitHubBanner/GitHubBanner';


describe('<Home />', () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ home: INITIAL_STATE });
  let server;

  beforeEach(function() {
    // const url = '/api/shows?page=1&sortBy=popularity.desc&genre=';
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
    Home.prototype.componentWillMount = function(){};
    sinon.spy(Home.prototype, 'componentWillMount');
    const wrapper = shallow(<Home store={store} />);
    expect(Home.prototype.componentWillMount.calledOnce).to.equal(true);
    Home.prototype.componentWillMount.restore();
  });

  it('should call componentWillReceiveProps() on update', () => {
    const spy = sinon.spy(Home.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<Home store={store} />);
    expect(spy.calledOnce).to.equal(false);
    wrapper.setProps({ prop: 2 });
    expect(spy.calledOnce).to.equal(true);
    Home.prototype.componentWillReceiveProps.restore();
  });

  it('should call componentDidMount()', () => {
    sinon.spy(Home.prototype, 'componentDidMount');
    const wrapper = mount(<Home store={store} />);
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
    Home.prototype.componentDidMount.restore();
  });

  it('should render <Nav />', () => {
    Home.prototype.fetchItems = function() {};
    const wrapper = mount(<Home store={store} />);
    expect(wrapper.find(Nav).length).to.equal(1);
  });

  it('should render <PosterTiles />', () => {
    const wrapper = mount(<Home store={store} />);
    expect(wrapper.find(PosterTiles).length).to.equal(1);
  });

  it('should render <Menu />', () => {
    const wrapper = mount(<Home store={store} />);
    expect(wrapper.find(Menu).length).to.equal(1);
  });

  it('should render <GitHubBanner />', () => {
    const wrapper = mount(<Home store={store} />);
    expect(wrapper.find(GitHubBanner).length).to.equal(1);
  });

});


