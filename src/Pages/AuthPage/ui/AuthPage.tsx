import { AuthForm } from "Features/AuthForm";
import { FC } from "react";
import styles from "./Auth.module.scss"

const AuthPage: FC = () => {
    return (
        <main className={styles.wrapper}>
            <AuthForm />
        </main>
    )
}

export default AuthPage
