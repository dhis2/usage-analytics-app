/**
 * Created by JulieHillRoa on 21.04.2016.
 */
import React from 'react';

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';


import Table from './Table';
import Chart from './Chart';



const styles = {
    block: {
        maxWidth: 305,
        marginRight: 'auto',
        // marginLeft: '25%',
        display: 'flex',
        flexDirection: 'row'
    },
    visible: {
        display: isVisible,
        padding: 5,
        marginTop: 20,
        border: 'solid',
        borderColor: '#000000',
        borderWidth: 0.5
    }
};

let isVisible = 'block';
let category = "Favorite Views";
let subCategory ="all";

export default React.createClass({
    getInitialState: function () {
        return {data: undefined, subCategory: 'all'};
    },

    componentWillReceiveProps: function (nextprops) {
        console.log(nextprops);
        category = nextprops.category;
        this.setState({data:nextprops.data});
    },

    componentWillMount: function () {
        category = this.props.category;
        this.setState({data:this.props.data});
    },


    _onChange: function (e, selected) {
        this.setState({subCategory: selected});
    },

    ViewPicker: function (category) {

        return (
            <div style={styles.visible}>
                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected="all"
                    style={styles.block}
                    onChange={this._onChange}
                >
                    <RadioButton
                        value="all"
                        label="All favorite views"
                    />
                    <RadioButton
                        value="total"
                        label="Total views"
                    />
                    <RadioButton
                        value="average"
                        label="All favorite average views per user"
                    />
                    <RadioButton
                        value="averageTotal"
                        label="Total views per user"
                    />
                </RadioButtonGroup>
            </div>
        );
    },

    render(){
        console.log("render");
        console.log(this.state.data);
        this.props.category == "Favorite Views" ? isVisible = 'block' : isVisible = 'none';
            return (
                <div>
                    <Chart data={this.state.data} category={category} subCategory={subCategory}/>
                    {
                        isVisible == 'block' ? this.ViewPicker() : null
                    }
                    <Table data={this.state.data} category={category}/>
                </div>
            );
    }
});
