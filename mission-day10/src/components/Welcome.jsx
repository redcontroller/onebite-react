import "./Welcome.module.css";

const Welcome = ({name, isMember}) => {
    const WelcomeString = name + "님 다시 오셨군요!";

    return (
        <h1>
            {isMember ? (
                Array.from(WelcomeString).map((letter, idx) => <span key={idx}>{letter}</span>)
            ) : (
                <span>{name}님 가입하시겠어요?</span>
            )}
        </h1>
    );
};

Welcome.defaultProps = {
    name: "방문자",
    isMember: false,
};

export default Welcome;