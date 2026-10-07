import type { HTMLAttributes } from 'react'
import joinClassName from '@/helper/joinClassName'
import styles from './Description.module.scss'

type Tone = 'default' | 'muted'
type Align = 'left' | 'center'

type Props = HTMLAttributes<HTMLParagraphElement> & {
    tone?: Tone
    align?: Align
}

export function Description({
    tone = 'default',
    align = 'left',
    className,
    children,
}: Props) {
    return (
        <p
            className={joinClassName(
                styles.description,
                styles[tone],
                styles[align],
                className,
            )}
        >
            {children}
        </p>
    )
}