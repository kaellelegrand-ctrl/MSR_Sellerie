import PageHero from "../components/PageHero"
import SceneKicker from "../components/SceneKicker"
import Reveal from "../components/Reveal"
import CtaButton from "../components/CtaButton"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import { useAvantApresPairs } from "../lib/useAvantApresPairs"

const prestations = [
  "Bancs de musculation",
  "Assises et dossiers de machines",
  "Appareils de fitness",
  "Équipements rembourrés",
  "Mobilier destiné aux espaces sportifs",
]

export default function SellerieSport() {
  const avantApres = useAvantApresPairs("avant-apres", "sport")

  return (
    <div>
      <PageHero
        index="03"
        eyebrow="Sellerie pour salles de sport"
        title="Sollicité chaque jour. Restauré pour durer."
        description="MSR Sellerie intervient auprès des salles de sport, clubs et professionnels du fitness pour la rénovation des éléments de sellerie présents sur leurs équipements."
      />

      <section className="max-w-6xl mx-auto px-6 pb-6 md:pb-12">
        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:gap-12 items-center">
          <Reveal type="scale">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-ink md:aspect-4/5">
              <img
                src="/avant-apres/sport-1-apres.jpg"
                alt="Équipement de sport rénové par MSR Sellerie"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display italic text-xl md:text-3xl leading-snug text-leather-light mb-3 md:mb-6">
              Remis en état, prêt à repartir.
            </p>
            <div className="border-l-2 border-leather/30 pl-4 text-bone-dim leading-relaxed text-base md:pl-6 md:text-lg">
              <p>
                Assises, dossiers, bancs de musculation, machines guidées ou
                encore différents éléments rembourrés peuvent être{" "}
                <span className="text-bone font-medium">restaurés</span>{" "}
                afin de retrouver un aspect propre, confortable et{" "}
                <span className="text-leather-light font-semibold">
                  professionnel
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-md bg-bone px-5 py-7 md:mt-12 md:px-14 md:py-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rotate-12 bg-leather/20 md:h-72 md:w-72"
          />
          <div className="relative">
            <SceneKicker
              label="Une utilisation intensive"
              lineClassName="bg-leather-light"
              textClassName="text-leather-light"
            />
            <Reveal>
              <h2 className="font-display font-semibold text-xl md:text-3xl leading-snug text-ink mb-3 md:mb-6 max-w-lg">
                Ça se déchire.{" "}
                <span className="text-leather-light">On le refait.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-3 text-ink/70 leading-relaxed max-w-xl text-base md:space-y-4 md:text-lg">
                <p>
                  Dans une salle de sport, les équipements sont sollicités
                  quotidiennement. Avec le temps, les revêtements peuvent se
                  déchirer, s'user, se fissurer ou perdre leur aspect
                  d'origine.
                </p>
                <p>
                  MSR Sellerie remplace les revêtements endommagés et réalise
                  chaque rénovation sur mesure en respectant la forme et les
                  dimensions de l'équipement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <SceneKicker label="Nos prestations concernent notamment" />
          <div className="flex flex-wrap gap-2 md:gap-3">
            {prestations.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <span className="inline-block rounded-full border border-leather/40 px-4 py-2 text-xs font-medium text-bone md:px-5 md:py-2.5 md:text-sm">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-leather/30 bg-ink-light py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-6">
          <SceneKicker index="04" label="Avant / Après" />
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone mb-2 md:mb-4">
              Usé. Puis
              <br />
              comme neuf.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-bone-dim leading-relaxed max-w-2xl text-base mb-4 md:text-lg md:mb-6">
              Faites glisser pour comparer — des équipements rénovés par MSR
              Sellerie, sans en modifier la structure d'origine.
            </p>
          </Reveal>
          <Reveal delay={180} type="scale">
            <BeforeAfterSlider pairs={avantApres} />
          </Reveal>
        </div>
      </section>

      <section className="bg-bone px-6 py-10 text-center md:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-display font-bold text-act text-ink">
              Remis en état.
              <br />
              Prêt à repartir.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-3 text-base leading-relaxed text-ink/70 md:mt-5 md:text-lg">
              Des équipements solides, remis en état pour durer.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <CtaButton to="/contact" size="lg" className="mt-6 md:mt-8">
              Parlons de votre salle
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
