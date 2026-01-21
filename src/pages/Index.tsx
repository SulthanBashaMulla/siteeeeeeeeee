import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { AnimatedHighlight } from '@/components/home/AnimatedHighlight';
import { StatsSection } from '@/components/home/StatsSection';
import { FoundersPreview } from '@/components/home/FoundersPreview';
import { RecentWorks } from '@/components/home/RecentWorks';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  const handleExploreClick = () => {
    const menuButton = document.querySelector('[aria-label="Toggle menu"]') as HTMLButtonElement;
    if (menuButton) {
      menuButton.click();
    }
  };

  return (
    <Layout>
      <HeroSection onExploreClick={handleExploreClick} />
      <ServicesPreview />
      <AnimatedHighlight />
      <StatsSection />
      <FoundersPreview />
      <RecentWorks />
      <CTASection />
    </Layout>
  );
};

export default Index;
