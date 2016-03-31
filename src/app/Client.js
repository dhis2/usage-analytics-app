/**
 * Created by JulieHillRoa on 14.03.2016.
 */

import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

//import Table from './Table';
import Chart from './Chart';


export default React.createClass({
    getInitialState: function () {
        return {data: undefined,variables: undefined, error: undefined, load: false};
    },

    componentWillMount: function () {
        if (this.props.source !== "") {
            this.retrieveData(this.props.source);
        }
    },

    componentWillReceiveProps: function (nextprops) {
        this.setState({variables: nextprops.variables});
        var dataHasChanged = this.props.source !== nextprops.source;
        if (dataHasChanged) {
            this.retrieveData(nextprops.source);
        }
    },
    retrieveData: function (url) {
        this.setState({load:true});
        this.setState({data: undefined});
        this.setState({error:undefined});
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                let roundData = data.map((result) => {
                    for (let x in result) {
                        result[x] = Math.round(result[x] * 100) / 100;
                    }
                    return result;
                });
                this.setState({data: roundData});
            }.bind(this),
            error: function (xhr, status, err) {
                let code;
                if(xhr.status == 409){
                    code = 'Start date or end date is invalid';
                }else code = xhr.status + ", " + xhr.statusText;
                this.setState({error: code})
            }.bind(this)
        });

    },

    render() {
        var style = {
            divstyle: {
                background: '#f2dede',
                minHeight: 50,
                paddingTop:15
            },
            spanstyle:{
                color:'#a94442',
                fontSize:20,
                fontWeight:'italic',
                textAlign:'center',
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',

            },
            circular:{
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
            }
        };

        if (!this.state.data && (!this.state.error)) {
            if(!this.state.load) {
                return (
                    <div>
                        <span>This is an app to create statistical reports of usage within the DHIS2 system. This app will generate a chart and a table of chosen data.
                            Start by selecting start date and end date and choose your preferred interval. Click the update button to generate the report.
                            You can also choose witch variables you want to compare by checking/unchecking the boxes in the menu.
                        </span>
                    </div>);
            }else {return <CircularProgress style={style.circular}/>}
        }
        else if(this.state.error){
            return<div style={style.divstyle}> <span style={style.spanstyle}><b>Something went wrong!</b> {this.state.error}</span></div>;
        }
        else {
            return (
                <div>
                    <Chart data={this.state.data} variables={this.state.variables}/>

                </div>
            );
        }

    }
});

/*
 <Table
 rowHeight={50}
 rowsCount={rows.length}
 width={5000}
 height={5000}
 headerHeight={50}>
 <Column
 header={<Cell>Col 1</Cell>}
 cell={<Cell>Column 1 static content</Cell>}
 width={2000}
 />
 <Column
 header={<Cell>Col 2</Cell>}
 cell={<MyCustomCell mySpecialProp="column2" />}
 width={1000}
 />
 <Column
 header={<Cell>Col 3</Cell>}
 cell={({rowIndex, ...props}) => (
 <Cell {...props}>
 Data for column 3: {rows[rowIndex][2]}
 </Cell>
 )}
 width={2000}
 />
 </Table>
 */