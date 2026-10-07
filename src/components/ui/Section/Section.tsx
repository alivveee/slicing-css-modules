import type { HTMLAttributes } from 'react'
import { Container } from '../Container/Container'
import joinClassName from '@/helper/joinClassName'
import styles from './Section.module.scss'

type Tone = 'light' | 'dark' | 'blue'

type Props = HTMLAttributes<HTMLElement> & {
    tone?: Tone
}

export function Section({
    tone = 'light',
    className,
    children,
    ...rest
}: Props) {
    return (
        <section
            className={joinClassName(styles.section, styles[tone], className)}
            {...rest}>
            <Container>{children}</Container>
        </section>
    )
}
