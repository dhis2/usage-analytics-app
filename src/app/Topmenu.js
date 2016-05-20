import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import Client from './Client.js';
import { config } from 'd2/lib/d2';


const buttonstyle = {
    marginLeft: 10,
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderRight: 1,
    borderRightStyle: 'solid',
    borderColor: '#dadada',
    backgroundColor: '#FFFFFF',
    width: 190
};
export default React.createClass({

    getInitialState: function () {
        return this.state = {
            currentCategory: 'CHART_VIEW',
            currentPages: '25',
            currentOrder: 'DESC'
        };
    },

    dropdownTypeMenu: function () {
        var style = {icon: {
                color: '#000000'
            }
        };
        return (<div>
            <DropDownMenu id="typeDrop" autoWidth={false} style={buttonstyle} iconStyle={style.icon}
                          value={this.state.currentCategory}
                          onChange={(event, index, value) => this.setState({currentCategory:value})}>
                <MenuItem value={'CHART_VIEW'} primaryText="CHART"/>
                <MenuItem value={'MAP_VIEW'} primaryText="MAP"/>
                <MenuItem value={'REPORT_TABLE_VIEW'} primaryText="REPORT TABLE"/>
                <MenuItem value={'EVENT_REPORT_VIEW'} primaryText="EVENT REPORT"/>
                <MenuItem value={'EVENT_CHART_VIEW'} primaryText="EVENT CHART"/>
                <MenuItem value={'DASHBOARD_VIEW'} primaryText="DASHBOARDS"/>
            </DropDownMenu></div>);

    },

    dropdownPagesMenu: function () {
        var style = {
             icon: {
                color: '#000000'
            }
        };
        return (<div>
            <DropDownMenu id="pageDrop" autoWidth={false} style={buttonstyle} iconStyle={style.icon}
                          value={this.state.currentPages}
                          onChange={(event, index, value) => this.setState({currentPages:value})}>
                <MenuItem value={'5'} primaryText="5"/>
                <MenuItem value={'10'} primaryText="10"/>
                <MenuItem value={'15'} primaryText="15"/>
                <MenuItem value={'20'} primaryText="20"/>
                <MenuItem value={'25'} primaryText="25"/>
            </DropDownMenu></div>);

    },

    dropdownAscDesMenu: function () {
        var style = {
            icon: {
                color: '#000000'
            }
        };
        return (<div>
            <DropDownMenu id="orderDrop" autoWidth={false} style={buttonstyle} iconStyle={style.icon}
                          value={this.state.currentOrder}
                          onChange={(event, index, value) => this.setState({currentOrder:value})}>
                <MenuItem value={'ASC'} primaryText="ASC"/>
                <MenuItem value={'DESC'} primaryText="DESC"/>
            </DropDownMenu></div>);

    },

    render() {
        const style ={
            div: {
                backgroundColor: '#f3f3f3',
                height: 70,
                paddingTop: 15,
                marginBottom: 20,
                marginLeft: -30,
                marginTop: -20

            },
            block: {
                marginRight: 'auto',
                display: 'flex',
                flexDirection: 'row'
            }

        };

        let url = config.baseUrl + "/dataStatistics/favorites?eventType=" + this.state.currentCategory + "&pageSize=" + this.state.currentPages + "&sortOrder="+this.state.currentOrder;

        return (<div>
                    <div style={style.div}>{(React.createElement(
                    'div',
                    {style: style.block},
                    this.dropdownTypeMenu(),
                    this.dropdownPagesMenu(),
                    this.dropdownAscDesMenu()
                     ))}  </div>
                    <div> <Client source={url} category='Top favorites' updatepage={true}/></div>
            </div>

        );
    }



});