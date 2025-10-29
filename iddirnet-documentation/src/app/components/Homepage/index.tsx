'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../Navigation';
import SystemArchitecture from '../systemarchitecture';
import TargetUsers from '../targetusers/indes';
import ProductOverview from '../productOverview';

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <NavBar />

      {/* Main Content Area — shifted right */}
      <main className="ml-64 w-full p-6 md:p-8">
        {/* Hero Section — Elegant & Centered */}
        <section id="home" className="pt-6 pb-12 max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              No more guesswork, just trust. Just{' '}
              <span className="text-orange-500">IddirNet.</span>
            </h1>

            <div className="flex justify-center mb-8">
              <Image
                src="/images/people.png"
                alt="Iddir Community Illustration"
                width={450}
                height={350}
                className=" max-w-full h-auto transition-transform hover:scale-105"
              />
            </div>

            <p className="text-lg md:text-xl leading-relaxed max-w-7xl mx-auto text-gray-600">
              IddirNet is a digital platform built for Ethiopian communities, designed to modernize the traditional iddir system.
              It brings accountability, clarity, and convenience to one of Ethiopia's most cherished social institutions,
              empowering members to manage contributions, track finances, and reserve shared resources with full transparency.
              We bring communities together. IddirNet makes it easy to join, support, and connect with others, sharing life's joys and easing burdens all in one trusted space.
            </p>

            {/* Feature Boxes — Card Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Feature 1 */}
              <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <p className="text-orange-600 text-base leading-relaxed group-hover:text-orange-700 transition-colors">
                  Every contribution, expense, and balance is recorded digitally, no more guesswork or disputes.
                </p>
              </div>

              {/* Feature 2 - Highlighted */}
              <div className="bg-orange-500 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <p className="text-base leading-relaxed">
                  Members can easily check availability and reserve community assets without having to rely on word of mouth.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <p className="text-orange-600 text-base leading-relaxed group-hover:text-orange-700 transition-colors">
                  While modernizing them, IddirNet honors the core values of mutual aid and solidarity that defines iddirs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <section id="target-users">
            <TargetUsers />
          </section>
          <section id="system-architecture">
            <SystemArchitecture />
          </section>

          <section id="erd" className="py-12 text-center">
            <h2 className="text-3xl font-bold  mb-6" style={{ color: '#FF9800' }}>Entity Relationship Diagram (ERD)</h2>
            <Image
              src="/images/ERD.png"
              alt="Entity Relationship Diagram"
              width={1000}
              height={600}
              className="rounded-xl shadow-lg max-w-full h-auto mx-auto"
            />
          </section>

     <section id="use-client" className="py-12">
  <h2 className="text-3xl font-bold  text-center mb-12"style={{ color: '#FF9800' }}>Database Schema</h2>

  {/* Iddir + Membership — equal height */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
    {/* Iddir Model */}
    <div className="bg-white rounded-lg p-6 flex flex-col min-h-[420px]">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Iddir Model</h3>
      <div className="bg-white border-2 border-orange-400 text-gray-800 p-4 rounded-md overflow-x-auto flex-grow">
        <pre className="text-sm">
          <code>{`class Iddir(models.Model):
   iddir_id = models.AutoField(primary_key=True)
   iddir_name = models.CharField(max_length=100, unique=True)
   account_number = models.CharField(max_length=10, unique=True)
   address = models.CharField(max_length=50)
   latitude = models.FloatField(null=True, blank=True)
   monthly_fee = models.IntegerField(default=0)
   longitude = models.FloatField(null=True, blank=True)
   description = models.TextField()
   rule_text = models.TextField()
   is_approved = models.BooleanField(default=False)
   requested_by = models.ForeignKey(User, on_delete=models.CASCADE)
   approvers = models.ManyToManyField(User)
   approved_by = models.ManyToManyField(User)
   leader_availability_start = models.DateTimeField(null=True)
   leader_availability_end = models.DateTimeField(null=True)`}</code>
        </pre>
      </div>
      <p className="text-gray-600 mt-3 text-sm">
        Represents an Iddir community group with approval workflow and location data.
      </p>
    </div>

    {/* Membership Model */}
    <div className="bg-white rounded-lg p-6 flex flex-col min-h-[420px]">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Membership Model</h3>
      <div className="bg-white border-2 border-orange-400 text-gray-800 p-4 rounded-md overflow-x-auto flex-grow">
        <pre className="text-sm">
          <code>{`class Membership(models.Model):
   ROLE_CHOICES = [("member", "Member"), ("leader", "Leader")]
   STATUS_CHOICES = [("pending", "Pending"), ("accepted", "Accepted"), ("declined", "Declined")]
   
   membership_id = models.AutoField(primary_key=True)
   user = models.ForeignKey(User, on_delete=models.CASCADE)
   inviter = models.ForeignKey(User, on_delete=models.SET_NULL)
   iddir = models.ForeignKey(Iddir, on_delete=models.CASCADE)
   role = models.CharField(max_length=20, choices=ROLE_CHOICES)
   email = models.EmailField(max_length=254)
   image = models.ImageField(upload_to="membership_images/")
   is_active = models.BooleanField(default=True)
   is_approved = models.BooleanField(default=False)
   joined_at = models.DateField(null=True)
   left_at = models.DateField(null=True)
   status = models.CharField(max_length=20, choices=STATUS_CHOICES)
   token = models.CharField(max_length=100, unique=True)
   responded_at = models.DateTimeField(null=True)
   created_at = models.DateTimeField(default=timezone.now)`}</code>
        </pre>
      </div>
      <p className="text-gray-600 mt-3 text-sm">
        Manages user membership in Iddir communities with role-based access and invitation tokens.
      </p>
    </div>
  </div>

  {/* Payment + Renting — equal height */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
    {/* Payment Model */}
    <div className="bg-white rounded-lg p-6 flex flex-col min-h-[420px]">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Model</h3>
      <div className="bg-white border-2 border-orange-400 text-gray-800 p-4 rounded-md overflow-x-auto flex-grow">
        <pre className="text-sm">
          <code>{`class Payment(models.Model):
   PAYMENT_TYPE_CHOICES = [("monthly", "Monthly"), ("rent", "Rent")]
   
   payment_id = models.AutoField(primary_key=True)
   user = models.ForeignKey(User, on_delete=models.CASCADE)
   amount = models.DecimalField(max_digits=10, decimal_places=2)
   payment_date = models.DateField(null=True)
   payment_type = models.CharField(max_length=20, choices=PAYMENT_TYPE_CHOICES)
   fine = models.DecimalField(max_digits=10, decimal_places=2, default=0)
   due_date = models.DateField(null=True)
   paying_iddir = models.ForeignKey(Iddir, on_delete=models.CASCADE)
   receiving_iddir = models.ForeignKey(Iddir, on_delete=models.CASCADE)
   receipt_file = models.FileField(upload_to="receipts/")
   merchant_request_id = models.CharField(max_length=255)
   checkout_request_id = models.CharField(max_length=255)
   mpesa_receipt_number = models.CharField(max_length=50)
   result_code = models.CharField(max_length=10)
   result_desc = models.TextField()
   status = models.CharField(max_length=20, default="PENDING")
   renting = models.ManyToManyField(Renting)`}</code>
        </pre>
      </div>
      <p className="text-gray-600 mt-3 text-sm">
        Handles all payment transactions including monthly fees and resource rentals with M-Pesa integration.
      </p>
    </div>

    {/* Renting Model */}
    <div className="bg-white rounded-lg p-6 flex flex-col min-h-[420px]">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Renting Model</h3>
      <div className="bg-white border-2 border-orange-400 text-gray-800 p-4 rounded-md flex-grow">
        <pre className="text-sm whitespace-pre-wrap break-words">
          <code>{`class Renting(models.Model):
   TRANSACTION_TYPES = [("booking", "Booking"), ("renting", "Renting")]
   STATUS_CHOICES = [("active", "Active"), ("returned", "Returned"), ("cancelled", "Cancelled")]
   
   rented_id = models.AutoField(primary_key=True)
   resources = models.ManyToManyField(Resources, through=RentingResource)
   renter = models.ForeignKey(Iddir, on_delete=models.CASCADE)
   borrower = models.ForeignKey(Iddir, on_delete=models.CASCADE)
   user = models.ForeignKey(User, on_delete=models.CASCADE)
   rental_start_date = models.DateField()
   rental_end_date = models.DateField()
   transaction_type = models.CharField(max_length=10)
   status = models.CharField(max_length=10)
   total_price = models.DecimalField(max_digits=10, decimal_places=2)
   created_at = models.DateTimeField(auto_now_add=True)`}</code>
        </pre>
      </div>
      <p className="text-gray-600 mt-3 text-sm">
        Manages resource rentals between Iddir communities.
      </p>
    </div>
  </div>

  {/* Resources — unchanged (no height constraint) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Resources Model</h3>
      <div className="bg-white border-2 border-orange-400 text-gray-800 p-4 rounded-md">
        <pre className="text-sm whitespace-pre-wrap break-words">
          <code>{`class Resources(models.Model):
   resource_id = models.AutoField(primary_key=True)
   resource_name = models.CharField(max_length=50)
   image = models.ImageField(upload_to="resource_images/")
   available_quantity = models.IntegerField()
   unit_price = models.DecimalField(max_digits=10, decimal_places=2)
   iddir = models.ForeignKey(Iddir, on_delete=models.CASCADE)
   resource_status = models.CharField(max_length=20)`}</code>
        </pre>
      </div>
      <p className="text-gray-600 mt-3 text-sm">
        Represents physical resources owned by Iddir communities.
      </p>
    </div>
  </div>
</section>

          <section id="features" className="py-12">
            <h2 className="text-3xl font-bold  text-center mb-12"style={{ color: '#FF9800' }}>IddirNet Features</h2>

            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Inventory Tracking Module</h3>
                <p className="leading-relaxed">
                  Manages the full lifecycle of Iddir resources, including items owned, borrowed, let, and rented.
                  It provides real-time updates on resource status, ensuring transparency and reducing disputes among members
                  because members can see if the materials are available or not. The module displays detailed information about
                  rented items alongside their corresponding amounts, enabling members to see the financial value of rented
                  resources and promoting accountability.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold  mb-4" style={{ color: '#FF9800' }}>Resource Renting</h3>
                <p className="leading-relaxed">
                  Leaders will be able to see all the Iddirs that are renting out their materials.
                  They can then be able to decide which Iddir they want to rent from and select the materials they want to rent from that Iddir,
                  make the payment then collect the materials after being informed of the time to collect them.
                  Leaders will also be able to see other Iddir leaders who want to rent materials from them.
                  Once materials are rented out, the available materials will reduce in number since they are not currently available.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Payment Management Module</h3>
                <p className="leading-relaxed">
                  Facilitates easy handling of all types of payments within the Iddir, including monthly fees, fines for missed contributions or meetings, and rental payments for borrowed items. It automatically generates and issues digital receipts for every transaction, which are stored and accessible to all members. The module also lists members alongside the amounts and timestamps of their payments, enhancing transparency and preventing payment-related misunderstandings.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Member Management Module</h3>
                <p className="leading-relaxed">
                  Stores and manages member profiles, tracking their payment histories, borrowing activities, and participation in Iddir functions. It allows Iddir leaders to view active members, their statuses, and contribution records, fostering inclusive and informed community management. The members can also view members and leaders.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">5</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Authentication & Security</h3>
                <p className="leading-relaxed">
                  Secures user access to the platform, allowing members to register, log in, and access only relevant information based on their roles (member and leader). Role-based access ensures sensitive financial and resource data is protected, maintaining community trust and privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Key Endpoints Section */}
          <section id="key-endpoints" className="py-12">
            <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Key API Endpoints</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Endpoint 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">POST</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/signup/</span>
                </div>
                <p className="text-gray-600 text-sm">Create a new user account and register as a member</p>
              </div>

              {/* Endpoint 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">POST</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/login/</span>
                </div>
                <p className="text-gray-600 text-sm">Authenticate users and provide access tokens</p>
              </div>

              {/* Endpoint 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">GET</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/iddirs/</span>
                </div>
                <p className="text-gray-600 text-sm">Retrieve list of all Iddirs and their details</p>
              </div>

              {/* Endpoint 4 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">GET</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/membership/</span>
                </div>
                <p className="text-gray-600 text-sm">Access membership information and status</p>
              </div>

              {/* Endpoint 5 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">GET</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/renting/</span>
                </div>
                <p className="text-gray-600 text-sm">Manage resource rentals and availability</p>
              </div>

              {/* Endpoint 6 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">GET</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/users/</span>
                </div>
                <p className="text-gray-600 text-sm">Retrieve user profiles and account information</p>
              </div>

              {/* Endpoint 7 */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all hover:border-orange-300 group">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">GET</span>
                  <span className="ml-3 font-mono text-sm text-gray-700 group-hover:text-orange-600 transition-colors">/api/payments/</span>
                </div>
                <p className="text-gray-600 text-sm">Access payment history and transaction records</p>
              </div>
            </div>
          </section>

          <section id="product-overview">
            <ProductOverview />
          </section>

          <div className="h-16"></div>
        </div>
      </main>

      {/* Slow Rotation Animation for Target Image */}
      <style>
        {`
          @keyframes rotateSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-rotate-slow {
            animation: rotateSlow 20s linear infinite;
            transform-origin: center;
          }
        `}
      </style>
    </div>
  );
}