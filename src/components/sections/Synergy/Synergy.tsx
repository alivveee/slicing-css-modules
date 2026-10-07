import synergyImg from '@/assets/image/synergy.png'
import { Description } from '@/components/ui/Description/Description'
import { Section } from '@/components/ui/Section/Section'
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { Subtitle } from '@/components/ui/Subtitle/Subtitle'
import styles from './Synergy.module.scss'

export function Synergy() {
    return (
        <Section tone="dark">
            <SectionTitle
                before="Work in"
                highlight="Synergy"
                after="with AI"
                tone="dark"
            />
            <div className={styles.grid}>
                <div className={styles.copy}>
                    <Subtitle tone="dark">Advanced AI Assistant</Subtitle>
                    <Description tone="muted">
                        This paragraph mainly talk about our advanced and smarter
                        AI that are scalable and seamless switch between AI and
                        real CS
                    </Description>
                </div>
                <div className={styles.media}>
                    <img
                        src={synergyImg}
                        alt="Synergy behavior panel preview"
                        className={styles.image}
                    />
                </div>
            </div>
        </Section>
    )
}