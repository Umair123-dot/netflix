import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import '../css/TabsNav.css';
import TabDevices from './tabs_nav/TabDevices';
import TabPrice from './tabs_nav/TabPrice';
//tab Contents
import TabContentTwo from './TabContentTwo';
import TabContentOne from "./TabContentOne";
import TabContentThree from './TabContentThree';

class TabComponent extends Component {
  state={
    tabIndex:0
  }
    render() {
        return (
            <div>
              <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex=>this.setState({tabIndex})}>
                 <TabList className="tab-nav-container">
                     <Tab  className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                       <TabDoor />
                       <p style={{marginBottom:'1.875rem'}}><strong>No comentment <br/>
                       Cancel online at anytime</strong></p>
                     </Tab>
                     <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                       <TabDevices />
                       <p style={{marginTop:'-5.3125rem'}}>
                       <strong>Watch anytime</strong></p>
                     </Tab>
                     <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                        <TabPrice />
                        <p>
                       <strong>Pick Your Price</strong></p>
                     </Tab>
                 </TabList>
                 {/* Tab Content ka Work sara yahan horah hai  */}
                  <TabPanel>
                  <TabContentOne />



                  </TabPanel>
                  <TabPanel>
                  <TabContentTwo />



                  </TabPanel>
                  <TabPanel>
                  <TabContentThree />



                  </TabPanel>
                  


              </Tabs>
                
            </div>
        )
    }
}
export default TabComponent;

//use of react tabs
