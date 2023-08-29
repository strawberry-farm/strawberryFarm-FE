import Wrapper from '../components/@common/wrapper/Wrapper';
import PasswordResetForm from '../components/password/PasswordResetForm';

export default function PasswordReset() {
    return (
        <Wrapper>
            <div className="password-reset-wrapper">
                <PasswordResetForm />
            </div>
        </Wrapper>
    );
}
