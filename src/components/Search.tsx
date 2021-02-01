import React from 'react'
import { Button, TextField, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

import { FaRunning } from "react-icons/fa";
import { WiDayRainWind } from 'react-icons/wi';

export default class Search extends React.Component {

    state = {
        city: '',
        warning: false
    }

    componentWillUnmount() {
        this.setState({
            warning: false
        })
    }

    handleInput = (e:any) => {
        const value = e.target.value
        this.setState({
            city: value,
            warning: false
        })
    }

    handleKeyPress = (e: KeyboardEvent) => {
        if (e.keyCode === 13 && this.state.city !== '') {
            (this.props as any).history.push(`/results?search=${this.state.city}`)
        }
    }

    render() {
        return (
            <div className='search-page'>
                <div className='logo-wrapper'>
                    <h1 className='app-title'>WeatherRun</h1>
                    <div className='app-logo'>
                        <FaRunning className='app-logo-runner'/>
                        <WiDayRainWind className='app-logo-cloud'/>
                    </div>
                </div>
                <div
                    className='search-form'
                    onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => this.handleKeyPress(e as any as KeyboardEvent)}>
                    <TextField
                        size='small'
                        style={{width: '25%'}}
                        id="outlined-basic"
                        autoComplete="off"
                        label="City name"
                        variant="outlined"
                        value={this.state.city}
                        onChange={(e) => this.handleInput(e)}
                    />
                    {
                        this.state.city !== ''
                            ?
                                <Link to={`/results?search=${this.state.city}`} style={{textDecoration: 'none'}} >
                                    <Button variant="contained" disableElevation>SEARCH</Button>
                                </Link>
                            :
                            <Tooltip title="Please enter city name" placement="right" arrow>
                                <span>
                                    <Button
                                        variant="outlined"
                                        disabled
                                    >
                                    SEARCH
                                </Button>
                                </span>
                            </Tooltip>

                    }
                </div>
            </div>
        )
    }
}
