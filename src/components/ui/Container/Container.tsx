import type { HTMLAttributes } from 'react'
import joinClassName from '@/helper/joinClassName'
import styles from './Container.module.scss'

type Props = HTMLAttributes<HTMLDivElement>

export function Container({ className, children, ...rest }: Props) {
    return (
        <div className={joinClassName(styles.container, className)} {...rest}>
            {children}
        </div>
    )
}
