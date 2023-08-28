import Wrapper from '../components/@common/wrapper/Wrapper';
import SigninForm from '../components/signin/SigninForm';

export default function Signin() {
    return (
        <Wrapper>
            <div className="signin-wrapper">
                <SigninForm />
            </div>
        </Wrapper>
    );
}
