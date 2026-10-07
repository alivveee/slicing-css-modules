import { Container } from '@/components/ui/Container/Container'
import styles from './Header.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <Container className={styles.inner}>
                <a href="/" className={styles.logo}>
                    <img src="/logo.svg" alt="SynChat logo" />
                </a>
            </Container>
        </header>
    )
}
