import type { HTMLAttributes } from 'react'
import joinClassName from '@/helper/joinClassName.helper'
import type { SurfaceTone } from '../../../config/tone.config'
import styles from './Subtitle.module.scss'

type Align = 'left' | 'center'

type Props = HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h3' | 'h4'
    tone?: SurfaceTone
    align?: Align
}

export function Subtitle({
    as: Tag = 'h3',
    tone = 'light',
    align = 'left',
    className,
    children,
}: Props) {
    return (
        <Tag
            className={joinClassName(
                styles.subtitle,
                styles[tone],
                styles[align],
                className,
            )}
        >
            {children}
        </Tag>
    )
}