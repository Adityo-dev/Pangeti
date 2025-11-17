function FooterLinksList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 className="text-lg font-semibold mb-4">Get Support</h3>
        <ul className="space-y-2 text-sm">
          <li>Help Center</li>
          <li>Live chat</li>
          <li>Check order status</li>
          <li>Refunds</li>
          <li>Report abuse</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Payment and protections</h3>
        <ul className="space-y-2 text-sm">
          <li>Safe and easy payments</li>
          <li>Money-back policy</li>
          <li>On-time shipping</li>
          <li>After-sales protections</li>
          <li>Product monitoring services</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">More Info</h3>
        <ul className="space-y-2 text-sm">
          <li>Request for Quotation</li>
          <li>Membership program</li>
          <li>Pangeti.com Logistics</li>
          <li>Sales tax and VAT</li>
          <li>Pangeti.com Reads</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">For Sellers</h3>
        <ul className="space-y-2 text-sm">
          <li>Start selling</li>
          <li>Seller Central</li>
          <li>Become a verified Supplier</li>
          <li>Partnership</li>
          <li>Download the app for Suppliers</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinksList;
