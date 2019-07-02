import { Navigation } from 'react-native-navigation'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const loadTabs = () => {
    let topBarTest = {
        visible: true,
        animate: false, 
        hideOnScroll: true,
        leftButtonColor: 'black',
        rightButtonColor: 'black',
        drawBehind: false,
        testID: 'topBar',
        title: {
            text: 'Title',
            fontSize: 14,
            color: 'red',
            fontFamily: 'Helvetica',
            alignment: 'center'
        },
    };

    Promise.all([
        Icon.getImageSource('map', 25),
        Icon.getImageSource('share', 25),
        Icon.getImageSource('navicon', 25),
    ]).then((sources) => {
        [find, share, navicon] = sources;
        
        Navigation.setRoot({
            root: {
              id: 'root',
              sideMenu: {
                id: "sideMenu",
                left: {
                  component: {
                    id: "Drawer",
                    name: "awesome-places.SideDrawer"
                  }
                },
                center: {
                  bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                      {
                        stack: {
                          children: [
                            {
                              component: {
                                name: "awesome-places.FindPlaceScreen",
                              },
                            },
                          ],
                          options: {
                            topBar: {
                              ...topBarTest,
                              leftButtons: [
                                {
                                  id: 'menuButton',
                                  text: 'menu',
                                  icon: navicon,
                                }
                              ] 
                            },
                            bottomTab: {
                              text: 'Find',
                              icon: find, 
                              iconColor: 'grey',
                              selectedIconColor: 'blue'   
                            },
                          },
                        }
                      },
                      {
                        stack: {
                          children: [
                            {
                              component: {
                                id: 'sharePlace',
                                name: 'awesome-places.SharePlaceScreen',
                              },
                            }
                          ],
                          options: {
                            topBar:  {
                              ...topBarTest,
                              leftButtons: [
                                {
                                  id: 'menuButton',
                                  text: 'menu',
                                  icon: navicon,
                                }
                              ] 
                            },
                            bottomTab: {
                              text: 'Share',
                              icon: share, 
                              iconColor: 'grey',
                              selectedIconColor: 'blue'   
                            },
                          },
                        }
                      },
                    ],
                    options: { 
                      statusBar: {
                        visible: true,
                        drawBehind: false,
                        backgroundColor: 'white'
                      },
                      bottomTabs: {
                        animate: true,
                        backgroundColor: 'lightblue',
                        titleDisplayMode: 'alwaysShow',
                      }
                    }
                  }
                }
              }
            }
          });
    }).catch(error => error); 
};

export default loadTabs;