import Navbar from "../component/landing/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
    <div className="landing-layout">
      <Navbar />
      <div className="landing-content">
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingLayout;
