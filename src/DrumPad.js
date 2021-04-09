import React from 'react'

class DrumPad extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress.bind(this));
    }
    handleKeyPress(event) {
        if (event.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }
    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();

        this.props.updateDisplay(this.props.name);
    }
    render() {
        return (
            <button className="drum-pad grid-item btn btn-dark" onClick={this.playSound.bind(this)} id={this.props.name}>{this.props.keyTrigger}
                <audio className="clip" src={this.props.url} id={this.props.keyTrigger}></audio>
            </button>
        );
    }
}
export default DrumPad;