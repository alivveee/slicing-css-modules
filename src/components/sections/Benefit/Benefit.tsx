import benefit1 from '@/assets/image/benefit-1.png'
import benefit2 from '@/assets/image/benefit-2.png'
import benefit3 from '@/assets/image/benefit-3.png'
import { Description } from '@/components/ui/Description/Description'
import { Section } from '@/components/ui/Section/Section'
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { Subtitle } from '@/components/ui/Subtitle/Subtitle'
import styles from './Benefit.module.scss'

const cards = [
    {
        icon: benefit1,
        alt: 'Cost effective icon',
        title: 'Cost Effective',
        desc: 'This paragraph mainly talk about our advanced and smarter AI that are',
    },
    {
        icon: benefit2,
        alt: 'Secure icon',
        title: 'Secure',
        desc: 'Establishing partnerships with local businesses and technology providers',
    },
    {
        icon: benefit3,
        alt: 'Scalable icon',
        title: 'Scalable',
        desc: 'We ensure the platform scalable to handle the growth of user businesses',
    },
]

export function Benefit() {
    return (
        <Section tone="blue">
            <SectionTitle
                highlight="How Can We Support Your Work"
                tone="blue"
            />
            <div className={styles.grid}>
                {cards.map((card) => (
                    <div key={card.title} className={styles.card}>
                        <img
                            src={card.icon}
                            alt={card.alt}
                            className={styles.icon}
                            width={110}
                            height={120}
                        />
                        <Subtitle tone="blue" align="center">
                            {card.title}
                        </Subtitle>
                        <Description tone="muted" align="center">
                            {card.desc}
                        </Description>
                    </div>
                ))}
            </div>
        </Section>
    )
}
