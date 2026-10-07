import heroImg from '@/assets/image/hero.png'
import { Button } from '@/components/ui/Button/Button'
import { Description } from '@/components/ui/Description/Description'
import { Section } from '@/components/ui/Section/Section'
import styles from './Hero.module.scss'

export function Hero() {
    return (
        <Section className={styles.hero}>
            <div className={styles.grid}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Maximize Customer Support With{' '}
                        <span className={styles.highlight}>Faster</span> AI
                        Chatbot
                    </h1>
                    <Description className={styles.subtitle}>
                        The future of customer support is here. Explore the
                        potential of AI-powered virtual assistants for better
                        experience.
                    </Description>
                    <Button>Try beta today</Button>
                </div>
                <div className={styles.visual}>
                    <img
                        src={heroImg}
                        alt="AI Chatbot assisting a customer support agent"
                        className={styles.image}
                        width={553}
                        height={419}
                        fetchPriority="high"
                    />
                </div>
            </div>
        </Section>
    )
}