import type { HTMLAttributes } from 'react'
import joinClassName from '@/helper/joinClassName.helper'
import type { DescriptionTone } from '../../../config/tone.config'
import styles from './Description.module.scss'

type Align = 'left' | 'center'

type Props = HTMLAttributes<HTMLParagraphElement> & {
    tone?: DescriptionTone
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