'use client';

export function ThreeCardSection() {
  return (
    <div className="relative z-50 min-h-[60vh] flex items-center justify-center py-12 px-8">
      <div className="max-w-5xl w-full flex flex-col gap-0">
        {/* Card 1 */}
        <div className="relative bg-[#f5f5f5] px-8 py-12 min-h-[200px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/images/breaker.png)' }}></div>
          <div className="relative" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <h2 className="text-3xl font-normal text-gray-800 mb-4">AI Native<br />Automations for<br />Finance Teams</h2>
            <p className="text-sm text-gray-600 mb-4 max-w-md">Finance and commercial leaders at high-growth companies automate their quote to revenue workflow with Sequence</p>
            <button className="px-4 py-2 bg-white text-gray-800 text-sm rounded hover:bg-gray-100">See how it works</button>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="relative bg-[#f5f5f5] px-8 py-12 min-h-[200px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/images/breaker2.png)' }}></div>
          <div className="relative" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <h2 className="text-3xl font-normal text-gray-800 mb-4">Enterprise Integration</h2>
            <p className="text-sm text-gray-600 max-w-md">Enterprise accounts integration with production-ready tracking functionalities</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="relative bg-[#f5f5f5] px-8 py-12 min-h-[200px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/images/breaker3.png)' }}></div>
          <div className="relative" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <h2 className="text-3xl font-normal text-gray-800 mb-4">Household Tracking</h2>
            <p className="text-sm text-gray-600 max-w-md">Household-friendly mobile app for easy Recycling, Waste Management, and Intentional Grocery Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
