import Navbar from "../component/landing/Navbar";
import CommunityStoriesPage from "./communityStories/page";
import FAQ from "./faq/page";
import FeaturePage from "./feature/page";
import ForCustomerPage from "./forCoustomer.tsx/page";
import ForShopOwnerPage from "./forShopOwner/page";
import Title from "./heroSection/page";
import HowWorkPage from "./howwork/page";
import JoinsPage from "./joins/page";
import LandingLayout from "./layout";
import PricingPlansPage from "./PricingPlans/page";
import ShopCategoriesPage from "./shopCategories/page";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
    <div className="landing-layout">
      <Title />
      <FeaturePage />
      <HowWorkPage />
      <ForShopOwnerPage />
      <ForCustomerPage />
      <ShopCategoriesPage />
      <CommunityStoriesPage />
      <PricingPlansPage />
      <FAQ />
      <JoinsPage />
    </div>
  );
};

export default layout;