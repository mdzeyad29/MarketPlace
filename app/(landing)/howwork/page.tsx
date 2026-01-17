const HowWorkPage = () => {     
    return (
      <section className="py-12 bg-gray-100">   

        <div className="container mx-auto px-4">        
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Step 1: Sign Up</h3>
                    <p className="text-gray-700">
                        Create an account by providing your email and setting a password.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Step 2: Browse Listings</h3>
                    <p className="text-gray-700">
                        Explore our wide range of products and services available on the marketplace.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Step 3: Make a Purchase</h3>
                    <p className="text-gray-700">
                        Select your desired items, add them to your cart, and proceed to checkout.
                    </p>
                </div>
            </div>
        </div>
      </section>
    );
};

export default HowWorkPage;     