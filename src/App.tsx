import { Benefit } from '@/components/sections/Benefit/Benefit'
import { Header } from '@/components/layout/Header/Header'
import { Hero } from '@/components/sections/Hero/Hero'
import { Synergy } from '@/components/sections/Synergy/Synergy'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Synergy />
                <Benefit />
            </main>
        </>
    )
}

export default App