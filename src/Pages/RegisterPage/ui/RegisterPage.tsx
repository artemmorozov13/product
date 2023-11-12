import { FC } from "react";
import styles from "./RegisterPage.module.scss"
import { RegistrationForm } from "Features/RegistrationForm";

const RegisterPage: FC = () => {
    return (
        <main className={styles.wrapper}>
            <RegistrationForm />
        </main>
    )
}

export default RegisterPage
