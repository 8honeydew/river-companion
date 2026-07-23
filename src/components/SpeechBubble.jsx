function SpeechBubble({ speech, showSpeech }) {

    if (!showSpeech) {
        return null;
    }

    return (
        <div className="message-bubble">
            {speech}
        </div>
    );
}

export default SpeechBubble;