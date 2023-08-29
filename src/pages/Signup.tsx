import Wrapper from '../components/@common/wrapper/Wrapper';
import SignupForm from '../components/signup/SignupForm';

export default function Signup() {
    return (
        <Wrapper>
            <div className="signup-wrapper">
                <SignupForm />
            </div>
        </Wrapper>
    );
}
