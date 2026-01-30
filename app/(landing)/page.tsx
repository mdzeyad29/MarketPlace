
import CommunityStoriesPage from "./communityStories/page";
import FAQ from "./faq/page";
import FeaturePage from "./feature/page";
import ForCustomer from "./forCoustomer.tsx/page";
import ForCustomerPage from "./forCoustomer.tsx/page";
import ForShopOwnerPage from "./forShopOwner/page";
import Title from "./heroSection/page";
import HowWorkPage from "./howwork/page";
import ShopCategoriesPage from "./shopCategories/page";
import SuccessStoryPage from "./SuccessStory/page";
import SubscriptionPlan from "@/components/landing/SubsciptionPlan";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
    <div className="landing-layout flex flex-col gap-10"> 
      <Title />
      <FeaturePage />
      <HowWorkPage />
      <CommunityStoriesPage />
      <ForShopOwnerPage />
     <ForCustomer />
      <ShopCategoriesPage />
      <SuccessStoryPage />
      <SubscriptionPlan />
      <FAQ />
    </div>
  );
};

export default layout;