import type { ButtonHTMLAttributes } from 'react'
import joinClassName from '@/helper/joinClassName.helper'
import styles from './Button.module.scss'

type Variant = 'primary' | 'outline' | 'light'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
}

export function Button({
    variant = 'primary',
    className,
    type = 'button',
    ...rest
}: Props) {
    return (
        <button
            className={joinClassName(styles.button, styles[variant], className)}
            type={type}
            {...rest}
        />
    )
}
