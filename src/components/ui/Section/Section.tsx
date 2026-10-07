import type { HTMLAttributes } from 'react'
import { Container } from '../Container/Container'
import joinClassName from '@/helper/joinClassName.helper'
import type { SurfaceTone } from '../../../config/tone.config'
import styles from './Section.module.scss'

type Props = HTMLAttributes<HTMLElement> & {
    tone?: SurfaceTone
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
