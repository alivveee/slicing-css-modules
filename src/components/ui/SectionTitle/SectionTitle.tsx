import joinClassName from '@/helper/joinClassName'
import styles from './SectionTitle.module.scss'

type Tone = 'light' | 'dark' | 'blue'

type Props = {
    before?: string
    highlight: string
    after?: string
    as?: 'h1' | 'h2'
    tone?: Tone
}

export function SectionTitle({
    before,
    highlight,
    after,
    as: Tag = 'h2',
    tone = 'light',
}: Props) {
    return (
        <Tag className={joinClassName(styles.title, styles[tone])}>
            {before} <span className={styles.highlight}>{highlight}</span>{' '}
            {after}
        </Tag>
    )
}
