import React from 'react';

const TYPING_SPEED = 300;
const DELETING_SPEED = 50;

class Typer extends React.Component {
    state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: TYPING_SPEED,
    };

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED,
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 500);
        } else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1,
            });
        }

        setTimeout(this.handleType, typingSpeed);
    };

    render() {
        return (
            <span>
                <span>{this.state.text}</span>
                <span id="cursor"></span>
            </span>
        );
    }
}

export default Typer;
