let _navRef=null;

export function setRef (ref) {
  // console.log('Setting nav ref: ', ref);
  _navRef=ref;
} 

export default class NavigationHelper {
  static getRaidViewHistory() {
    if (_navRef) {
      return _navRef.state.nav.routes[0].routes;      
    }

    return null;
  }
}